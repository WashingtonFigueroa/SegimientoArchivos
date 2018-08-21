import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespaldoIndexComponent } from './respaldo-index.component';

describe('RespaldoIndexComponent', () => {
  let component: RespaldoIndexComponent;
  let fixture: ComponentFixture<RespaldoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespaldoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespaldoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
