import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ClienteService} from '../cliente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-cliente-edit',
  templateUrl: './cliente-edit.component.html',
  styleUrls: ['./cliente-edit.component.scss']
})
export class ClienteEditComponent implements OnInit {
    idcliente: number = null;
    cliente: any = null;
    clienteGroup: FormGroup;

    constructor(protected clienteService: ClienteService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router,
                protected toastr: ToastrService) {
        this.route.params.subscribe(param => {
            this.idcliente = param.id;
            this.clienteService.show(param.id)
                .subscribe(res => {
                    this.cliente = res;
                    this.createForm(res);
                });
        });
    }

    ngOnInit() {
    }

    createForm(cliente) {
        this.clienteGroup = this.fb.group({
            'tipo_documento' : new FormControl(cliente.tipo_documento, Validators.required),
            'identificacion' : new FormControl(cliente.identificacion, Validators.required),
            'nombres' : new FormControl(cliente.nombres, Validators.required),
            'telefono' : new FormControl(cliente.telefono, [Validators.pattern(/^\d{9}$/)]),
            'celular' : new FormControl(cliente.celular, [Validators.pattern(/^\d{10}$/)]),
            'correo' : new FormControl(cliente.correo, [Validators.pattern(/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/)]),
            'documneto' : new FormControl(cliente.documneto)
        });
    }


    update() {
        this.clienteService.update(this.clienteGroup.value, this.idcliente)
            .subscribe(res => {
                this.router.navigate(['cliente']);
                this.toastr.success('Cliente Actulizado','OK');
            });
    }
}