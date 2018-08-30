import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
    base = environment.base;
  constructor(protected http: HttpClient) { }

    index() {
        return this.http.get(this.base + 'clientes');
    }
    lista_clientes() {
        return this.http.get(this.base + 'lista_clientes');
    }
    indexPerPage(url) {
        return this.http.get( url );
    }
    show(id) {
        return this.http.get(this.base + 'clientes/' + id);
    }
    store(request) {
        return this.http.post(this.base + 'clientes', request);
    }
    update(request, id) {
        return this.http.put(this.base + 'clientes/' + id, request);
    }
    destroy(id) {
        return this.http.delete(this.base + 'clientes/' + id );
    }
    consultaCedula(cedula) {
        const request = 'consulta_cedula=consulta_cedula&txt_ruc=' + cedula;
        return this.http.post('http://coatl.vadowservice.com/data/clientes/app.php', request, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }
    buscar_clientes(search) {
      return this.http.post(`${environment.base}buscar_clientes`, search);
    }
}
