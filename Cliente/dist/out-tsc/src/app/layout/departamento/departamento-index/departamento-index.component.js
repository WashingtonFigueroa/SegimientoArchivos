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
var departamento_service_1 = require("../departamento.service");
var environment_prod_1 = require("../../../../environments/environment.prod");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var router_1 = require("@angular/router");
var router_animations_1 = require("../../../router.animations");
var DepartamentoIndexComponent = /** @class */ (function () {
    function DepartamentoIndexComponent(departamentoService, router, modalService) {
        this.departamentoService = departamentoService;
        this.router = router;
        this.modalService = modalService;
        this.index = null;
        this.closeResult = null;
        this.departamento_id = null;
        this.departamentos = [];
        this.pages = [];
        this.prev_page = null;
        this.next_page = null;
        this.environment = environment_prod_1.environment;
    }
    DepartamentoIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.departamentoService.index()
            .subscribe(function (res) {
            _this.departamentos = res.data;
            _this.getPages(res.last_page);
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    DepartamentoIndexComponent.prototype.getPages = function (last_page) {
        for (var i = 1; i <= last_page; i++) {
            this.pages.push({
                url: this.environment.base + 'departamentos?page=' + i,
                item: i
            });
        }
    };
    DepartamentoIndexComponent.prototype.loadPagination = function (url) {
        var _this = this;
        this.departamentoService.indexPerPage(url)
            .subscribe(function (res) {
            _this.departamentos = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    DepartamentoIndexComponent.prototype.prevPage = function () {
        var _this = this;
        this.departamentoService.indexPerPage(this.prev_page)
            .subscribe(function (res) {
            _this.departamentos = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    DepartamentoIndexComponent.prototype.nextPage = function () {
        var _this = this;
        this.departamentoService.indexPerPage(this.next_page)
            .subscribe(function (res) {
            _this.departamentos = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    DepartamentoIndexComponent.prototype.destroy = function (index, id) {
        var _this = this;
        this.departamentoService.destroy(id)
            .subscribe(function (res) {
            _this.departamentos.splice(index, 1);
        });
    };
    DepartamentoIndexComponent.prototype.edit = function (id) {
        this.router.navigate(['departamento/editar/' + id]);
    };
    DepartamentoIndexComponent.prototype.getDismissReason = function (reason) {
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
    DepartamentoIndexComponent.prototype.confirm = function (index, id, confirmModal) {
        var _this = this;
        this.index = index;
        this.departamento_id = id;
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
    DepartamentoIndexComponent = __decorate([
        core_1.Component({
            selector: 'app-departamento-index',
            templateUrl: './departamento-index.component.html',
            styleUrls: ['./departamento-index.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [departamento_service_1.DepartamentoService,
            router_1.Router,
            ng_bootstrap_1.NgbModal])
    ], DepartamentoIndexComponent);
    return DepartamentoIndexComponent;
}());
exports.DepartamentoIndexComponent = DepartamentoIndexComponent;
//# sourceMappingURL=departamento-index.component.js.map