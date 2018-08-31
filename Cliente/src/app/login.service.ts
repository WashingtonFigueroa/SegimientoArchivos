import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  base = environment.base;
  constructor(protected http: HttpClient) { }

  login(credentials) {
      return this.http.post(this.base + 'login', credentials, {
          headers: {
              'Content-Type' : 'application/json'
          }
      });
  }
  getUsuario() {
      return JSON.parse(atob(localStorage.getItem('fileTrackingUsuario')));
  }
  getDepartamento() {
      if ( this.estaAutenticado() ) {
          return JSON.parse(atob(localStorage.getItem('fileTrackingUsuario'))).departamento;
      }
      return null;
  }
  estaAutenticado() {
      let autenticado;
      if (localStorage.getItem('fileTrackingToken')) {
          autenticado = true;
      } else {
          autenticado = false;
      }
      return autenticado;
  }
  logout() {
      localStorage.removeItem('fileTrackingToken');
      localStorage.removeItem('fileTrackingUsuario');
      localStorage.removeItem('fileTrackingPrivilegios');
  }
}
