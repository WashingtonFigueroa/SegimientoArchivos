import { Component, OnInit } from '@angular/core';
import {DepartamentoService} from '../../departamento/departamento.service';
import {PrivilegioService} from '../privilegio.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Component({
  selector: 'app-privilegio-create',
  templateUrl: './privilegio-create.component.html',
  styleUrls: ['./privilegio-create.component.scss']
})
export class PrivilegioCreateComponent implements OnInit {

    departamento_id = 0;
    privilegio = {
        departamento: false,
        usuario: false,
        privilegio: false,
        cliente: false,
        tipo_tramite: false,
        tramite: false,
        recorrido: false
    };

    departamentos: any = null;
    constructor(protected departamentoService: DepartamentoService,
               // protected loginService: LoginService,
                protected privilegioService: PrivilegioService,
                protected router: Router,
                protected toastr: ToastrService) {
        this.departamentoService.lista_departamentos().subscribe(res => this.departamentos = res);
       // console.log(this.loginService.getUsuario());
    }

    ngOnInit() {
    }

    loadPrivilegios(departamento_id) {
        this.departamentoService.listaPrivilegios(departamento_id)
            .subscribe((privilegios: any) => {
               // console.log(privilegios);
                const lista = privilegios;
                lista.map(privilegio => {
                    switch (privilegio.ruta) {
                        case 'departamento': this.privilegio.departamento = privilegio.activo; break;
                        case 'usuario': this.privilegio.usuario = privilegio.activo; break;
                        case 'privilegio': this.privilegio.privilegio = privilegio.activo; break;
                        case 'cliente': this.privilegio.cliente = privilegio.activo; break;
                        case 'tipo_tramite': this.privilegio.tipo_tramite = privilegio.activo; break;
                        case 'tramite': this.privilegio.tramite = privilegio.activo; break;
                        case 'recorrido': this.privilegio.recorrido = privilegio.activo; break;
                    }
                });
            });
    }
    update() {
        this.privilegioService.update(this.departamento_id, this.privilegio)
            .subscribe(res => {
                this.toastr.success('Los privilegios fueron creados exitosamente', 'Registro exitoso');
                this.router.navigate(['privilegio']);
            });
    }
}