import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipotramiteComponent } from './tipotramite.component';

describe('TipotramiteComponent', () => {
  let component: TipotramiteComponent;
  let fixture: ComponentFixture<TipotramiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipotramiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipotramiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
