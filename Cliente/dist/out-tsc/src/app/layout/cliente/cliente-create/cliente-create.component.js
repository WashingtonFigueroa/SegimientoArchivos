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
var ClienteCreateComponent = /** @class */ (function () {
    function ClienteCreateComponent(fb, clienteService, router, toastr) {
        this.fb = fb;
        this.clienteService = clienteService;
        this.router = router;
        this.toastr = toastr;
        this.successStatus = false;
        this.createForm();
    }
    ClienteCreateComponent.prototype.ngOnInit = function () {
    };
    ClienteCreateComponent.prototype.createForm = function () {
        this.clienteGroup = this.fb.group({
            'tipo_documento': new forms_1.FormControl('', [forms_1.Validators.required]),
            'identificacion': new forms_1.FormControl('', [forms_1.Validators.required]),
            'nombres': new forms_1.FormControl('', [forms_1.Validators.required]),
            'telefono': new forms_1.FormControl('', [forms_1.Validators.pattern(/^\d{9}$/)]),
            'celular': new forms_1.FormControl('', [forms_1.Validators.pattern(/^\d{10}$/)]),
            'correo': new forms_1.FormControl('', [forms_1.Validators.pattern(/^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/)]),
            'documento': new forms_1.FormControl('')
        });
    };
    ClienteCreateComponent.prototype.store = function () {
        var _this = this;
        var form = new FormData();
        var file = this.documento.nativeElement;
        if (file.files[0]) {
            form.append('documento', file.files[0]);
            form.append('tipo_documento', this.clienteGroup.value.tipo_documento);
            form.append('identificacion', this.clienteGroup.value.identificacion);
            form.append('nombres', this.clienteGroup.value.nombres);
            form.append('telefono', this.clienteGroup.value.telefono);
            form.append('celular', this.clienteGroup.value.celular);
            form.append('correo', this.clienteGroup.value.correo);
        }
        else {
            form.append('tipo_documento', this.clienteGroup.value.tipo_documento);
            form.append('identificacion', this.clienteGroup.value.identificacion);
            form.append('nombres', this.clienteGroup.value.nombres);
            form.append('telefono', this.clienteGroup.value.telefono);
            form.append('celular', this.clienteGroup.value.celular);
            form.append('correo', this.clienteGroup.value.correo);
        }
        this.clienteService.store(form)
            .subscribe(function (cliente) {
            _this.toastr.success('Cliente Registrado', 'Ok');
            _this.router.navigate(['cliente']);
        }, function (error) {
            _this.toastr.error('Cliente ya registrado', 'Error');
            _this.clienteGroup.reset();
        });
        this.toastr.error('Cliente', 'Error');
    };
    ClienteCreateComponent.prototype.consultacliente = function () {
        var _this = this;
        this.clienteService.consultaCedula(this.clienteGroup.value.cedula)
            .subscribe(function (cliente) {
            if (cliente.datosPersona.valid === true) {
                _this.clienteGroup.patchValue({
                    cedula: cliente.datosPersona.identity,
                    nombres: cliente.datosPersona.name
                });
            }
            else {
                // this.toastr.error('Ingrese Nuevamente', 'Error Cédula');
                console.log('error');
                _this.clienteGroup.reset();
            }
        });
    };
    __decorate([
        core_1.ViewChild('documento'),
        __metadata("design:type", Object)
    ], ClienteCreateComponent.prototype, "documento", void 0);
    ClienteCreateComponent = __decorate([
        core_1.Component({
            selector: 'app-cliente-create',
            templateUrl: './cliente-create.component.html',
            styleUrls: ['./cliente-create.component.scss']
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            cliente_service_1.ClienteService,
            router_1.Router,
            ngx_toastr_1.ToastrService])
    ], ClienteCreateComponent);
    return ClienteCreateComponent;
}());
exports.ClienteCreateComponent = ClienteCreateComponent;
//# sourceMappingURL=cliente-create.component.js.map