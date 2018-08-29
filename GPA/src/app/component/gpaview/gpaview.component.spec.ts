import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaviewComponent } from './gpaview.component';

describe('GpaviewComponent', () => {
  let component: GpaviewComponent;
  let fixture: ComponentFixture<GpaviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpaviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
