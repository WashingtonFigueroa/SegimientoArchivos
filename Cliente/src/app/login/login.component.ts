import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import {LoginService} from '../login.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    errors = {
        'password' : ''
    };
    loginGroup: FormGroup;
    constructor(public router: Router,
                protected toastr: ToastrService,
                protected loginService: LoginService,
                protected fb: FormBuilder) {
        if (this.loginService.estaAutenticado()) {
            this.router.navigate(['/dashboard']);
        }
        this.createForm();
    }

    ngOnInit() {}

    createForm() {
        this.loginGroup = this.fb.group({
            'cuenta' : new FormControl('', [Validators.required]),
            'password' : new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9$]{5,}$/)])
        });
    }
    login() {
        this.errors.password = '';
        this.loginService.login(this.loginGroup.value)
            .subscribe((res: any) => {
                this.toastr.success(res.mensaje, 'Ingresando al sistema');
                localStorage.setItem('fileTrackingToken', res.token);
                localStorage.setItem('fileTrackingUsuario', JSON.stringify(res.usuario) );
                localStorage.setItem('fileTrackingPrivilegios', JSON.stringify(res.privilegios) );
                this.router.navigate(['/dashboard']);
            }, (error: any) => {
                console.log('res');
                if ('error' in error.error) {
                    if (error.error.error === 'invalid_credentials') {
                        this.loginGroup.reset();
                        this.toastr.error('Credenciales invalidas', 'Error de autenticacion');
                    }
                }
                if ('errors' in error.error) {
                    if ('password' in error.error.errors) {
                        error.error.errors.password.map(message => {
                            this.errors.password += message + '<br/>';
                        });
                    }
                }
                console.log(error);
            });
    }
}
