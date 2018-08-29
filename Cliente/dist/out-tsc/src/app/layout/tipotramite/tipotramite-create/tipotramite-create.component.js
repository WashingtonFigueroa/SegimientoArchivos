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
var TipotramiteCreateComponent = /** @class */ (function () {
    function TipotramiteCreateComponent(tipoTramiteService, departamentoService, fb, router, toartr) {
        var _this = this;
        this.tipoTramiteService = tipoTramiteService;
        this.departamentoService = departamentoService;
        this.fb = fb;
        this.router = router;
        this.toartr = toartr;
        this.departamentos = null;
        this.departamentoService.lista_departamentos().subscribe(function (res) { return _this.departamentos = res; });
        this.createForm();
    }
    TipotramiteCreateComponent.prototype.ngOnInit = function () {
    };
    TipotramiteCreateComponent.prototype.createForm = function () {
        this.tipotramiteGroup = this.fb.group({
            'departamento_id': new forms_1.FormControl(0, [forms_1.Validators.required]),
            'nombre': new forms_1.FormControl('', [forms_1.Validators.required]),
            'descripcion': new forms_1.FormControl('')
        });
    };
    TipotramiteCreateComponent.prototype.store = function () {
        var _this = this;
        this.tipoTramiteService.store(this.tipotramiteGroup.value)
            .subscribe(function (res) {
            _this.router.navigate(['tipo_tramite']);
            _this.toartr.success('Tipo Tramite Registard', 'Ok');
        }, function (error) {
            _this.toartr.error('Tipo Tramite', 'Error Tipo Tramite');
        });
    };
    TipotramiteCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-tipotramite-create',
            templateUrl: './tipotramite-create.component.html',
            styleUrls: ['./tipotramite-create.component.scss'],
        }),
        __metadata("design:paramtypes", [tipotramite_service_1.TipotramiteService,
            departamento_service_1.DepartamentoService,
            forms_1.FormBuilder,
            router_1.Router,
            ngx_toastr_1.ToastrService])
    ], TipotramiteCreateComponent);
    return TipotramiteCreateComponent;
}());
exports.TipotramiteCreateComponent = TipotramiteCreateComponent;
//# sourceMappingURL=tipotramite-create.component.js.map