import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {TramiteService} from '../tramite.service';

@Component({
  selector: 'app-tramite-edit',
  templateUrl: './tramite-edit.component.html',
  styleUrls: ['./tramite-edit.component.scss']
})
export class TramiteEditComponent implements OnInit {
    @ViewChild('nuevo_archivo') nuevo_archivo;

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
            'estado': new FormControl(tramite.estado, [Validators.required]),
            'observacion': new FormControl(tramite.observacion, [Validators.required]),
            'permiso' : new FormControl( permiso,[Validators.required]),
            'con_archivo' : new FormControl( false,[Validators.required]),
        });
    }

    update() {
        const formData = new FormData();
        const fileBrowser = this.nuevo_archivo.nativeElement;
        this.tramite.recorrido_id = this.tramiteGroup.value.recorrido_id;
        this.tramite.estado = this.tramiteGroup.value.estado;
        this.tramite.observacion = this.tramiteGroup.value.observacion;
        this.tramite.permiso = this.tramiteGroup.value.permiso ? 'publico' : 'recorrido';
        if (fileBrowser.files[0]) {
            formData.append('nuevo_archivo', fileBrowser.files[0]);
            formData.append('cliente_id', this.tramite.cliente_id);
            formData.append('tipo_tramite_id', this.tramite.tipo_tramite_id);
            formData.append('estado', this.tramite.estado);
            formData.append('fecha_inicio', this.tramite.fecha_inicio);
            formData.append('recorrido_id', this.tramite.recorrido_id);
            formData.append('observacion', this.tramite.observacion);
            formData.append('permiso', this.tramite.permiso);
            this.tramiteService.actualizar_archivo_tramite(formData, this.idtramite)
                .subscribe((res: any) => {
                    this.router.navigate(['tramite']);
                    this.toastr.success('Se actualizó con un nuevo archivo', 'Tramite Actualizado');
                }, (error: any) => {
                    this.toastr.error('Tramite', 'Error de Tramite');
                });
        } else {
            this.tramiteService.update(this.tramite, this.idtramite)
                .subscribe(res => {
                    this.router.navigate(['tramite']);
                    this.toastr.success('Se actualizaron los campos del tramite', 'Tramite actualizado');
                }, (error: any) => {
                    this.toastr.error('Tramite', 'Error de Tramite');
                });
        }
    }

}

