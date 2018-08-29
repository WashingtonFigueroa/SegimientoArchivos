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
var usuario_service_1 = require("../usuario.service");
var forms_1 = require("@angular/forms");
var ngx_toastr_1 = require("ngx-toastr");
var router_animations_1 = require("../../../router.animations");
var UsuarioCreateComponent = /** @class */ (function () {
    function UsuarioCreateComponent(departamentoService, usuarioService, fb, toastr) {
        this.departamentoService = departamentoService;
        this.usuarioService = usuarioService;
        this.fb = fb;
        this.toastr = toastr;
        this.errors = {
            'cuenta': '',
            'password': ''
        };
        this.departamentos = null;
        this.createForm();
    }
    UsuarioCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.departamentoService.lista_departamentos()
            .subscribe(function (res) {
            _this.departamentos = res;
        });
    };
    UsuarioCreateComponent.prototype.createForm = function () {
        this.usuarioGroup = this.fb.group({
            'departamento_id': new forms_1.FormControl(0, [forms_1.Validators.required]),
            'nombres': new forms_1.FormControl('', [forms_1.Validators.required]),
            'cuenta': new forms_1.FormControl('', [forms_1.Validators.required]),
            'password': new forms_1.FormControl('', [forms_1.Validators.required]),
            'password_confirmation': new forms_1.FormControl('', [forms_1.Validators.required]),
        });
    };
    UsuarioCreateComponent.prototype.store = function () {
        var _this = this;
        this.errors = {
            cuenta: '',
            password: ''
        };
        this.usuarioService.store(this.usuarioGroup.value)
            .subscribe(function (res) {
            console.log(res);
            _this.usuarioGroup.reset();
            _this.toastr.success('El usuario ' + res.nombres + ' fue creado exitosamente', 'Registro exitoso');
        }, function (error) {
            if (error.status === 422) {
                _this.toastr.error('Vuelva a llenar el formulario', 'Error de Validacion');
            }
            if (error.error.errors.cuenta) {
                error.error.errors.cuenta.map(function (message) {
                    _this.errors.cuenta += message + '<br/>';
                });
            }
            if (error.error.errors.password) {
                error.error.errors.password.map(function (message) {
                    _this.errors.password += message + '<br/>';
                });
            }
            console.log(error);
        });
    };
    UsuarioCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-usuario-create',
            templateUrl: './usuario-create.component.html',
            styleUrls: ['./usuario-create.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [departamento_service_1.DepartamentoService,
            usuario_service_1.UsuarioService,
            forms_1.FormBuilder,
            ngx_toastr_1.ToastrService])
    ], UsuarioCreateComponent);
    return UsuarioCreateComponent;
}());
exports.UsuarioCreateComponent = UsuarioCreateComponent;
//# sourceMappingURL=usuario-create.component.js.map