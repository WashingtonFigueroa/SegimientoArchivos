"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("@ngx-translate/core");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var layout_routing_module_1 = require("./layout-routing.module");
var layout_component_1 = require("./layout.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var header_component_1 = require("./components/header/header.component");
var departamento_component_1 = require("./departamento/departamento.component");
var departamento_index_component_1 = require("./departamento/departamento-index/departamento-index.component");
var departamento_create_component_1 = require("./departamento/departamento-create/departamento-create.component");
var departamento_edit_component_1 = require("./departamento/departamento-edit/departamento-edit.component");
var privilegio_component_1 = require("./privilegio/privilegio.component");
var privilegio_index_component_1 = require("./privilegio/privilegio-index/privilegio-index.component");
var privilegio_edit_component_1 = require("./privilegio/privilegio-edit/privilegio-edit.component");
var privilegio_create_component_1 = require("./privilegio/privilegio-create/privilegio-create.component");
var tipotramite_component_1 = require("./tipotramite/tipotramite.component");
var tipotramite_index_component_1 = require("./tipotramite/tipotramite-index/tipotramite-index.component");
var tipotramite_create_component_1 = require("./tipotramite/tipotramite-create/tipotramite-create.component");
var tipotramite_edit_component_1 = require("./tipotramite/tipotramite-edit/tipotramite-edit.component");
var tramite_component_1 = require("./tramite/tramite.component");
var tramite_index_component_1 = require("./tramite/tramite-index/tramite-index.component");
var tramite_create_component_1 = require("./tramite/tramite-create/tramite-create.component");
var tramite_edit_component_1 = require("./tramite/tramite-edit/tramite-edit.component");
var cliente_component_1 = require("./cliente/cliente.component");
var cliente_index_component_1 = require("./cliente/cliente-index/cliente-index.component");
var cliente_create_component_1 = require("./cliente/cliente-create/cliente-create.component");
var cliente_edit_component_1 = require("./cliente/cliente-edit/cliente-edit.component");
var respaldo_component_1 = require("./respaldo/respaldo.component");
var respaldo_index_component_1 = require("./respaldo/respaldo-index/respaldo-index.component");
var departamento_service_1 = require("./departamento/departamento.service");
var privilegio_service_1 = require("./privilegio/privilegio.service");
var tipotramite_service_1 = require("./tipotramite/tipotramite.service");
var tramite_service_1 = require("./tramite/tramite.service");
var cliente_service_1 = require("./cliente/cliente.service");
var respaldo_service_1 = require("./respaldo/respaldo.service");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var recorrido_component_1 = require("./recorrido/recorrido.component");
var recorrido_index_component_1 = require("./recorrido/recorrido-index/recorrido-index.component");
var recorrido_service_1 = require("./recorrido/recorrido.service");
var ngx_mask_1 = require("ngx-mask");
var usuario_component_1 = require("./usuario/usuario.component");
var usuario_index_component_1 = require("./usuario/usuario-index/usuario-index.component");
var usuario_create_component_1 = require("./usuario/usuario-create/usuario-create.component");
var usuario_edit_component_1 = require("./usuario/usuario-edit/usuario-edit.component");
var usuario_service_1 = require("./usuario/usuario.service");
var ng_auto_complete_1 = require("ng-auto-complete");
var ngx_drag_and_drop_lists_1 = require("ngx-drag-and-drop-lists");
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                layout_routing_module_1.LayoutRoutingModule,
                ng_auto_complete_1.NgAutoCompleteModule,
                core_2.TranslateModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.JsonpModule,
                ng_bootstrap_1.NgbModalModule,
                ng_bootstrap_1.NgbDropdownModule.forRoot(),
                ngx_mask_1.NgxMaskModule.forRoot(),
                ngx_drag_and_drop_lists_1.DndListModule
            ],
            declarations: [
                layout_component_1.LayoutComponent,
                sidebar_component_1.SidebarComponent,
                header_component_1.HeaderComponent,
                departamento_component_1.DepartamentoComponent,
                departamento_index_component_1.DepartamentoIndexComponent,
                departamento_create_component_1.DepartamentoCreateComponent,
                departamento_edit_component_1.DepartamentoEditComponent,
                privilegio_component_1.PrivilegioComponent,
                privilegio_index_component_1.PrivilegioIndexComponent,
                privilegio_edit_component_1.PrivilegioEditComponent,
                privilegio_create_component_1.PrivilegioCreateComponent,
                tipotramite_component_1.TipotramiteComponent,
                tipotramite_index_component_1.TipotramiteIndexComponent,
                tipotramite_create_component_1.TipotramiteCreateComponent,
                tipotramite_edit_component_1.TipotramiteEditComponent,
                tramite_component_1.TramiteComponent,
                tramite_index_component_1.TramiteIndexComponent,
                tramite_create_component_1.TramiteCreateComponent,
                tramite_edit_component_1.TramiteEditComponent,
                cliente_component_1.ClienteComponent,
                cliente_index_component_1.ClienteIndexComponent,
                cliente_create_component_1.ClienteCreateComponent,
                cliente_edit_component_1.ClienteEditComponent,
                respaldo_component_1.RespaldoComponent,
                respaldo_index_component_1.RespaldoIndexComponent,
                recorrido_component_1.RecorridoComponent,
                recorrido_index_component_1.RecorridoIndexComponent,
                usuario_component_1.UsuarioComponent,
                usuario_index_component_1.UsuarioIndexComponent,
                usuario_create_component_1.UsuarioCreateComponent,
                usuario_edit_component_1.UsuarioEditComponent
            ],
            providers: [
                usuario_service_1.UsuarioService,
                departamento_service_1.DepartamentoService,
                privilegio_service_1.PrivilegioService,
                tipotramite_service_1.TipotramiteService,
                tramite_service_1.TramiteService,
                tramite_service_1.TramiteService,
                cliente_service_1.ClienteService,
                respaldo_service_1.RespaldoService,
                recorrido_service_1.RecorridoService
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());
exports.LayoutModule = LayoutModule;
//# sourceMappingURL=layout.module.js.map