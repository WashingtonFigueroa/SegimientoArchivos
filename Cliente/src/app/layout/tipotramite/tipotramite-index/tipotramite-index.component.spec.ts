import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipotramiteIndexComponent } from './tipotramite-index.component';

describe('TipotramiteIndexComponent', () => {
  let component: TipotramiteIndexComponent;
  let fixture: ComponentFixture<TipotramiteIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipotramiteIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipotramiteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
