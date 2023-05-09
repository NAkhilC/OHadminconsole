import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProReqComponent } from './pro-req.component';

describe('ProReqComponent', () => {
  let component: ProReqComponent;
  let fixture: ComponentFixture<ProReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProReqComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
