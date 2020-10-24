import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgLogoutComponent } from './org-logout.component';

describe('OrgLogoutComponent', () => {
  let component: OrgLogoutComponent;
  let fixture: ComponentFixture<OrgLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgLogoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
