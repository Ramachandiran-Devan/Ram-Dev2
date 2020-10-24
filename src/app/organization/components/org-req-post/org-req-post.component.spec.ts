import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgReqPostComponent } from './org-req-post.component';

describe('OrgReqPostComponent', () => {
  let component: OrgReqPostComponent;
  let fixture: ComponentFixture<OrgReqPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgReqPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgReqPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
