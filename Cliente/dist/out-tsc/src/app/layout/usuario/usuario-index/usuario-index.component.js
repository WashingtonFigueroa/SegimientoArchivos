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
var environment_prod_1 = require("../../../../environments/environment.prod");
var usuario_service_1 = require("../../usuario/usuario.service");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var router_animations_1 = require("../../../router.animations");
var UsuarioIndexComponent = /** @class */ (function () {
    function UsuarioIndexComponent(usuarioService, router, modalService) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.modalService = modalService;
        this.index = null;
        this.closeResult = null;
        this.usuario_id = null;
        this.usuarios = [];
        this.pages = [];
        this.prev_page = null;
        this.next_page = null;
        this.environment = environment_prod_1.environment;
    }
    UsuarioIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.index()
            .subscribe(function (res) {
            _this.usuarios = res.data;
            _this.getPages(res.last_page);
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    UsuarioIndexComponent.prototype.getPages = function (last_page) {
        for (var i = 1; i <= last_page; i++) {
            this.pages.push({
                url: this.environment.base + 'usuarios?page=' + i,
                item: i
            });
        }
    };
    UsuarioIndexComponent.prototype.loadPagination = function (url) {
        var _this = this;
        this.usuarioService.indexPerPage(url)
            .subscribe(function (res) {
            _this.usuarios = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    UsuarioIndexComponent.prototype.prevPage = function () {
        var _this = this;
        this.usuarioService.indexPerPage(this.prev_page)
            .subscribe(function (res) {
            _this.usuarios = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    UsuarioIndexComponent.prototype.nextPage = function () {
        var _this = this;
        this.usuarioService.indexPerPage(this.next_page)
            .subscribe(function (res) {
            _this.usuarios = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    UsuarioIndexComponent.prototype.destroy = function (index, id) {
        var _this = this;
        this.usuarioService.destroy(id)
            .subscribe(function (res) {
            _this.usuarios.splice(index, 1);
        });
    };
    UsuarioIndexComponent.prototype.edit = function (id) {
        this.router.navigate(['usuario/editar/' + id]);
    };
    UsuarioIndexComponent.prototype.getDismissReason = function (reason) {
        if (reason === ng_bootstrap_1.ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ng_bootstrap_1.ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    UsuarioIndexComponent.prototype.confirm = function (index, id, confirmModal) {
        var _this = this;
        this.index = index;
        this.usuario_id = id;
        this.modalService.open(confirmModal).result.then(function (result) {
            if (result === 'si') {
                _this.destroy(index, id);
            }
            else {
                console.log(result);
            }
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            console.log('cancel');
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    UsuarioIndexComponent = __decorate([
        core_1.Component({
            selector: 'app-usuario-index',
            templateUrl: './usuario-index.component.html',
            styleUrls: ['./usuario-index.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [usuario_service_1.UsuarioService,
            router_1.Router,
            ng_bootstrap_1.NgbModal])
    ], UsuarioIndexComponent);
    return UsuarioIndexComponent;
}());
exports.UsuarioIndexComponent = UsuarioIndexComponent;
//# sourceMappingURL=usuario-index.component.js.map