import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';
import {LoginService} from '../../login.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(protected router: Router,
                protected loginService: LoginService) {}
    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.loginService.estaAutenticado()) {
            let privilegios = [];
            privilegios = JSON.parse(atob(localStorage.getItem('fileTrackingPrivilegios')));
            console.log(privilegios);

            if (state.url === '/dashboard') {
                return true;
            }
            if (privilegios !== null) {
                for (let i = 0; i < privilegios.length; i++) {
                    if ('/' + privilegios[i].ruta + '/listar' === state.url)  {
                        return privilegios[i].activo === 1 ? true : false;
                    }
                }
            }
        }
        this.router.navigate(['/login']);
        return false;
    }
}
