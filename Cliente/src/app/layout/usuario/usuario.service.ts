import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
    base = environment.base;
    constructor(protected http: HttpClient) { }
    index() {
        return this.http.get(this.base + 'usuarios');
    }
    indexPerPage(url) {
        return this.http.get( url );
    }
    show(id) {
        return this.http.get(this.base + 'usuarios/' + id);
    }
    store(request) {
        return this.http.post(this.base + 'usuarios', request);
    }
    update(request, id) {
        return this.http.put(this.base + 'usuarios/' + id, request);
    }
    destroy(id) {
        return this.http.delete(this.base + 'usuarios/' + id );
    }
}
