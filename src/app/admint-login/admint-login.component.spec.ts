import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintLoginComponent } from './admint-login.component';

describe('AdmintLoginComponent', () => {
  let component: AdmintLoginComponent;
  let fixture: ComponentFixture<AdmintLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmintLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
