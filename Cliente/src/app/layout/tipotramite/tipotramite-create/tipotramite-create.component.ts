import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TipotramiteService} from '../tipotramite.service';
import {DepartamentoService} from '../../departamento/departamento.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tipotramite-create',
  templateUrl: './tipotramite-create.component.html',
  styleUrls: ['./tipotramite-create.component.scss'],

})
export class TipotramiteCreateComponent implements OnInit {
    departamentos: any = null;
    tipotramiteGroup: FormGroup;

    constructor(protected tipoTramiteService: TipotramiteService,
                protected departamentoService: DepartamentoService,
                protected fb: FormBuilder,
                protected router: Router,
                protected toartr: ToastrService) {
        this.departamentoService.lista_departamentos().subscribe(res => this.departamentos = res);
        this.createForm();
    }

    ngOnInit() {
    }

    createForm() {
        this.tipotramiteGroup = this.fb.group({
            'departamento_id' : new FormControl(0, [Validators.required]),
            'nombre' : new FormControl('', [Validators.required]),
            'descripcion' : new FormControl('')
        });
    }

    store() {
        this.tipoTramiteService.store(this.tipotramiteGroup.value)
            .subscribe(res => {
                this.router.navigate(['tipo_tramite']);
                this.toartr.success('Tipo Tramite Registard','Ok');
            }, (error) => {
                this.toartr.error('Tipo Tramite', 'Error Tipo Tramite');
            });
    }

}