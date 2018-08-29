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
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var privilegio_service_1 = require("../privilegio.service");
var PrivilegioIndexComponent = /** @class */ (function () {
    function PrivilegioIndexComponent(privilegioService, modalService, router) {
        this.privilegioService = privilegioService;
        this.modalService = modalService;
        this.router = router;
        this.privilegios = [];
        this.privilegiosBK = [];
        this.index = null;
        this.privilegio_id = null;
        this.search = '';
        this.pages = [];
        this.prev_page = null;
        this.next_page = null;
        this.environment = environment_prod_1.environment;
    }
    PrivilegioIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.privilegioService.index().subscribe(function (res) {
            _this.privilegios = res.data;
            _this.privilegiosBK = res.data;
            _this.getPages(res.last_page);
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    PrivilegioIndexComponent.prototype.buscar = function (search) {
        this.privilegios = this.privilegiosBK.filter(function (privilegio) {
            return privilegio.departamento.nombre.toLowerCase().indexOf(search) > -1;
        });
    };
    PrivilegioIndexComponent.prototype.getPages = function (last_page) {
        for (var i = 1; i <= last_page; i++) {
            this.pages.push({
                url: this.environment.base + 'privilegios?page=' + i,
                item: i
            });
        }
    };
    PrivilegioIndexComponent.prototype.loadPagination = function (url) {
        var _this = this;
        this.privilegioService.indexPerPage(url)
            .subscribe(function (res) {
            _this.privilegios = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    PrivilegioIndexComponent.prototype.prevPage = function () {
        var _this = this;
        this.privilegioService.indexPerPage(this.prev_page)
            .subscribe(function (res) {
            _this.privilegios = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    PrivilegioIndexComponent.prototype.nextPage = function () {
        var _this = this;
        this.privilegioService.indexPerPage(this.next_page)
            .subscribe(function (res) {
            _this.privilegios = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    PrivilegioIndexComponent.prototype.destroy = function (index, id) {
        var _this = this;
        this.privilegioService.destroy(id)
            .subscribe(function (res) {
            _this.privilegios.splice(index, 1);
        });
    };
    PrivilegioIndexComponent.prototype.edit = function (id) {
        this.router.navigate(['cliente/editar/' + id]);
    };
    PrivilegioIndexComponent.prototype.getDismissReason = function (reason) {
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
    PrivilegioIndexComponent.prototype.confirm = function (index, id, confirmModal) {
        var _this = this;
        this.index = index;
        this.privilegio_id = id;
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
    PrivilegioIndexComponent = __decorate([
        core_1.Component({
            selector: 'app-privilegio-index',
            templateUrl: './privilegio-index.component.html',
            styleUrls: ['./privilegio-index.component.scss']
        }),
        __metadata("design:paramtypes", [privilegio_service_1.PrivilegioService,
            ng_bootstrap_1.NgbModal,
            router_1.Router])
    ], PrivilegioIndexComponent);
    return PrivilegioIndexComponent;
}());
exports.PrivilegioIndexComponent = PrivilegioIndexComponent;
//# sourceMappingURL=privilegio-index.component.js.map