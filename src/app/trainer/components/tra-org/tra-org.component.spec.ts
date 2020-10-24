import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraOrgComponent } from './tra-org.component';

describe('TraOrgComponent', () => {
  let component: TraOrgComponent;
  let fixture: ComponentFixture<TraOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
