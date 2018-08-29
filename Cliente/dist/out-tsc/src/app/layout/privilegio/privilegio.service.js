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
var PrivilegioService = /** @class */ (function () {
    function PrivilegioService(http) {
        this.http = http;
        this.base = environment_prod_1.environment.base;
    }
    PrivilegioService.prototype.index = function () {
        return this.http.get(this.base + 'privilegios');
    };
    PrivilegioService.prototype.indexPerPage = function (url) {
        return this.http.get(url);
    };
    PrivilegioService.prototype.show = function (id) {
        return this.http.get(this.base + 'privilegios/' + id);
    };
    PrivilegioService.prototype.store = function (request) {
        return this.http.post(this.base + 'privilegios', request);
    };
    PrivilegioService.prototype.update = function (departamento_id, form) {
        return this.http.put(this.base + 'privilegios/' + departamento_id, form);
    };
    PrivilegioService.prototype.destroy = function (id) {
        return this.http.delete(this.base + 'privilegios/' + id);
    };
    PrivilegioService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], PrivilegioService);
    return PrivilegioService;
}());
exports.PrivilegioService = PrivilegioService;
//# sourceMappingURL=privilegio.service.js.map