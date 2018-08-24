import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.prod';
import {HttpClient} from '../../../../node_modules/@angular/common/http';

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
}