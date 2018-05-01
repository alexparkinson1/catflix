import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeowviesComponent } from './meowvies.component';

describe('MeowviesComponent', () => {
  let component: MeowviesComponent;
  let fixture: ComponentFixture<MeowviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeowviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeowviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
