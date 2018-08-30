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
var departamento_service_1 = require("../departamento.service");
var forms_1 = require("@angular/forms");
var ngx_toastr_1 = require("ngx-toastr");
var router_animations_1 = require("../../../router.animations");
var router_1 = require("@angular/router");
var DepartamentoCreateComponent = /** @class */ (function () {
    function DepartamentoCreateComponent(departamentoService, fb, router, toastr) {
        this.departamentoService = departamentoService;
        this.fb = fb;
        this.router = router;
        this.toastr = toastr;
        this.createForm();
    }
    DepartamentoCreateComponent.prototype.ngOnInit = function () {
    };
    DepartamentoCreateComponent.prototype.createForm = function () {
        this.departamentoGroup = this.fb.group({
            'nombre': new forms_1.FormControl('', [forms_1.Validators.required]),
            'descripcion': new forms_1.FormControl('', [forms_1.Validators.required])
        });
    };
    DepartamentoCreateComponent.prototype.store = function () {
        var _this = this;
        this.departamentoService
            .store(this.departamentoGroup.value)
            .subscribe(function (res) {
            _this.departamentoGroup.reset();
            _this.router.navigate(['departamento']);
            _this.toastr.success('El departamento ' + res.nombre + ' fue creado exitosamente', 'Registro exitoso');
        });
    };
    DepartamentoCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-departamento-create',
            templateUrl: './departamento-create.component.html',
            styleUrls: ['./departamento-create.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [departamento_service_1.DepartamentoService,
            forms_1.FormBuilder,
            router_1.Router,
            ngx_toastr_1.ToastrService])
    ], DepartamentoCreateComponent);
    return DepartamentoCreateComponent;
}());
exports.DepartamentoCreateComponent = DepartamentoCreateComponent;
//# sourceMappingURL=departamento-create.component.js.map