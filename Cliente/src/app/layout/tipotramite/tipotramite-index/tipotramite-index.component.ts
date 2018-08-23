import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {TipotramiteService} from '../tipotramite.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tipotramite-index',
  templateUrl: './tipotramite-index.component.html',
  styleUrls: ['./tipotramite-index.component.scss']
})
export class TipotramiteIndexComponent implements OnInit {
    tipotramites: any = [];
    tipotramitesBK: any = [];
    index: number = null;
    idtipotramite: number = null;
    closeResult: string;
    search = '';
    pages: any = [];
    prev_page: any = null;
    next_page: any = null;
    environment = environment;
    constructor(protected tipotramiteService: TipotramiteService,
                protected modalService: NgbModal,
                protected router: Router) { }
    ngOnInit() {
        this.tipotramiteService.index().subscribe((res: any) => {
            this.tipotramites = res.data;
            this.tipotramitesBK = res.data;
            this.getPages(res.last_page);
            this.prev_page = res.prev_page_url;
            this.next_page = res.next_page_url;
        });
    }
    buscar(search) {
        this.tipotramites = this.tipotramitesBK.filter((tipo: any) => {
            return tipo.departamento.nombre.toLowerCase().indexOf(search) > -1 ||
                   tipo.nombre.toLowerCase().indexOf(search) > -1;
        });
    }
    getPages(last_page) {
        for (let i = 1; i <= last_page; i++ ) {
            this.pages.push(
                {
                    url: this.environment.base + 'tipotramites?page=' + i ,
                    item: i
                }
            );
        }
    }
    loadPagination(url) {
        this.tipotramiteService.indexPerPage(url)
            .subscribe((res: any) => {
                this.tipotramites = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    prevPage() {
        this.tipotramiteService.indexPerPage(this.prev_page)
            .subscribe( (res: any) => {
                this.tipotramites = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    nextPage() {
        this.tipotramiteService.indexPerPage(this.next_page)
            .subscribe( (res: any) => {
                this.tipotramites = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    destroy(index, id) {
        this.tipotramiteService.destroy(id).subscribe(res => {
            this.tipotramites.splice(index, 1);
        });
    }
    edit(id) {
        this.router.navigate(['tipo_tramite/editar/' + id]);
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
        this.idtipotramite = id;
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
