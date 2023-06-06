import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProReqFormComponent } from './pro-req-form.component';

describe('ProReqFormComponent', () => {
  let component: ProReqFormComponent;
  let fixture: ComponentFixture<ProReqFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProReqFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProReqFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
