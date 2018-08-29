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
var departamento_service_1 = require("../../departamento/departamento.service");
var privilegio_service_1 = require("../privilegio.service");
var ngx_toastr_1 = require("ngx-toastr");
var router_1 = require("@angular/router");
var PrivilegioCreateComponent = /** @class */ (function () {
    function PrivilegioCreateComponent(departamentoService, 
    // protected loginService: LoginService,
    privilegioService, router, toastr) {
        var _this = this;
        this.departamentoService = departamentoService;
        this.privilegioService = privilegioService;
        this.router = router;
        this.toastr = toastr;
        this.departamento_id = 0;
        this.privilegio = {
            departamento: false,
            usuario: false,
            privilegio: false,
            cliente: false,
            tipo_tramite: false,
            tramite: false,
            recorrido: false
        };
        this.departamentos = null;
        this.departamentoService.lista_departamentos().subscribe(function (res) { return _this.departamentos = res; });
        // console.log(this.loginService.getUsuario());
    }
    PrivilegioCreateComponent.prototype.ngOnInit = function () {
    };
    PrivilegioCreateComponent.prototype.loadPrivilegios = function (departamento_id) {
        var _this = this;
        this.departamentoService.listaPrivilegios(departamento_id)
            .subscribe(function (privilegios) {
            // console.log(privilegios);
            var lista = privilegios;
            lista.map(function (privilegio) {
                switch (privilegio.ruta) {
                    case 'departamento':
                        _this.privilegio.departamento = privilegio.activo;
                        break;
                    case 'usuario':
                        _this.privilegio.usuario = privilegio.activo;
                        break;
                    case 'privilegio':
                        _this.privilegio.privilegio = privilegio.activo;
                        break;
                    case 'cliente':
                        _this.privilegio.cliente = privilegio.activo;
                        break;
                    case 'tipo_tramite':
                        _this.privilegio.tipo_tramite = privilegio.activo;
                        break;
                    case 'tramite':
                        _this.privilegio.tramite = privilegio.activo;
                        break;
                    case 'recorrido':
                        _this.privilegio.recorrido = privilegio.activo;
                        break;
                }
            });
        });
    };
    PrivilegioCreateComponent.prototype.update = function () {
        var _this = this;
        this.privilegioService.update(this.departamento_id, this.privilegio)
            .subscribe(function (res) {
            _this.toastr.success('Los privilegios fueron creados exitosamente', 'Registro exitoso');
            _this.router.navigate(['privilegio']);
        });
    };
    PrivilegioCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-privilegio-create',
            templateUrl: './privilegio-create.component.html',
            styleUrls: ['./privilegio-create.component.scss']
        }),
        __metadata("design:paramtypes", [departamento_service_1.DepartamentoService,
            privilegio_service_1.PrivilegioService,
            router_1.Router,
            ngx_toastr_1.ToastrService])
    ], PrivilegioCreateComponent);
    return PrivilegioCreateComponent;
}());
exports.PrivilegioCreateComponent = PrivilegioCreateComponent;
//# sourceMappingURL=privilegio-create.component.js.map