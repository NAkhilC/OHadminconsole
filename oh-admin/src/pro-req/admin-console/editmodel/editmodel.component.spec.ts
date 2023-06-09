import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmodelComponent } from './editmodel.component';

describe('EditmodelComponent', () => {
  let component: EditmodelComponent;
  let fixture: ComponentFixture<EditmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmodelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
