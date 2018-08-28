import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {TramiteService} from '../tramite/tramite.service';
import {LoginService} from '../../login.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public tramites : any = null;
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor(protected tramiteService: TramiteService,
                protected loginService: LoginService) {
        const departamento_id = this.loginService.getUsuario().departamento_id;
        this.tramiteService.cantidad_estado_tramites(departamento_id)
            .subscribe(res => {
                console.log(res);
                this.tramites = res;
            });
        this.sliders.push(
            {
                imagePath: 'assets/images/slider1.jpg'
            },
            {
                imagePath: 'assets/images/slider2.jpg'
            },
            {
                imagePath: 'assets/images/slider3.jpg'
            }
        );

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
