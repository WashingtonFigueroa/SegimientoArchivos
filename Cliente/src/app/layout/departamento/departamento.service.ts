import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '../../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {
    base = environment.base;
    constructor(protected http: HttpClient) { }
    index() {
        return this.http.get(this.base + 'departamentos');
    }
    indexPerPage(url) {
        return this.http.get( url );
    }
    show(id) {
        return this.http.get(this.base + 'departamentos/' + id);
    }
    store(request) {
        return this.http.post(this.base + 'departamentos', request);
    }
    update(request, id) {
        return this.http.put(this.base + 'departamentos/' + id, request);
    }
    destroy(id) {
        return this.http.delete(this.base + 'departamentos/' + id );
    }
    lista_departamentos() {
        return this.http.get(this.base + 'lista_departamentos');
    }
    listaPrivilegios(departamento_id) {
        return this.http.get(this.base + 'listaPrivilegios/' + departamento_id);
    }
    buscar_departamentos(search) {
        return this.http.post(`${environment.base}buscar_departamentos`, search);
    }
}
