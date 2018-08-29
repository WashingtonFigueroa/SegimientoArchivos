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
var tramite_service_1 = require("../tramite.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var router_1 = require("@angular/router");
var router_animations_1 = require("../../../router.animations");
var login_service_1 = require("../../../login.service");
var TramiteIndexComponent = /** @class */ (function () {
    function TramiteIndexComponent(tramiteService, loginService, modalService, router) {
        this.tramiteService = tramiteService;
        this.loginService = loginService;
        this.modalService = modalService;
        this.router = router;
        this.environment = environment_prod_1.environment;
        this.tramites = [];
        this.tramitesBK = [];
        this.index = null;
        this.idtramite = null;
        this.search = '';
        this.departamento_id = null;
        this.pages = [];
        this.prev_page = null;
        this.next_page = null;
    }
    TramiteIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.departamento_id = this.loginService.getUsuario().departamento_id;
        this.tramiteService.tramites_departamento(this.departamento_id).subscribe(function (res) {
            console.log(res);
            _this.tramites = res.data;
            _this.tramitesBK = res.data;
            _this.getPages(res.last_page);
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    TramiteIndexComponent.prototype.refresh = function () {
        this.ngOnInit();
    };
    TramiteIndexComponent.prototype.buscar = function (search) {
        var _this = this;
        var request = {
            'search': search,
            'departamento_id': this.departamento_id
        };
        this.tramiteService.buscar_tramite(request)
            .subscribe(function (res) {
            _this.tramites = res.data;
        });
    };
    TramiteIndexComponent.prototype.getPages = function (last_page) {
        this.pages = [];
        for (var i = 1; i <= last_page; i++) {
            this.pages.push({
                url: this.environment.base + 'tramites_departamento/' + this.departamento_id + '?page=' + i,
                item: i
            });
        }
    };
    TramiteIndexComponent.prototype.loadPagination = function (url) {
        var _this = this;
        this.tramiteService.indexPerPage(url)
            .subscribe(function (res) {
            _this.tramites = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    TramiteIndexComponent.prototype.prevPage = function () {
        var _this = this;
        this.tramiteService.indexPerPage(this.prev_page)
            .subscribe(function (res) {
            _this.tramites = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    TramiteIndexComponent.prototype.nextPage = function () {
        var _this = this;
        this.tramiteService.indexPerPage(this.next_page)
            .subscribe(function (res) {
            _this.tramites = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    TramiteIndexComponent.prototype.destroy = function (index, id) {
        var _this = this;
        this.tramiteService.destroy(id)
            .subscribe(function (res) {
            _this.tramites.splice(index, 1);
        });
    };
    TramiteIndexComponent.prototype.edit = function (id) {
        this.router.navigate(['tramite/editar/' + id]);
    };
    TramiteIndexComponent.prototype.getDismissReason = function (reason) {
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
    TramiteIndexComponent.prototype.confirm = function (index, id, confirmModal) {
        var _this = this;
        this.index = index;
        this.idtramite = id;
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
    TramiteIndexComponent = __decorate([
        core_1.Component({
            selector: 'app-tramite-index',
            templateUrl: './tramite-index.component.html',
            styleUrls: ['./tramite-index.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [tramite_service_1.TramiteService,
            login_service_1.LoginService,
            ng_bootstrap_1.NgbModal,
            router_1.Router])
    ], TramiteIndexComponent);
    return TramiteIndexComponent;
}());
exports.TramiteIndexComponent = TramiteIndexComponent;
//# sourceMappingURL=tramite-index.component.js.map