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
var router_1 = require("@angular/router");
var router_animations_1 = require("../router.animations");
var login_service_1 = require("../login.service");
var forms_1 = require("@angular/forms");
var ngx_toastr_1 = require("ngx-toastr");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, toastr, loginService, fb) {
        this.router = router;
        this.toastr = toastr;
        this.loginService = loginService;
        this.fb = fb;
        this.errors = {
            'password': ''
        };
        if (this.loginService.estaAutenticado()) {
            this.router.navigate(['/dashboard']);
        }
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.createForm = function () {
        this.loginGroup = this.fb.group({
            'cuenta': new forms_1.FormControl('', [forms_1.Validators.required]),
            'password': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.pattern(/^[a-zA-Z0-9$]{5,}$/)])
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.errors.password = '';
        this.loginService.login(this.loginGroup.value)
            .subscribe(function (res) {
            _this.toastr.success(res.mensaje, 'Ingresando al sistema');
            localStorage.setItem('fileTrackingToken', res.token);
            localStorage.setItem('fileTrackingUsuario', JSON.stringify(res.usuario));
            localStorage.setItem('fileTrackingPrivilegios', JSON.stringify(res.privilegios));
            _this.router.navigate(['/dashboard']);
        }, function (error) {
            console.log('res');
            if ('error' in error.error) {
                if (error.error.error === 'invalid_credentials') {
                    _this.loginGroup.reset();
                    _this.toastr.error('Credenciales invalidas', 'Error de autenticacion');
                }
            }
            if ('errors' in error.error) {
                if ('password' in error.error.errors) {
                    error.error.errors.password.map(function (message) {
                        _this.errors.password += message + '<br/>';
                    });
                }
            }
            console.log(error);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            ngx_toastr_1.ToastrService,
            login_service_1.LoginService,
            forms_1.FormBuilder])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map