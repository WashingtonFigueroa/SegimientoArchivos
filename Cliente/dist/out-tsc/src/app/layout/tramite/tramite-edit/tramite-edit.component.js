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
var router_1 = require("@angular/router");
var ngx_toastr_1 = require("ngx-toastr");
var tramite_service_1 = require("../tramite.service");
var TramiteEditComponent = /** @class */ (function () {
    function TramiteEditComponent(tramiteService, fb, route, router, toastr) {
        var _this = this;
        this.tramiteService = tramiteService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.idtramite = null;
        this.tramite = null;
        this.departamentos = null;
        this.recorridos = null;
        this.route.params.subscribe(function (param) {
            _this.idtramite = param.id;
            _this.tramiteService.show(param.id).subscribe(function (res) {
                _this.tramite = res;
                _this.createForm(res);
            });
            _this.tramiteService.recorridos_tramite(param.id)
                .subscribe(function (res) {
                _this.recorridos = res;
            });
        });
    }
    TramiteEditComponent.prototype.ngOnInit = function () { };
    TramiteEditComponent.prototype.createForm = function (tramite) {
        var permiso = tramite.permiso === 'publico' ? true : false;
        this.tramiteGroup = this.fb.group({
            'recorrido_id': new forms_1.FormControl(tramite.recorrido_id, [forms_1.Validators.required]),
            'estado': new forms_1.FormControl(tramite.estado, [forms_1.Validators.required]),
            'observacion': new forms_1.FormControl(tramite.observacion, [forms_1.Validators.required]),
            'permiso': new forms_1.FormControl(permiso, [forms_1.Validators.required]),
        });
    };
    TramiteEditComponent.prototype.update = function () {
        var _this = this;
        this.tramite.recorrido_id = this.tramiteGroup.value.recorrido_id;
        this.tramite.estado = this.tramiteGroup.value.estado;
        this.tramite.observacion = this.tramiteGroup.value.observacion;
        this.tramite.permiso = this.tramiteGroup.value.permiso ? 'publico' : 'recorrido';
        this.tramiteService.update(this.tramite, this.idtramite)
            .subscribe(function (res) {
            _this.router.navigate(['tramite']);
            _this.toastr.success('Tramite Actualizado', 'Ok');
        }, function (error) {
            _this.toastr.error('Tramite', 'Error de Tramite');
        });
    };
    TramiteEditComponent = __decorate([
        core_1.Component({
            selector: 'app-tramite-edit',
            templateUrl: './tramite-edit.component.html',
            styleUrls: ['./tramite-edit.component.scss']
        }),
        __metadata("design:paramtypes", [tramite_service_1.TramiteService,
            forms_1.FormBuilder,
            router_1.ActivatedRoute,
            router_1.Router,
            ngx_toastr_1.ToastrService])
    ], TramiteEditComponent);
    return TramiteEditComponent;
}());
exports.TramiteEditComponent = TramiteEditComponent;
//# sourceMappingURL=tramite-edit.component.js.map