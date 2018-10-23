import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEnterComponent } from './subject-enter.component';

describe('SubjectEnterComponent', () => {
  let component: SubjectEnterComponent;
  let fixture: ComponentFixture<SubjectEnterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectEnterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
