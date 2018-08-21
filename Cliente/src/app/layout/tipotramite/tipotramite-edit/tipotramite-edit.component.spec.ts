import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipotramiteEditComponent } from './tipotramite-edit.component';

describe('TipotramiteEditComponent', () => {
  let component: TipotramiteEditComponent;
  let fixture: ComponentFixture<TipotramiteEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipotramiteEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipotramiteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
