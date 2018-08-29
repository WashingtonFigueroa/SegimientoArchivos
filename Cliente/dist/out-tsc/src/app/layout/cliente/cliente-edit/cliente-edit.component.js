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
var cliente_service_1 = require("../cliente.service");
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var ClienteEditComponent = /** @class */ (function () {
    function ClienteEditComponent(clienteService, fb, route, router, toastr) {
        var _this = this;
        this.clienteService = clienteService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.idcliente = null;
        this.cliente = null;
        this.route.params.subscribe(function (param) {
            _this.idcliente = param.id;
            _this.clienteService.show(param.id)
                .subscribe(function (res) {
                _this.cliente = res;
                _this.createForm(res);
            });
        });
    }
    ClienteEditComponent.prototype.ngOnInit = function () {
    };
    ClienteEditComponent.prototype.createForm = function (cliente) {
        this.clienteGroup = this.fb.group({
            'tipo_documento': new forms_1.FormControl(cliente.tipo_documento, forms_1.Validators.required),
            'identificacion': new forms_1.FormControl(cliente.identificacion, forms_1.Validators.required),
            'nombres': new forms_1.FormControl(cliente.nombres, forms_1.Validators.required),
            'telefono': new forms_1.FormControl(cliente.telefono, [forms_1.Validators.pattern(/^\d{9}$/)]),
            'celular': new forms_1.FormControl(cliente.celular, [forms_1.Validators.pattern(/^\d{10}$/)]),
            'correo': new forms_1.FormControl(cliente.correo, [forms_1.Validators.pattern(/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/)]),
            'documneto': new forms_1.FormControl(cliente.documneto)
        });
    };
    ClienteEditComponent.prototype.update = function () {
        var _this = this;
        this.clienteService.update(this.clienteGroup.value, this.idcliente)
            .subscribe(function (res) {
            _this.router.navigate(['cliente']);
            _this.toastr.success('Cliente Actulizado', 'OK');
        });
    };
    ClienteEditComponent = __decorate([
        core_1.Component({
            selector: 'app-cliente-edit',
            templateUrl: './cliente-edit.component.html',
            styleUrls: ['./cliente-edit.component.scss']
        }),
        __metadata("design:paramtypes", [cliente_service_1.ClienteService,
            forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            ngx_toastr_1.ToastrService])
    ], ClienteEditComponent);
    return ClienteEditComponent;
}());
exports.ClienteEditComponent = ClienteEditComponent;
//# sourceMappingURL=cliente-edit.component.js.map