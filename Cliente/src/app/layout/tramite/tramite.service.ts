import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class TramiteService {
    base = environment.base;
    constructor(protected http: HttpClient) { }
    index() {
        return this.http.get(this.base + 'tramites');
    }
    indexPerPage(url) {
        return this.http.get( url );
    }
    show(id) {
        return this.http.get(this.base + 'tramites/' + id);
    }
    store(request) {
        return this.http.post(this.base + 'tramites', request);
    }
    update(request, id) {
        return this.http.put(this.base + 'tramites/' + id, request);
    }
    destroy(id) {
        return this.http.delete(this.base + 'tramites/' + id );
    }
    ver_archivo(id) {
        return this.http.get(this.base + 'ver_archivo/' + id);
    }
    recorridos_tramite(tramite_id) {
        return this.http.get(this.base + 'recorridos_tramite/' + tramite_id);
    }
    tramites_departamento(departamento_id) {
        return this.http.get(this.base + 'tramites_departamento/' + departamento_id);
    }
    buscar_tramite(request) {
        return this.http.post(this.base + 'buscar_tramite', request);
    }
    cantidad_estado_tramites(departamento_id) {
        return this.http.get(this.base + 'cantidad_estado_tramites/' + departamento_id);
    }
}
