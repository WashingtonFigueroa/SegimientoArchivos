import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TipotramiteService} from '../tipotramite.service';
import {DepartamentoService} from '../../departamento/departamento.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-tipotramite-edit',
  templateUrl: './tipotramite-edit.component.html',
  styleUrls: ['./tipotramite-edit.component.scss']
})

export class TipotramiteEditComponent implements OnInit {
    idtipotramite: number = null;
    tipotramite: any = null;
    departamentos: any = null;
    tipotramiteGroup: FormGroup;

    constructor(protected tipotramiteService: TipotramiteService,
                protected documentosService: DepartamentoService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router,
                protected toastr: ToastrService ) {
        this.documentosService.lista_departamentos().subscribe(res => this.departamentos = res);
        this.route.params.subscribe(param => {
            this.idtipotramite = param.id;
            this.tipotramiteService.show(param.id).subscribe(res => {
                this.tipotramite = res;
                this.createForm(res);
            });
        });
    }

    ngOnInit() {}

    createForm(tipotramite) {
        this.tipotramiteGroup = this.fb.group({
            'departamento_id': new FormControl(tipotramite.departamento_id, [Validators.required]),
            'nombre': new FormControl(tipotramite.nombre, [Validators.required]),
            'descripcion' : new FormControl(tipotramite.descripcion),
        });
    }

    update() {
        this.tipotramiteService.update(this.tipotramiteGroup.value, this.idtipotramite)
            .subscribe(res => {
                this.router.navigate(['tipo_tramite']);
                this.toastr.success('Tipo Tramite Actualizado', 'Ok');
            }, (error) => {
                this.toastr.error('Tipo Tramite', 'Error Tipo Tramite');
            });
    }
}