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
var cliente_service_1 = require("../cliente.service");
var router_1 = require("@angular/router");
var environment_prod_1 = require("../../../../environments/environment.prod");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var router_animations_1 = require("../../../router.animations");
var ClienteIndexComponent = /** @class */ (function () {
    function ClienteIndexComponent(clienteService, modalService, router) {
        this.clienteService = clienteService;
        this.modalService = modalService;
        this.router = router;
        this.clientes = [];
        this.clientesBK = [];
        this.index = null;
        this.idcliente = null;
        this.search = '';
        this.pages = [];
        this.prev_page = null;
        this.next_page = null;
        this.environment = environment_prod_1.environment;
    }
    ClienteIndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clienteService.index().subscribe(function (res) {
            _this.clientes = res.data;
            _this.clientesBK = res.data;
            _this.getPages(res.last_page);
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    ClienteIndexComponent.prototype.buscar = function (search) {
        this.clientes = this.clientesBK.filter(function (cliente) {
            return cliente.tipo_documento.toLowerCase().indexOf(search) > -1 ||
                cliente.identificacion.toLowerCase().indexOf(search) > -1 ||
                cliente.nombres.toLowerCase().indexOf(search) > -1;
        });
    };
    ClienteIndexComponent.prototype.getPages = function (last_page) {
        for (var i = 1; i <= last_page; i++) {
            this.pages.push({
                url: this.environment.base + 'clientes?page=' + i,
                item: i
            });
        }
    };
    ClienteIndexComponent.prototype.loadPagination = function (url) {
        var _this = this;
        this.clienteService.indexPerPage(url)
            .subscribe(function (res) {
            _this.clientes = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    ClienteIndexComponent.prototype.prevPage = function () {
        var _this = this;
        this.clienteService.indexPerPage(this.prev_page)
            .subscribe(function (res) {
            _this.clientes = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    ClienteIndexComponent.prototype.nextPage = function () {
        var _this = this;
        this.clienteService.indexPerPage(this.next_page)
            .subscribe(function (res) {
            _this.clientes = res.data;
            _this.prev_page = res.prev_page_url;
            _this.next_page = res.next_page_url;
        });
    };
    ClienteIndexComponent.prototype.destroy = function (index, id) {
        var _this = this;
        this.clienteService.destroy(id)
            .subscribe(function (res) {
            _this.clientes.splice(index, 1);
        });
    };
    ClienteIndexComponent.prototype.edit = function (id) {
        this.router.navigate(['cliente/editar/' + id]);
    };
    ClienteIndexComponent.prototype.getDismissReason = function (reason) {
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
    ClienteIndexComponent.prototype.confirm = function (index, id, confirmModal) {
        var _this = this;
        this.index = index;
        this.idcliente = id;
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
    ClienteIndexComponent = __decorate([
        core_1.Component({
            selector: 'app-cliente-index',
            templateUrl: './cliente-index.component.html',
            styleUrls: ['./cliente-index.component.scss'],
            animations: [router_animations_1.routerTransition()]
        }),
        __metadata("design:paramtypes", [cliente_service_1.ClienteService,
            ng_bootstrap_1.NgbModal,
            router_1.Router])
    ], ClienteIndexComponent);
    return ClienteIndexComponent;
}());
exports.ClienteIndexComponent = ClienteIndexComponent;
//# sourceMappingURL=cliente-index.component.js.map