import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {routerTransition} from '../../../router.animations';
import {TipotramiteService} from '../../tipotramite/tipotramite.service';
import {LoginService} from '../../../login.service';
import {DepartamentoService} from '../../departamento/departamento.service';
import {RecorridoService} from '../recorrido.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-recorrido-index',
  templateUrl: './recorrido-index.component.html',
  styleUrls: ['./recorrido-index.component.scss'],
  animations: [routerTransition()],
  encapsulation: ViewEncapsulation.None
})
export class RecorridoIndexComponent implements OnInit {

    public recorridos = [
        [],
        []
    ];
    tipo_tramites: any = null;
    tipo_tramite_id: any = null;
    search: any = null;
    constructor(protected tipoTramiteService: TipotramiteService,
                protected loginService: LoginService,
                protected departamentoService: DepartamentoService,
                protected recorridoService: RecorridoService,
                protected toastr: ToastrService) {
        const departamento_id = this.loginService.getUsuario().departamento_id;
        this.tipoTramiteService.get_tipo_tramites_departamento(departamento_id)
            .subscribe(res => this.tipo_tramites = res);
    }

    ngOnInit() {

    }
    public removeItem(item: any, list: any[]): void {
        list.splice(list.indexOf(item), 1);
    }

    recorridos_tipo_tramite(tipo_tramite_id) {
        this.tipoTramiteService.recorridos_tipo_tramite(tipo_tramite_id)
            .subscribe((res: any) => {
                this.recorridos[0] = res.recorridos_vacio;
                this.recorridos[1] = res.recorridos;
            });
    }
    update() {
        let i = 1;
        this.recorridos[1] = this.recorridos[1].map((recorrido: any) => {
            recorrido.posicion = i;
            i++;
            return recorrido;
        });
        this.recorridoService.update_recorridos(this.tipo_tramite_id, {recorridos: this.recorridos[1]})
            .subscribe(res => {
                this.toastr.success('Recorrido actualizado exitosamente', 'Actualización de recorrido');
            });
    }

}
