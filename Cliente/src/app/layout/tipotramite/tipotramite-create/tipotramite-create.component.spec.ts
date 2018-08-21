import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipotramiteCreateComponent } from './tipotramite-create.component';

describe('TipotramiteCreateComponent', () => {
  let component: TipotramiteCreateComponent;
  let fixture: ComponentFixture<TipotramiteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipotramiteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipotramiteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
