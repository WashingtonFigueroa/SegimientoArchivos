import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartamentoIndexComponent } from './departamento-index.component';

describe('DepartamentoIndexComponent', () => {
  let component: DepartamentoIndexComponent;
  let fixture: ComponentFixture<DepartamentoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartamentoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartamentoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
