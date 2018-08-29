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
var tipotramite_service_1 = require("../tipotramite.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var router_1 = require("@angular/router");
var router_animations_1 = require("../../../router.animations");
var TipotramiteIndexComponent = /** @class */ (function () {
    function TipotramiteIndexComponent(tipotramiteService, modalService, router) {
        this.tipotramiteService = tipotramiteService;
        this.modalService = modalService;
        this.router = router;
        this.tipotramites = [];
        this.tipotramitesBK = [];
        this.index = null;
        this.idtipotramite = null;
        this.search = '';
        this.pages = [];
        this.prev_page = null;
        this.next_page = null;
        this.environment = environment_prod_1.environment;
    }
    TipotramiteIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tipotramiteService.index().subscribe(function (res) {
            _this.tipotramites = res.data;
            _this.tipotramitesBK = res.data;
            _this.getPages(res.last_page);
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    TipotramiteIndexComponent.prototype.buscar = function (search) {
        this.tipotramites = this.tipotramitesBK.filter(function (tipo) {
            return tipo.departamento.nombre.toLowerCase().indexOf(search) > -1 ||
                tipo.nombre.toLowerCase().indexOf(search) > -1;
        });
    };
    TipotramiteIndexComponent.prototype.getPages = function (last_page) {
        for (var i = 1; i <= last_page; i++) {
            this.pages.push({
                url: this.environment.base + 'tipotramites?page=' + i,
                item: i
            });
        }
    };
    TipotramiteIndexComponent.prototype.loadPagination = function (url) {
        var _this = this;
        this.tipotramiteService.indexPerPage(url)
            .subscribe(function (res) {
            _this.tipotramites = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    TipotramiteIndexComponent.prototype.prevPage = function () {
        var _this = this;
        this.tipotramiteService.indexPerPage(this.prev_page)
            .subscribe(function (res) {
            _this.tipotramites = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    TipotramiteIndexComponent.prototype.nextPage = function () {
        var _this = this;
        this.tipotramiteService.indexPerPage(this.next_page)
            .subscribe(function (res) {
            _this.tipotramites = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    TipotramiteIndexComponent.prototype.destroy = function (index, id) {
        var _this = this;
        this.tipotramiteService.destroy(id).subscribe(function (res) {
            _this.tipotramites.splice(index, 1);
        });
    };
    TipotramiteIndexComponent.prototype.edit = function (id) {
        this.router.navigate(['tipo_tramite/editar/' + id]);
    };
    TipotramiteIndexComponent.prototype.getDismissReason = function (reason) {
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
    TipotramiteIndexComponent.prototype.confirm = function (index, id, confirmModal) {
        var _this = this;
        this.index = index;
        this.idtipotramite = id;
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
    TipotramiteIndexComponent = __decorate([
        core_1.Component({
            selector: 'app-tipotramite-index',
            templateUrl: './tipotramite-index.component.html',
            styleUrls: ['./tipotramite-index.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [tipotramite_service_1.TipotramiteService,
            ng_bootstrap_1.NgbModal,
            router_1.Router])
    ], TipotramiteIndexComponent);
    return TipotramiteIndexComponent;
}());
exports.TipotramiteIndexComponent = TipotramiteIndexComponent;
//# sourceMappingURL=tipotramite-index.component.js.map