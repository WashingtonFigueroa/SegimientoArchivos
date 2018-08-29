"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var environment_prod_1 = require("../environments/environment.prod");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.base = environment_prod_1.environment.base;
    }
    LoginService.prototype.login = function (credentials) {
        return this.http.post(this.base + 'login', credentials, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    };
    LoginService.prototype.getUsuario = function () {
        return JSON.parse(localStorage.getItem('fileTrackingUsuario'));
    };
    LoginService.prototype.getDepartamento = function () {
        return JSON.parse(localStorage.getItem('fileTrackingUsuario')).departamento;
    };
    LoginService.prototype.estaAutenticado = function () {
        if (localStorage.getItem('fileTrackingToken')) {
            return true;
        }
        return false;
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('fileTrackingToken');
        localStorage.removeItem('fileTrackingUsuario');
        localStorage.removeItem('fileTrackingPrivilegios');
    };
    LoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map