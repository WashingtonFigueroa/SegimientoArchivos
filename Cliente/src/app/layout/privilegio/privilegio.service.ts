import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class PrivilegioService {
    base = environment.base;
    constructor(protected http: HttpClient) { }
    index() {
        return this.http.get(this.base + 'privilegios');
    }
    show(id) {
        return this.http.get(this.base + 'privilegios/' + id);
    }
    store(request) {
        return this.http.post(this.base + 'privilegios', request);
    }
    update(request, id) {
        return this.http.put(this.base + 'privilegios/' + id, request);
    }
    destroy(id) {
        return this.http.delete(this.base + 'privilegios/' + id );
    }
}
