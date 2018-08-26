import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {TramiteService} from '../tramite.service';
import {RecorridoService} from '../../recorrido/recorrido.service';

@Component({
  selector: 'app-tramite-edit',
  templateUrl: './tramite-edit.component.html',
  styleUrls: ['./tramite-edit.component.scss']
})
export class TramiteEditComponent implements OnInit {
    idtramite: number = null;
    tramite: any = null;
    departamentos: any = null;
    tramiteGroup: FormGroup;
    recorridos: any = null;

    constructor(protected tramiteService: TramiteService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router,
                protected toastr: ToastrService ) {
        this.route.params.subscribe(param => {
            this.idtramite = param.id;
            this.tramiteService.show(param.id).subscribe(res => {
                this.tramite = res;
                this.createForm(res);
            });
            this.tramiteService.recorridos_tramite(param.id)
                .subscribe(res => {
                    this.recorridos = res;
                });
        });
    }

    ngOnInit() {}

    createForm(tramite) {
        const permiso = tramite.permiso === 'publico' ? true : false;
        this.tramiteGroup = this.fb.group({
            'recorrido_id': new FormControl(tramite.recorrido_id, [Validators.required]),
            'observacion': new FormControl(tramite.observacion, [Validators.required]),
            'permiso' : new FormControl( permiso,[Validators.required]),
        });
    }

    update() {
        this.tramite.recorrido_id = this.tramiteGroup.value.recorrido_id;
        this.tramite.observacion = this.tramiteGroup.value.observacion;
        this.tramite.permiso = this.tramiteGroup.value.permiso ? 'publico' : 'recorrido';
        this.tramiteService.update(this.tramite, this.idtramite)
            .subscribe(res => {
                this.router.navigate(['tramite']);
                this.toastr.success('Tramite Actualizado', 'Ok');
            }, (error) => {
                this.toastr.error('Tramite', 'Error de Tramite');
            });
    }

}
