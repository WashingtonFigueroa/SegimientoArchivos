import {Component, OnInit, ViewChild} from '@angular/core';
import {CreateNewAutocompleteGroup, NgAutocompleteComponent, SelectedAutocompleteItem} from 'ng-auto-complete';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TramiteService} from '../tramite.service';
import {ClienteService} from '../../cliente/cliente.service';
import {TipotramiteService} from '../../tipotramite/tipotramite.service';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-tramite-create',
  templateUrl: './tramite-create.component.html',
  styleUrls: ['./tramite-create.component.scss']
})

export class TramiteCreateComponent implements OnInit {
    @ViewChild(NgAutocompleteComponent) public completer: NgAutocompleteComponent;
    clientesSearch: any = null;
    clientes: any = null;
    cliente: any = {
        nombres: '',
        correo: '',
        telefono: ''
    };
    tipotramites: any = null;
    tramiteGroup: FormGroup;

    @ViewChild('archivo') archivo;

    constructor(protected tramiteService: TramiteService,
                protected clienteService: ClienteService,
                protected tipotramiteService: TipotramiteService,
                protected router: Router,
                protected fb: FormBuilder,
                protected toastr: ToastrService) {
        this.createForm();
        this.tipotramiteService.lista_tipo_tramites().subscribe(res => this.tipotramites = res);
        this.clienteService.lista_clientes().subscribe(res => {
            this.clientes = res;
            this.load(res);
            console.log(res);
        });
    }

    load(clientes) {
        this.clientesSearch = [
            CreateNewAutocompleteGroup(
                'Buscar cliente',
                'completer',
                clientes,
                {titleKey: 'identificacion', childrenKey: null}
            ),
        ];
    }

    Selected(item: SelectedAutocompleteItem) {
        const cliente_id = item.item.original.id;
        this.clienteService.show(cliente_id)
            .subscribe(res => this.cliente = res);
        this.tramiteGroup.patchValue({
            'cliente_id' : cliente_id
        });
    }

    ngOnInit() {
    }

    createForm() {
        this.tramiteGroup = this.fb.group({
            'cliente_id' : new FormControl(0, Validators.required),
            'tipo_tramite_id' : new FormControl(0, [Validators.required]),
            'archivo' : new FormControl(''),
            'estado' : new FormControl('pendiente', Validators.required),
            'fecha_inicio' : new FormControl('', Validators.required),
            'recorrido_id' : new FormControl('', Validators.required),
            'observacion' : new FormControl(''),
            'permiso' : new FormControl(0, Validators.required)
        });
    }

    store() {
        const fecha_inicio = this.tramiteGroup.value.fecha_inicio;
        const formData = new FormData();
        const fileBrowser = this.archivo.nativeElement;

        if (fileBrowser.files[0]) {
            formData.append('archivo', fileBrowser.files[0]);
            formData.append('cliente_id', this.tramiteGroup.value.cliente_id);
            formData.append('tipo_tramite_id', this.tramiteGroup.value.tipo_tramite_id);
            formData.append('estado', this.tramiteGroup.value.estado);
            formData.append('fecha_inicio', this.tramiteGroup.value.fecha_inicio);
            formData.append('recorrido_id', this.tramiteGroup.value.recorrido_id);
            formData.append('observacion', this.tramiteGroup.value.observacion);
            formData.append('permiso', this.tramiteGroup.value.permiso ? 'publico' : 'recorrido');
        }

        console.log(new Date(fecha_inicio).getTime());
        console.log(Date.now());
        if ( new Date(fecha_inicio).getTime() <= Date.now()) {
            this.tramiteService.store(formData)
                .subscribe(res => {
                    this.router.navigate(['tramite']);
                    this.toastr.success('El tramite fue creado exitosamente', 'Registro exitoso');
                });
        } else {
            this.toastr.error('La fecha ingresada es mayor a la fecha actual', 'Error Tramite');
        }
    }
}

