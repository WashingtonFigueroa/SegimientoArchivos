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
    tipotramites: any = null;
    tramiteGroup: FormGroup;
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
        const idcliente = item.item.original.id;
        this.tramiteGroup.patchValue({
            'id' : idcliente
        });
    }

    ngOnInit() {
    }

    createForm() {
        this.tramiteGroup = this.fb.group({
            'cliente_id' : new FormControl(0, Validators.required),
            'tipo_tramite_id' : new FormControl(0, [Validators.required]),
            'archivo' : new FormControl(''),
            'estado' : new FormControl(0, Validators.required),
            'fecha_inicio' : new FormControl('', Validators.required),
            'recorrido_id' : new FormControl('', Validators.required),
            'observacion' : new FormControl(''),
            'permiso' : new FormControl(0, Validators.required)
        });
    }

    store() {
        const Ingfecha = this.tramiteGroup.value.fecha_inicio;
        const f = new Date();
        const Sisfecha = f.getFullYear() + '-' + (f.getMonth() + 1) + '-' + f.getDate();
        if ((new Date(Ingfecha).getTime() <= new Date(Sisfecha).getTime())) {
            this.tramiteService.store(this.tramiteGroup.value)
                .subscribe(res => {
                    this.router.navigate(['tramite']);
                    this.toastr.success('El tramite fue creado exitosamente', 'Registro exitoso');
                });
        } else {
            this.toastr.error('La fecha ingresada es mayor a la fecha actual', 'Error Tramite');
        }
    }
}

