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
var environment_prod_1 = require("../../../environments/environment.prod");
var http_1 = require("@angular/common/http");
var TipotramiteService = /** @class */ (function () {
    function TipotramiteService(http) {
        this.http = http;
        this.base = environment_prod_1.environment.base;
    }
    TipotramiteService.prototype.index = function () {
        return this.http.get(this.base + 'tipo_tramites');
    };
    TipotramiteService.prototype.indexPerPage = function (url) {
        return this.http.get(url);
    };
    TipotramiteService.prototype.show = function (id) {
        return this.http.get(this.base + 'tipo_tramites/' + id);
    };
    TipotramiteService.prototype.store = function (request) {
        return this.http.post(this.base + 'tipo_tramites', request);
    };
    TipotramiteService.prototype.update = function (request, id) {
        return this.http.put(this.base + 'tipo_tramites/' + id, request);
    };
    TipotramiteService.prototype.destroy = function (id) {
        return this.http.delete(this.base + 'tipo_tramites/' + id);
    };
    TipotramiteService.prototype.lista_tipo_tramites = function () {
        return this.http.get(this.base + 'lista_tipo_tramites');
    };
    TipotramiteService.prototype.tipo_tramites_departamento = function (departamento_id) {
        return this.http.get(this.base + 'tipo_tramites_departamento/' + departamento_id);
    };
    TipotramiteService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], TipotramiteService);
    return TipotramiteService;
}());
exports.TipotramiteService = TipotramiteService;
//# sourceMappingURL=tipotramite.service.js.map