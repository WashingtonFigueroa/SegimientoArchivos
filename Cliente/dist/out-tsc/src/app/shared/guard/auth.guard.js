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
var login_service_1 = require("../../login.service");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var privilegios = JSON.parse(localStorage.getItem('fileTrackingPrivilegios'));
        if (localStorage.getItem('token')) {
            if (state.url === '/dashboard') {
                return true;
            }
            if (privilegios !== null) {
                for (var i = 0; i < privilegios.length; i++) {
                    if ('/' + privilegios[i].ruta + '/listar' === state.url) {
                        return privilegios[i].activo === 1 ? true : false;
                    }
                }
            }
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router,
            login_service_1.LoginService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map