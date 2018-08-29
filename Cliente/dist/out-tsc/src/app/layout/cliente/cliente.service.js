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
var ClienteService = /** @class */ (function () {
    function ClienteService(http) {
        this.http = http;
        this.base = environment_prod_1.environment.base;
    }
    ClienteService.prototype.index = function () {
        return this.http.get(this.base + 'clientes');
    };
    ClienteService.prototype.lista_clientes = function () {
        return this.http.get(this.base + 'lista_clientes');
    };
    ClienteService.prototype.indexPerPage = function (url) {
        return this.http.get(url);
    };
    ClienteService.prototype.show = function (id) {
        return this.http.get(this.base + 'clientes/' + id);
    };
    ClienteService.prototype.store = function (request) {
        return this.http.post(this.base + 'clientes', request);
    };
    ClienteService.prototype.update = function (request, id) {
        return this.http.put(this.base + 'clientes/' + id, request);
    };
    ClienteService.prototype.destroy = function (id) {
        return this.http.delete(this.base + 'clientes/' + id);
    };
    ClienteService.prototype.consultaCedula = function (cedula) {
        var request = 'consulta_cedula=consulta_cedula&txt_ruc=' + cedula;
        return this.http.post('http://coatl.vadowservice.com/data/clientes/app.php', request, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    };
    ClienteService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ClienteService);
    return ClienteService;
}());
exports.ClienteService = ClienteService;
//# sourceMappingURL=cliente.service.js.map