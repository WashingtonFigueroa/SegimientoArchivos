import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {NgbDropdownModule, NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { CargoComponent } from './cargo/cargo.component';
import { CargoIndexComponent } from './cargo/cargo-index/cargo-index.component';
import { CargoEditComponent } from './cargo/cargo-edit/cargo-edit.component';
import { CargoCreateComponent } from './cargo/cargo-create/cargo-create.component';
import { DepartamentoComponent } from './departamento/departamento.component';
import { DepartamentoIndexComponent } from './departamento/departamento-index/departamento-index.component';
import { DepartamentoCreateComponent } from './departamento/departamento-create/departamento-create.component';
import { DepartamentoEditComponent } from './departamento/departamento-edit/departamento-edit.component';
import { PrivilegioComponent } from './privilegio/privilegio.component';
import { PrivilegioIndexComponent } from './privilegio/privilegio-index/privilegio-index.component';
import { PrivilegioEditComponent } from './privilegio/privilegio-edit/privilegio-edit.component';
import { PrivilegioCreateComponent } from './privilegio/privilegio-create/privilegio-create.component';
import { TipotramiteComponent } from './tipotramite/tipotramite.component';
import { TipotramiteIndexComponent } from './tipotramite/tipotramite-index/tipotramite-index.component';
import { TipotramiteCreateComponent } from './tipotramite/tipotramite-create/tipotramite-create.component';
import { TipotramiteEditComponent } from './tipotramite/tipotramite-edit/tipotramite-edit.component';
import { TramiteComponent } from './tramite/tramite.component';
import { TramiteIndexComponent } from './tramite/tramite-index/tramite-index.component';
import { TramiteCreateComponent } from './tramite/tramite-create/tramite-create.component';
import { TramiteEditComponent } from './tramite/tramite-edit/tramite-edit.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteIndexComponent } from './cliente/cliente-index/cliente-index.component';
import { ClienteCreateComponent } from './cliente/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './cliente/cliente-edit/cliente-edit.component';
import { RespaldoComponent } from './respaldo/respaldo.component';
import { RespaldoIndexComponent } from './respaldo/respaldo-index/respaldo-index.component';
import { CargoService } from './cargo/cargo.service';
import { DepartamentoService } from './departamento/departamento.service';
import { PrivilegioService } from './privilegio/privilegio.service';
import { TipotramiteService } from './tipotramite/tipotramite.service';
import { TramiteService } from './tramite/tramite.service';
import { ClienteService } from './cliente/cliente.service';
import { RespaldoService } from './respaldo/respaldo.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http';
import { RecorridoComponent } from './recorrido/recorrido.component';
import { RecorridoIndexComponent } from './recorrido/recorrido-index/recorrido-index.component';
import {RecorridoService} from './recorrido/recorrido.service';
import {NgxMaskModule} from 'ngx-mask';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        JsonpModule,
        NgbModalModule,
        NgbDropdownModule.forRoot(),
        NgxMaskModule
    ],
    declarations: [
        LayoutComponent,
        SidebarComponent,
        HeaderComponent,
        CargoComponent,
        CargoIndexComponent,
        CargoEditComponent,
        CargoCreateComponent,
        DepartamentoComponent,
        DepartamentoIndexComponent,
        DepartamentoCreateComponent,
        DepartamentoEditComponent,
        PrivilegioComponent,
        PrivilegioIndexComponent,
        PrivilegioEditComponent,
        PrivilegioCreateComponent,
        TipotramiteComponent,
        TipotramiteIndexComponent,
        TipotramiteCreateComponent,
        TipotramiteEditComponent,
        TramiteComponent,
        TramiteIndexComponent,
        TramiteCreateComponent,
        TramiteEditComponent,
        ClienteComponent,
        ClienteIndexComponent,
        ClienteCreateComponent,
        ClienteEditComponent,
        RespaldoComponent,
        RespaldoIndexComponent,
        RecorridoComponent,
        RecorridoIndexComponent],
    providers: [
        CargoService,
        DepartamentoService,
        PrivilegioService,
        TipotramiteService,
        TramiteService,
        TramiteService,
        ClienteService,
        RespaldoService,
        RecorridoService
    ]
})
export class LayoutModule {}
