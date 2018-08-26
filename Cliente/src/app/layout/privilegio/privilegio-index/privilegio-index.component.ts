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
    privilegios: any = [];
    privilegiosBK: any = [];
    index: number = null;
    privilegio_id: number = null;
    closeResult: string;
    search = '';

    pages: any = [];
    prev_page: any = null;
    next_page: any = null;
    environment = environment;

    constructor(protected privilegioService: PrivilegioService,
                protected modalService: NgbModal,
                protected router: Router) {}

    ngOnInit() {
        this.privilegioService.index().subscribe((res: any) => {
            this.privilegios = res.data;
            this.privilegiosBK = res.data;
            this.getPages(res.last_page);
            this.prev_page = res.prev_page_url;
            this.next_page = res.next_page_url;
        });
    }

    buscar(search) {
        this.privilegios = this.privilegiosBK.filter((privilegio: any) => {
            return privilegio.departamento.nombre.toLowerCase().indexOf(search) > -1;
        });
    }

    getPages(last_page) {
        for (let i = 1; i <= last_page; i++ ) {
            this.pages.push(
                {
                    url: this.environment.base + 'privilegios?page=' + i ,
                    item: i
                }
            );
        }
    }
    loadPagination(url) {
        this.privilegioService.indexPerPage(url)
            .subscribe((res: any) => {
                this.privilegios = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    prevPage() {
        this.privilegioService.indexPerPage(this.prev_page)
            .subscribe( (res: any) => {
                this.privilegios = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }
    nextPage() {
        this.privilegioService.indexPerPage(this.next_page)
            .subscribe( (res: any) => {
                this.privilegios = res.data;
                this.prev_page = res.prev_page_url;
                this.next_page = res.next_page_url;
            });
    }

    destroy(index, id) {
        this.privilegioService.destroy(id)
            .subscribe(res => {
                this.privilegios.splice(index, 1);
            });
    }

    edit(id) {
        this.router.navigate(['cliente/editar/' + id]);
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

