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
var forms_1 = require("@angular/forms");
var departamento_service_1 = require("../../departamento/departamento.service");
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var router_animations_1 = require("../../../router.animations");
var usuario_service_1 = require("../usuario.service");
var UsuarioEditComponent = /** @class */ (function () {
    function UsuarioEditComponent(usuarioService, departamentoService, fb, route, router, toastr) {
        var _this = this;
        this.usuarioService = usuarioService;
        this.departamentoService = departamentoService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.departamentos = null;
        this.usuario_id = null;
        this.usuario = null;
        this.departamentoService.lista_departamentos()
            .subscribe(function (res) { return _this.departamentos = res; });
        this.route.params.subscribe(function (param) {
            _this.usuario_id = param.id;
            _this.usuarioService.show(param.id)
                .subscribe(function (res) {
                _this.usuario = res;
                console.log(res);
                _this.createForm(res);
            });
        });
    }
    UsuarioEditComponent.prototype.ngOnInit = function () {
    };
    UsuarioEditComponent.prototype.createForm = function (usuario) {
        this.usuarioGroup = this.fb.group({
            'departamento_id': new forms_1.FormControl(usuario.departamento_id, [forms_1.Validators.required]),
            'nombres': new forms_1.FormControl(usuario.nombres, [forms_1.Validators.pattern(/^[a-zA-Z ]{3,}$/)]),
        });
    };
    UsuarioEditComponent.prototype.update = function () {
        var _this = this;
        this.usuario.departamento_id = this.usuarioGroup.value.departamento_id;
        this.usuario.nombres = this.usuarioGroup.value.nombres;
        this.usuarioService.update(this.usuario, this.usuario_id)
            .subscribe(function (res) {
            _this.toastr.success('Usuario ' + _this.usuario.nombres + ' actualizado', 'Exito');
            _this.router.navigate(['usuario']);
        });
    };
    UsuarioEditComponent = __decorate([
        core_1.Component({
            selector: 'app-usuario-edit',
            templateUrl: './usuario-edit.component.html',
            styleUrls: ['./usuario-edit.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
            departamento_service_1.DepartamentoService,
            forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            ngx_toastr_1.ToastrService])
    ], UsuarioEditComponent);
    return UsuarioEditComponent;
}());
exports.UsuarioEditComponent = UsuarioEditComponent;
//# sourceMappingURL=usuario-edit.component.js.map