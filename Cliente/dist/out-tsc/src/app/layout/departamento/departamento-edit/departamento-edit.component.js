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
var departamento_service_1 = require("../departamento.service");
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var router_animations_1 = require("../../../router.animations");
var DepartamentoEditComponent = /** @class */ (function () {
    function DepartamentoEditComponent(departamentoService, fb, route, router, toastr) {
        var _this = this;
        this.departamentoService = departamentoService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.departamento_id = null;
        this.departamento = null;
        this.route.params.subscribe(function (param) {
            _this.departamento_id = param.id;
            _this.departamentoService.show(param.id)
                .subscribe(function (res) {
                _this.departamento = res;
                _this.createForm(res);
            });
        });
    }
    DepartamentoEditComponent.prototype.ngOnInit = function () {
    };
    DepartamentoEditComponent.prototype.createForm = function (departamento) {
        this.departamentoGroup = this.fb.group({
            'nombre': new forms_1.FormControl(departamento.nombre, [forms_1.Validators.pattern(/^[a-zA-Z ]{3,}$/)]),
            'descripcion': new forms_1.FormControl(departamento.descripcion, [forms_1.Validators.pattern(/^[a-zA-Z ]{2,}$/)])
        });
    };
    DepartamentoEditComponent.prototype.update = function () {
        var _this = this;
        this.departamentoService.update(this.departamentoGroup.value, this.departamento_id)
            .subscribe(function (res) {
            _this.toastr.success('Cliente actualizado', 'Exito');
            _this.router.navigate(['departamento']);
        });
    };
    DepartamentoEditComponent = __decorate([
        core_1.Component({
            selector: 'app-departamento-edit',
            templateUrl: './departamento-edit.component.html',
            styleUrls: ['./departamento-edit.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [departamento_service_1.DepartamentoService,
            forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            ngx_toastr_1.ToastrService])
    ], DepartamentoEditComponent);
    return DepartamentoEditComponent;
}());
exports.DepartamentoEditComponent = DepartamentoEditComponent;
//# sourceMappingURL=departamento-edit.component.js.map