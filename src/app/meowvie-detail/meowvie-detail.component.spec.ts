import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeowvieDetailComponent } from './meowvie-detail.component';

describe('MeowvieDetailComponent', () => {
  let component: MeowvieDetailComponent;
  let fixture: ComponentFixture<MeowvieDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeowvieDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeowvieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
