import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {ClienteComponent} from './cliente/cliente.component';
import {ClienteIndexComponent} from './cliente/cliente-index/cliente-index.component';
import {ClienteCreateComponent} from './cliente/cliente-create/cliente-create.component';
import {ClienteEditComponent} from './cliente/cliente-edit/cliente-edit.component';
import {TipotramiteComponent} from './tipotramite/tipotramite.component';
import {TipotramiteIndexComponent} from './tipotramite/tipotramite-index/tipotramite-index.component';
import {TipotramiteCreateComponent} from './tipotramite/tipotramite-create/tipotramite-create.component';
import {TipotramiteEditComponent} from './tipotramite/tipotramite-edit/tipotramite-edit.component';
import {TramiteComponent} from './tramite/tramite.component';
import {TramiteIndexComponent} from './tramite/tramite-index/tramite-index.component';
import {TramiteCreateComponent} from './tramite/tramite-create/tramite-create.component';
import {TramiteEditComponent} from './tramite/tramite-edit/tramite-edit.component';
import {DepartamentoComponent} from './departamento/departamento.component';
import {DepartamentoIndexComponent} from './departamento/departamento-index/departamento-index.component';
import {DepartamentoCreateComponent} from './departamento/departamento-create/departamento-create.component';
import {DepartamentoEditComponent} from './departamento/departamento-edit/departamento-edit.component';
import {PrivilegioComponent} from './privilegio/privilegio.component';
import {PrivilegioIndexComponent} from './privilegio/privilegio-index/privilegio-index.component';
import {PrivilegioCreateComponent} from './privilegio/privilegio-create/privilegio-create.component';
import {PrivilegioEditComponent} from './privilegio/privilegio-edit/privilegio-edit.component';
import {RecorridoComponent} from './recorrido/recorrido.component';
import {RecorridoIndexComponent} from './recorrido/recorrido-index/recorrido-index.component';
import {UsuarioComponent} from './usuario/usuario.component';
import {UsuarioIndexComponent} from './usuario/usuario-index/usuario-index.component';
import {UsuarioCreateComponent} from './usuario/usuario-create/usuario-create.component';
import {UsuarioEditComponent} from './usuario/usuario-edit/usuario-edit.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            {   path: 'cliente',
                component: ClienteComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: ClienteIndexComponent},
                    { path: 'crear', component: ClienteCreateComponent},
                    { path: 'editar/:id', component: ClienteEditComponent}]
            },
            {   path: 'tipo_tramite',
                component: TipotramiteComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: TipotramiteIndexComponent},
                    { path: 'crear', component: TipotramiteCreateComponent},
                    { path: 'editar/:id', component: TipotramiteEditComponent}]
            },
            {   path: 'tramite',
                component: TramiteComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: TramiteIndexComponent},
                    { path: 'crear', component: TramiteCreateComponent},
                    { path: 'editar/:id', component: TramiteEditComponent}]
            },
            {   path: 'usuario',
                component: UsuarioComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: UsuarioIndexComponent},
                    { path: 'crear', component: UsuarioCreateComponent},
                    { path: 'editar/:id', component: UsuarioEditComponent}]
            },
            {   path: 'departamento',
                component: DepartamentoComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: DepartamentoIndexComponent},
                    { path: 'crear', component: DepartamentoCreateComponent},
                    { path: 'editar/:id', component: DepartamentoEditComponent}]
            },
            {   path: 'privilegio',
                component: PrivilegioComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: PrivilegioIndexComponent},
                    { path: 'crear', component: PrivilegioCreateComponent},
                    { path: 'editar/:id', component: PrivilegioEditComponent}]
            },
            {   path: 'recorrido',
                component: RecorridoComponent,
                children: [{ path: '', redirectTo: 'listar', pathMatch: 'full' },
                    { path: 'listar', component: RecorridoIndexComponent}]
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

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
