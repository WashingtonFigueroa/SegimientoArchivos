import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClienteService} from '../cliente.service';
import {Router} from '@angular/router';

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
                protected router: Router) {
      this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.clienteGroup = this.fb.group(
            {
                'tipo_documento': new FormControl('', [Validators.required]),
                'identificacion': new FormControl('', [Validators.required]),
                'nombres': new FormControl('', [Validators.required])
            });
    }

    store() {
        this.clienteService.store(this.clienteGroup.value)
            .subscribe((cliente: any) => {
                this.router.navigate(['cliente']);
                // this.toastr.success('Cliente Guardado', 'Ok');
                console.log('ok');
            }, (error) => {
                // this.toastr.error('Cliente ya registrado', 'Error de cliente');
                console.log('err');
                this.clienteGroup.reset();
            });
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