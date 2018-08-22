import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClienteService} from '../cliente.service';
import {Router} from '@angular/router';
import {MaskService, NgxMaskModule} from 'ngx-mask';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})

export class ClienteCreateComponent implements OnInit {
    clienteGroup: FormGroup;
    successStatus = false;
    consulta_cedula;
    txt_ruc;

    constructor(protected fb: FormBuilder,
                protected clienteService: ClienteService,
                protected router: Router,
                protected toastr: ToastrService) {
      this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.clienteGroup = this.fb.group(
            {
                'tipo_documento': new FormControl('', [Validators.required]),
                'identificacion': new FormControl('', [Validators.required]),
                'nombres': new FormControl('', [Validators.required]),
                'telefono': new FormControl('', [Validators.pattern(/^\d{9}$/)]),
                'celular': new FormControl('', [Validators.pattern(/^\d{10}$/)]),
                'correo' : new FormControl('', [Validators.pattern(/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/)])
            });
    }

    store() {
        this.clienteService.store(this.clienteGroup.value)
            .subscribe((cliente: any) => {
                this.toastr.success('Cliente Registrado', 'Ok');
                this.router.navigate(['cliente']);
            }, (error) => {
                this.toastr.error('Cliente ya registrado', 'Error');
                this.clienteGroup.reset();
            });
        this.toastr.error('Cliente', 'Error');
    }

    consultacliente() {
        this.clienteService.consultaCedula(this.clienteGroup.value.cedula)
            .subscribe((cliente: any) => {
                if (cliente.datosPersona.valid === true) {
                    this.clienteGroup.patchValue(
                        {
                            cedula: cliente.datosPersona.identity,
                            nombres: cliente.datosPersona.name
                        });
                } else  {
                   // this.toastr.error('Ingrese Nuevamente', 'Error Cédula');
                    console.log('error');
                    this.clienteGroup.reset();
                }
            });
    }
}
