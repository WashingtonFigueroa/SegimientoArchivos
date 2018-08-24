import { Component, OnInit } from '@angular/core';
import {DepartamentoService} from '../departamento.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-departamento-create',
  templateUrl: './departamento-create.component.html',
  styleUrls: ['./departamento-create.component.scss']
})
export class DepartamentoCreateComponent implements OnInit {

    departamentoGroup: FormGroup;
    constructor(protected departamentoService: DepartamentoService,
                protected fb: FormBuilder,
                protected toastr: ToastrService) {
        this.createForm();
    }

    ngOnInit() {
    }
    createForm() {
        this.departamentoGroup = this.fb.group({
            'nombre' : new FormControl('', [Validators.required]),
            'descripcion' : new FormControl('', [Validators.required])
        });
    }
    store() {
        this.departamentoService
            .store(this.departamentoGroup.value)
            .subscribe((res: any) => {
                this.toastr.success('El departamento ' + res.nombre + ' fue creado exitosament', 'Registro exitoso');
            });
    }

}
