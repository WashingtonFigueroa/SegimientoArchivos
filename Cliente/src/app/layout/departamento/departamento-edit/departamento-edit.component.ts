import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DepartamentoService} from '../departamento.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {routerTransition} from '../../../router.animations';

@Component({
  selector: 'app-departamento-edit',
  templateUrl: './departamento-edit.component.html',
  styleUrls: ['./departamento-edit.component.scss'],
  animations: [routerTransition()]
})
export class DepartamentoEditComponent implements OnInit {
    departamento_id: number = null;
    departamento: any = null;
    departamentoGroup: FormGroup;

    constructor(protected departamentoService: DepartamentoService,
                protected fb: FormBuilder,
                protected route: ActivatedRoute,
                protected router: Router,
                protected toastr: ToastrService) {
        this.route.params.subscribe(param => {
            this.departamento_id = param.id;
            this.departamentoService.show(param.id)
                .subscribe(res => {
                    this.departamento = res;
                    this.createForm(res);
                });
        });
    }

    ngOnInit() {
    }

    createForm(departamento) {
        this.departamentoGroup = this.fb.group({
            'nombre' : new FormControl(departamento.nombre, [Validators.pattern(/^[a-zA-Z ]{3,}$/)]),
            'descripcion' : new FormControl(departamento.descripcion, [Validators.pattern(/^[a-zA-Z ]{2,}$/)])
        });
    }

    update() {
        this.departamentoService.update(this.departamentoGroup.value, this.departamento_id)
            .subscribe(res => {
                this.toastr.success('Cliente actualizado', 'Exito');
                this.router.navigate(['departamento']);
            });
    }
}
