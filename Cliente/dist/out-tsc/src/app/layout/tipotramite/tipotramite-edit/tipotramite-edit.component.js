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
var tipotramite_service_1 = require("../tipotramite.service");
var departamento_service_1 = require("../../departamento/departamento.service");
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var TipotramiteEditComponent = /** @class */ (function () {
    function TipotramiteEditComponent(tipotramiteService, documentosService, fb, route, router, toastr) {
        var _this = this;
        this.tipotramiteService = tipotramiteService;
        this.documentosService = documentosService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.idtipotramite = null;
        this.tipotramite = null;
        this.departamentos = null;
        this.documentosService.lista_departamentos().subscribe(function (res) { return _this.departamentos = res; });
        this.route.params.subscribe(function (param) {
            _this.idtipotramite = param.id;
            _this.tipotramiteService.show(param.id).subscribe(function (res) {
                _this.tipotramite = res;
                _this.createForm(res);
            });
        });
    }
    TipotramiteEditComponent.prototype.ngOnInit = function () { };
    TipotramiteEditComponent.prototype.createForm = function (tipotramite) {
        this.tipotramiteGroup = this.fb.group({
            'departamento_id': new forms_1.FormControl(tipotramite.departamento_id, [forms_1.Validators.required]),
            'nombre': new forms_1.FormControl(tipotramite.nombre, [forms_1.Validators.required]),
            'descripcion': new forms_1.FormControl(tipotramite.descripcion),
        });
    };
    TipotramiteEditComponent.prototype.update = function () {
        var _this = this;
        this.tipotramiteService.update(this.tipotramiteGroup.value, this.idtipotramite)
            .subscribe(function (res) {
            _this.router.navigate(['tipo_tramite']);
            _this.toastr.success('Tipo Tramite Actualizado', 'Ok');
        }, function (error) {
            _this.toastr.error('Tipo Tramite', 'Error Tipo Tramite');
        });
    };
    TipotramiteEditComponent = __decorate([
        core_1.Component({
            selector: 'app-tipotramite-edit',
            templateUrl: './tipotramite-edit.component.html',
            styleUrls: ['./tipotramite-edit.component.scss']
        }),
        __metadata("design:paramtypes", [tipotramite_service_1.TipotramiteService,
            departamento_service_1.DepartamentoService,
            forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            ngx_toastr_1.ToastrService])
    ], TipotramiteEditComponent);
    return TipotramiteEditComponent;
}());
exports.TipotramiteEditComponent = TipotramiteEditComponent;
//# sourceMappingURL=tipotramite-edit.component.js.map