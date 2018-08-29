"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var layout_component_1 = require("./layout.component");
var cliente_component_1 = require("./cliente/cliente.component");
var cliente_index_component_1 = require("./cliente/cliente-index/cliente-index.component");
var cliente_create_component_1 = require("./cliente/cliente-create/cliente-create.component");
var cliente_edit_component_1 = require("./cliente/cliente-edit/cliente-edit.component");
var tipotramite_component_1 = require("./tipotramite/tipotramite.component");
var tipotramite_index_component_1 = require("./tipotramite/tipotramite-index/tipotramite-index.component");
var tipotramite_create_component_1 = require("./tipotramite/tipotramite-create/tipotramite-create.component");
var tipotramite_edit_component_1 = require("./tipotramite/tipotramite-edit/tipotramite-edit.component");
var tramite_component_1 = require("./tramite/tramite.component");
var tramite_index_component_1 = require("./tramite/tramite-index/tramite-index.component");
var tramite_create_component_1 = require("./tramite/tramite-create/tramite-create.component");
var tramite_edit_component_1 = require("./tramite/tramite-edit/tramite-edit.component");
var departamento_component_1 = require("./departamento/departamento.component");
var departamento_index_component_1 = require("./departamento/departamento-index/departamento-index.component");
var departamento_create_component_1 = require("./departamento/departamento-create/departamento-create.component");
var departamento_edit_component_1 = require("./departamento/departamento-edit/departamento-edit.component");
var privilegio_component_1 = require("./privilegio/privilegio.component");
var privilegio_index_component_1 = require("./privilegio/privilegio-index/privilegio-index.component");
var privilegio_create_component_1 = require("./privilegio/privilegio-create/privilegio-create.component");
var privilegio_edit_component_1 = require("./privilegio/privilegio-edit/privilegio-edit.component");
var recorrido_component_1 = require("./recorrido/recorrido.component");
var recorrido_index_component_1 = require("./recorrido/recorrido-index/recorrido-index.component");
var usuario_component_1 = require("./usuario/usuario.component");
var usuario_index_component_1 = require("./usuario/usuario-index/usuario-index.component");
var usuario_create_component_1 = require("./usuario/usuario-create/usuario-create.component");
var usuario_edit_component_1 = require("./usuario/usuario-edit/usuario-edit.component");
var routes = [
    {
        path: '',
        component: layout_component_1.LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'cliente',
                component: cliente_component_1.ClienteComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: cliente_index_component_1.ClienteIndexComponent },
                    { path: 'crear', component: cliente_create_component_1.ClienteCreateComponent },
                    { path: 'editar/:id', component: cliente_edit_component_1.ClienteEditComponent }]
            },
            { path: 'tipo_tramite',
                component: tipotramite_component_1.TipotramiteComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: tipotramite_index_component_1.TipotramiteIndexComponent },
                    { path: 'crear', component: tipotramite_create_component_1.TipotramiteCreateComponent },
                    { path: 'editar/:id', component: tipotramite_edit_component_1.TipotramiteEditComponent }]
            },
            { path: 'tramite',
                component: tramite_component_1.TramiteComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: tramite_index_component_1.TramiteIndexComponent },
                    { path: 'crear', component: tramite_create_component_1.TramiteCreateComponent },
                    { path: 'editar/:id', component: tramite_edit_component_1.TramiteEditComponent }]
            },
            { path: 'usuario',
                component: usuario_component_1.UsuarioComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: usuario_index_component_1.UsuarioIndexComponent },
                    { path: 'crear', component: usuario_create_component_1.UsuarioCreateComponent },
                    { path: 'editar/:id', component: usuario_edit_component_1.UsuarioEditComponent }]
            },
            { path: 'departamento',
                component: departamento_component_1.DepartamentoComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: departamento_index_component_1.DepartamentoIndexComponent },
                    { path: 'crear', component: departamento_create_component_1.DepartamentoCreateComponent },
                    { path: 'editar/:id', component: departamento_edit_component_1.DepartamentoEditComponent }]
            },
            { path: 'privilegio',
                component: privilegio_component_1.PrivilegioComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: privilegio_index_component_1.PrivilegioIndexComponent },
                    { path: 'crear', component: privilegio_create_component_1.PrivilegioCreateComponent },
                    { path: 'editar/:id', component: privilegio_edit_component_1.PrivilegioEditComponent }]
            },
            { path: 'recorrido',
                component: recorrido_component_1.RecorridoComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: recorrido_index_component_1.RecorridoIndexComponent }]
            },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());
exports.LayoutRoutingModule = LayoutRoutingModule;
//# sourceMappingURL=layout-routing.module.js.map