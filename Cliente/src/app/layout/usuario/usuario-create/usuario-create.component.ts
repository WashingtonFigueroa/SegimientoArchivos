import { Component, OnInit } from '@angular/core';
import {DepartamentoService} from '../../departamento/departamento.service';
import {UsuarioService} from '../usuario.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.scss'],
  animations: [routerTransition()]
})
export class UsuarioCreateComponent implements OnInit {

    errors = {
      'cuenta': '',
      'password': ''
    };
    usuarioGroup: FormGroup;
    departamentos: any = null;
    constructor(protected departamentoService: DepartamentoService,
                protected usuarioService: UsuarioService,
                protected fb: FormBuilder,
                protected toastr: ToastrService) {
        this.createForm();
    }

    ngOnInit() {
        this.departamentoService.lista_departamentos()
            .subscribe(( res: any ) => {
                this.departamentos = res;
            });
    }
    createForm() {
        this.usuarioGroup = this.fb.group({
            'departamento_id': new FormControl(0, [Validators.required]),
            'nombres': new FormControl('', [Validators.required]),
            'cuenta': new FormControl('', [Validators.required]),
            'password': new FormControl('', [Validators.required]),
            'password_confirmation': new FormControl('', [Validators.required]),
        });
    }
    store() {
        this.errors = {
            cuenta: '',
            password: ''
        };
        this.usuarioService.store(this.usuarioGroup.value)
            .subscribe((res: any) => {
                console.log(res);
                this.usuarioGroup.reset();
                this.toastr.success('El usuario ' + res.nombres + ' fue creado exitosamente', 'Registro exitoso');
            }, (error: any) => {
                if (error.status === 422 ) {
                    this.toastr.error('Vuelva a llenar el formulario', 'Error de Validacion');
                }
                if (error.error.errors.cuenta) {
                    error.error.errors.cuenta.map( (message: any) => {
                        this.errors.cuenta += message + '<br/>';
                    });
                }
                if (error.error.errors.password) {
                    error.error.errors.password.map( (message: any) => {
                        this.errors.password += message + '<br/>';
                    });
                }
                console.log(error);
            });
    }
}
