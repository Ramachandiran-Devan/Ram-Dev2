import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgTraComponent } from './org-tra.component';

describe('OrgTraComponent', () => {
  let component: OrgTraComponent;
  let fixture: ComponentFixture<OrgTraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgTraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgTraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
