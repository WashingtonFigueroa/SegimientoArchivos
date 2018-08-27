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
      return JSON.parse(localStorage.getItem('fileTrackingUsuario'));
  }
  getDepartamento() {
      return JSON.parse(localStorage.getItem('fileTrackingUsuario')).departamento;
  }
  estaAutenticado() {
      if (localStorage.getItem('fileTrackingToken')) {
          return true;
      }
      return false;
  }
  logout() {
      localStorage.removeItem('fileTrackingToken');
      localStorage.removeItem('fileTrackingUsuario');
      localStorage.removeItem('fileTrackingPrivilegios');
  }
}
