import { Component, OnInit } from '@angular/core';
import {DepartamentoService} from '../departamento.service';
import {environment} from '../../../../environments/environment.prod';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-departamento-index',
  templateUrl: './departamento-index.component.html',
  styleUrls: ['./departamento-index.component.scss'],
  animations: [routerTransition()]
})
export class DepartamentoIndexComponent implements OnInit {
    index: number = null;
    closeResult: string = null;
    departamento_id: number = null;
    departamentos: any = [];
    search = '';
    pages: any = [];
    prev_page: any = null;
    next_page: any = null;
    environment = environment;

    constructor(protected departamentoService: DepartamentoService,
                protected router: Router,
                protected modalService: NgbModal) { }

    ngOnInit() {
        this.departamentoService.index()
            .subscribe((res: any) => {
                this.departamentos = res.data;
                this.getPages(res.last_page);
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;

            });
    }
    buscar(search) {
        this.departamentoService.buscar_departamentos({search: search})
            .subscribe((res: any) => {
                this.departamentos = res.data;
                this.getPages(res.last_page);
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    getPages(last_page) {
        this.pages = [];
        for (let i = 1; i <= last_page; i++ ) {
            this.pages.push(
                {
                    url: this.environment.base + 'departamentos?page=' + i ,
                    item: i
                }
            );
        }
    }
    loadPagination(url) {
        this.departamentoService.indexPerPage(url)
            .subscribe((res: any) => {
                this.departamentos = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    prevPage() {
        this.departamentoService.indexPerPage(this.prev_page)
            .subscribe( (res: any) => {
                this.departamentos = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    nextPage() {
        this.departamentoService.indexPerPage(this.next_page)
            .subscribe( (res: any) => {
                this.departamentos = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }

    destroy(index, id) {
        this.departamentoService.destroy(id)
            .subscribe(res => {
                this.departamentos.splice(index, 1);
            });
    }

    edit(id) {
        this.router.navigate(['departamento/editar/' + id]);
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
        this.departamento_id = id;
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
