import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DepartamentoService} from '../../departamento/departamento.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {routerTransition} from '../../../router.animations';
import {UsuarioService} from '../usuario.service';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.scss'],
  animations: [routerTransition()]
})
export class UsuarioEditComponent implements OnInit {
    departamentos: any = null;
    usuario_id: number = null;
    usuario: any = null;
    usuarioGroup: FormGroup;

    constructor(protected usuarioService: UsuarioService,
                protected departamentoService: DepartamentoService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router,
                protected toastr: ToastrService) {
        this.departamentoService.lista_departamentos()
            .subscribe(res => this.departamentos = res);
        this.route.params.subscribe(param => {
            this.usuario_id = param.id;
            this.usuarioService.show(param.id)
                .subscribe(res => {
                    this.usuario = res;
                    console.log(res);
                    this.createForm(res);
                });
        });
    }

    ngOnInit() {
    }

    createForm(usuario) {
        this.usuarioGroup = this.fb.group({
            'departamento_id' : new FormControl(usuario.departamento_id, [Validators.required]),
            'nombres': new FormControl(usuario.nombres, [Validators.required]),
            'cuenta' : new FormControl(usuario.cuenta, [Validators.required]),
            'password': new FormControl(usuario.password, [Validators.required]),
            'password2': new FormControl(usuario.password, [Validators.required])
        });
    }

    update() {
        const clave1 = this.usuarioGroup.value.password;
        const clave2 = this.usuarioGroup.value.password2;
        if (clave1 === clave2) {
        this.usuario.departamento_id = this.usuarioGroup.value.departamento_id;
        this.usuario.nombres = this.usuarioGroup.value.nombres;
        this.usuario.cuenta = this.usuarioGroup.value.cuenta;
        this.usuario.password = this.usuarioGroup.value.password;
        this.usuarioService.update(this.usuario, this.usuario_id)
            .subscribe(res => {
                this.toastr.success('Usuario ' + this.usuario.nombres + ' actualizado', 'Exito');
                this.router.navigate(['usuario']);
            });
        } else {
            this.toastr.info('Contraseñas Incorrectas', 'Vereficar');

        }
    }

}
