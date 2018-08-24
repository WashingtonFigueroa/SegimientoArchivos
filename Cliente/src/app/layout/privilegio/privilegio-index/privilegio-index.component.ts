import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {Router} from '@angular/router';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PrivilegioService} from '../privilegio.service';

@Component({
  selector: 'app-privilegio-index',
  templateUrl: './privilegio-index.component.html',
  styleUrls: ['./privilegio-index.component.scss']
})
export class PrivilegioIndexComponent implements OnInit {
    index: number = null;
    closeResult: string = null;
    privilegio_id: number = null;
    privilegios: any = [];
    privilegiosBK: any = [];
    environment = environment;
    search = '';

    constructor(protected privilegioService: PrivilegioService,
                protected router: Router,
                protected modalService: NgbModal) { }

    ngOnInit() {
        this.privilegioService.index()
            .subscribe((res: any) => {
                this.privilegios = res;
                this.privilegiosBK = res;
            });
    }
    buscar(search) {
        this.privilegios = this.privilegiosBK.filter((privilegio: any) => {
            return privilegio.departamento.nombre.toLowerCase().indexOf(search) > -1 ||
                privilegio.ruta.toLowerCase().indexOf(search) > -1
        });
    }
    destroy(index, id) {
        this.privilegioService.destroy(id)
            .subscribe(res => {
                this.privilegios.splice(index, 1);
            });
    }

    edit(id) {
        this.router.navigate(['privilegio/editar/' + id]);
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    confirm(index, id, confirmModal) {
        this.index = index;
        this.privilegio_id = id;
        this.modalService.open(confirmModal).result.then((result) => {
            if (result === 'si') {
                this.destroy(index, id);
            } else {
                console.log(result);
            }
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            console.log('cancel');
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
}
