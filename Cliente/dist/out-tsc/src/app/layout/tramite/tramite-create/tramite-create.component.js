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
var ng_auto_complete_1 = require("ng-auto-complete");
var forms_1 = require("@angular/forms");
var tramite_service_1 = require("../tramite.service");
var cliente_service_1 = require("../../cliente/cliente.service");
var tipotramite_service_1 = require("../../tipotramite/tipotramite.service");
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var login_service_1 = require("../../../login.service");
var TramiteCreateComponent = /** @class */ (function () {
    function TramiteCreateComponent(tramiteService, clienteService, tipotramiteService, loginService, router, fb, toastr) {
        var _this = this;
        this.tramiteService = tramiteService;
        this.clienteService = clienteService;
        this.tipotramiteService = tipotramiteService;
        this.loginService = loginService;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.clientesSearch = null;
        this.clientes = null;
        this.cliente = {
            nombres: '',
            correo: '',
            telefono: ''
        };
        this.tipotramites = null;
        this.createForm();
        var departamento_id = this.loginService.getUsuario().departamento_id;
        this.tipotramiteService.tipo_tramites_departamento(departamento_id).subscribe(function (res) { return _this.tipotramites = res; });
        this.clienteService.lista_clientes().subscribe(function (res) {
            _this.clientes = res;
            _this.load(res);
            console.log(res);
        });
    }
    TramiteCreateComponent.prototype.load = function (clientes) {
        this.clientesSearch = [
            ng_auto_complete_1.CreateNewAutocompleteGroup('Buscar cliente', 'completer', clientes, { titleKey: 'identificacion', childrenKey: null }),
        ];
    };
    TramiteCreateComponent.prototype.Selected = function (item) {
        var _this = this;
        var cliente_id = item.item.original.id;
        this.clienteService.show(cliente_id)
            .subscribe(function (res) { return _this.cliente = res; });
        this.tramiteGroup.patchValue({
            'cliente_id': cliente_id
        });
    };
    TramiteCreateComponent.prototype.ngOnInit = function () {
    };
    TramiteCreateComponent.prototype.createForm = function () {
        this.tramiteGroup = this.fb.group({
            'cliente_id': new forms_1.FormControl(0, forms_1.Validators.required),
            'tipo_tramite_id': new forms_1.FormControl(0, [forms_1.Validators.required]),
            'archivo': new forms_1.FormControl(''),
            'estado': new forms_1.FormControl('pendiente', forms_1.Validators.required),
            'fecha_inicio': new forms_1.FormControl('', forms_1.Validators.required),
            'recorrido_id': new forms_1.FormControl('', forms_1.Validators.required),
            'observacion': new forms_1.FormControl(''),
            'permiso': new forms_1.FormControl(0, forms_1.Validators.required)
        });
    };
    TramiteCreateComponent.prototype.store = function () {
        var _this = this;
        var fecha_inicio = this.tramiteGroup.value.fecha_inicio;
        var formData = new FormData();
        var fileBrowser = this.archivo.nativeElement;
        if (fileBrowser.files[0]) {
            formData.append('archivo', fileBrowser.files[0]);
            formData.append('cliente_id', this.tramiteGroup.value.cliente_id);
            formData.append('tipo_tramite_id', this.tramiteGroup.value.tipo_tramite_id);
            formData.append('estado', this.tramiteGroup.value.estado);
            formData.append('fecha_inicio', this.tramiteGroup.value.fecha_inicio);
            formData.append('recorrido_id', this.tramiteGroup.value.recorrido_id);
            formData.append('observacion', this.tramiteGroup.value.observacion);
            formData.append('permiso', this.tramiteGroup.value.permiso ? 'publico' : 'recorrido');
        }
        console.log(new Date(fecha_inicio).getTime());
        console.log(Date.now());
        if (new Date(fecha_inicio).getTime() <= Date.now()) {
            this.tramiteService.store(formData)
                .subscribe(function (res) {
                _this.router.navigate(['tramite']);
                _this.toastr.success('El tramite fue creado exitosamente', 'Registro exitoso');
            });
        }
        else {
            this.toastr.error('La fecha ingresada es mayor a la fecha actual', 'Error Tramite');
        }
    };
    __decorate([
        core_1.ViewChild(ng_auto_complete_1.NgAutocompleteComponent),
        __metadata("design:type", ng_auto_complete_1.NgAutocompleteComponent)
    ], TramiteCreateComponent.prototype, "completer", void 0);
    __decorate([
        core_1.ViewChild('archivo'),
        __metadata("design:type", Object)
    ], TramiteCreateComponent.prototype, "archivo", void 0);
    TramiteCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-tramite-create',
            templateUrl: './tramite-create.component.html',
            styleUrls: ['./tramite-create.component.scss']
        }),
        __metadata("design:paramtypes", [tramite_service_1.TramiteService,
            cliente_service_1.ClienteService,
            tipotramite_service_1.TipotramiteService,
            login_service_1.LoginService,
            router_1.Router,
            forms_1.FormBuilder,
            ngx_toastr_1.ToastrService])
    ], TramiteCreateComponent);
    return TramiteCreateComponent;
}());
exports.TramiteCreateComponent = TramiteCreateComponent;
//# sourceMappingURL=tramite-create.component.js.map