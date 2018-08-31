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
var environment_prod_1 = require("../../../environments/environment.prod");
var TramiteService = /** @class */ (function () {
    function TramiteService(http) {
        this.http = http;
        this.base = environment_prod_1.environment.base;
    }
    TramiteService.prototype.index = function () {
        return this.http.get(this.base + 'tramites');
    };
    TramiteService.prototype.indexPerPage = function (url) {
        return this.http.get(url);
    };
    TramiteService.prototype.show = function (id) {
        return this.http.get(this.base + 'tramites/' + id);
    };
    TramiteService.prototype.store = function (request) {
        return this.http.post(this.base + 'tramites', request);
    };
    TramiteService.prototype.update = function (request, id) {
        return this.http.put(this.base + 'tramites/' + id, request);
    };
    TramiteService.prototype.destroy = function (id) {
        return this.http.delete(this.base + 'tramites/' + id);
    };
    TramiteService.prototype.ver_archivo = function (id) {
        return this.http.get(this.base + 'ver_archivo/' + id);
    };
    TramiteService.prototype.recorridos_tramite = function (tramite_id) {
        return this.http.get(this.base + 'recorridos_tramite/' + tramite_id);
    };
    TramiteService.prototype.tramites_departamento = function (departamento_id) {
        return this.http.get(this.base + 'tramites_departamento/' + departamento_id);
    };
    TramiteService.prototype.buscar_tramite = function (request) {
        return this.http.post(this.base + 'buscar_tramite', request);
    };
    TramiteService.prototype.cantidad_estado_tramites = function (departamento_id) {
        return this.http.get(this.base + 'cantidad_estado_tramites/' + departamento_id);
    };
    TramiteService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TramiteService);
    return TramiteService;
}());
exports.TramiteService = TramiteService;
//# sourceMappingURL=tramite.service.js.map