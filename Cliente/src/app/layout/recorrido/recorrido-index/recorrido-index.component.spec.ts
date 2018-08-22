import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorridoIndexComponent } from './recorrido-index.component';

describe('RecorridoIndexComponent', () => {
  let component: RecorridoIndexComponent;
  let fixture: ComponentFixture<RecorridoIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecorridoIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecorridoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
