import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RecorridoService {

  constructor(protected http: HttpClient) { }
  update_recorridos(tipo_tramite_id, recorridos) {
      return this.http.put(`${environment.base}update_recorridos/${tipo_tramite_id}`, recorridos);
  }
}
