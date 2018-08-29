import { Component, OnInit } from '@angular/core';
import {environment} from '../../../../environments/environment.prod';
import {TramiteService} from '../tramite.service';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {routerTransition} from '../../../router.animations';
import {LoginService} from '../../../login.service';

@Component({
  selector: 'app-tramite-index',
  templateUrl: './tramite-index.component.html',
  styleUrls: ['./tramite-index.component.scss'],
  animations: [routerTransition()]
})
export class TramiteIndexComponent implements OnInit {
    environment = environment;
    tramites: any = [];
    tramitesBK: any = [];
    index: number = null;
    idtramite: number = null;
    closeResult: string;
    search = '';
    departamento_id = null;
    pages: any = [];
    prev_page: any = null;
    next_page: any = null;

    constructor(protected tramiteService: TramiteService,
                protected loginService: LoginService,
                protected modalService: NgbModal,
                protected router: Router) { }

    ngOnInit() {
        this.departamento_id = this.loginService.getUsuario().departamento_id;
        this.tramiteService.tramites_departamento(this.departamento_id).subscribe((res: any) => {
            console.log(res);
            this.tramites = res.data;
            this.tramitesBK = res.data;
            this.getPages(res.last_page);
            this.prev_page = res.prev_page_url;
            this.next_page = res.next_page_url;
        });
    }
    refresh() {
        this.ngOnInit();
    }
    buscar(search) {
        const request = {
          'search' : search,
          'departamento_id' : this.departamento_id
        };
        this.tramiteService.buscar_tramite(request)
            .subscribe((res: any) => {
               this.tramites = res.data;
            });
    }
    getPages(last_page) {
        for (let i = 1; i <= last_page; i++ ) {
            this.pages.push(
                {
                    url: this.environment.base + 'tramites_departamento/' + this.departamento_id + '?page=' + i ,
                    item: i
                }
            );
        }
    }
    loadPagination(url) {
        this.tramiteService.indexPerPage(url)
            .subscribe((res: any) => {
                this.tramites = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    prevPage() {
        this.tramiteService.indexPerPage(this.prev_page)
            .subscribe( (res: any) => {
                this.tramites = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    nextPage() {
        this.tramiteService.indexPerPage(this.next_page)
            .subscribe( (res: any) => {
                this.tramites = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    destroy(index, id) {
        this.tramiteService.destroy(id)
            .subscribe(res => {
                this.tramites.splice(index, 1);
            });
    }
    edit(id) {
        this.router.navigate(['tramite/editar/' + id]);
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
        this.idtramite = id;
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
