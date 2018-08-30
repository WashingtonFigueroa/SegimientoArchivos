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
var router_animations_1 = require("../../../router.animations");
var tipotramite_service_1 = require("../../tipotramite/tipotramite.service");
var login_service_1 = require("../../../login.service");
var departamento_service_1 = require("../../departamento/departamento.service");
var recorrido_service_1 = require("../recorrido.service");
var RecorridoIndexComponent = /** @class */ (function () {
    function RecorridoIndexComponent(tipoTramiteService, loginService, departamentoService, recorridoService) {
        var _this = this;
        this.tipoTramiteService = tipoTramiteService;
        this.loginService = loginService;
        this.departamentoService = departamentoService;
        this.recorridoService = recorridoService;
        this.recorridos = [
            [],
            []
        ];
        this.tipo_tramites = null;
        this.tipo_tramite_id = null;
        this.search = null;
        var departamento_id = this.loginService.getUsuario().departamento_id;
        this.tipoTramiteService.get_tipo_tramites_departamento(departamento_id)
            .subscribe(function (res) { return _this.tipo_tramites = res; });
    }
    RecorridoIndexComponent.prototype.ngOnInit = function () {
    };
    RecorridoIndexComponent.prototype.removeItem = function (item, list) {
        list.splice(list.indexOf(item), 1);
    };
    RecorridoIndexComponent.prototype.recorridos_tipo_tramite = function (tipo_tramite_id) {
        var _this = this;
        this.tipoTramiteService.recorridos_tipo_tramite(tipo_tramite_id)
            .subscribe(function (res) {
            _this.recorridos[0] = res.recorridos_vacio;
            _this.recorridos[1] = res.recorridos;
        });
    };
    RecorridoIndexComponent.prototype.update = function () {
        var i = 1;
        this.recorridos[1] = this.recorridos[1].map(function (recorrido) {
            recorrido.posicion = i;
            i++;
            return recorrido;
        });
        this.recorridoService.update_recorridos(this.tipo_tramite_id, { recorridos: this.recorridos[1] })
            .subscribe(function (res) {
            console.log(res);
        });
    };
    RecorridoIndexComponent = __decorate([
        core_1.Component({
            selector: 'app-recorrido-index',
            templateUrl: './recorrido-index.component.html',
            styleUrls: ['./recorrido-index.component.scss'],
            animations: [router_animations_1.routerTransition()],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [tipotramite_service_1.TipotramiteService,
            login_service_1.LoginService,
            departamento_service_1.DepartamentoService,
            recorrido_service_1.RecorridoService])
    ], RecorridoIndexComponent);
    return RecorridoIndexComponent;
}());
exports.RecorridoIndexComponent = RecorridoIndexComponent;
//# sourceMappingURL=recorrido-index.component.js.map