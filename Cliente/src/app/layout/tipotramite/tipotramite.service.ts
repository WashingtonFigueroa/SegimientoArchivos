import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipotramiteService {
    base = environment.base;
    constructor(protected http: HttpClient) { }
    index() {
        return this.http.get(this.base + 'tipo_tramites');
    }
    indexPerPage(url) {
        return this.http.get( url );
    }
    show(id) {
        return this.http.get(this.base + 'tipo_tramites/' + id);
    }
    store(request) {
        return this.http.post(this.base + 'tipo_tramites', request);
    }
    update(request, id) {
        return this.http.put(this.base + 'tipo_tramites/' + id, request);
    }
    destroy(id) {
        return this.http.delete(this.base + 'tipo_tramites/' + id );
    }
    lista_tipo_tramites() {
        return this.http.get(this.base + 'lista_tipo_tramites');
    }
    tipo_tramites_departamento(departamento_id) {
        return this.http.get(this.base + 'tipo_tramites_departamento/' + departamento_id);
    }
    get_tipo_tramites_departamento(departamento_id) {
        return this.http.get(`${environment.base}get_tipo_tramites_departamento/${departamento_id}`);
    }
    recorridos_tipo_tramite (tipo_tramite_id) {
        return this.http.get(`${environment.base}recorridos_tipo_tramite/${tipo_tramite_id}`);
    }
}
