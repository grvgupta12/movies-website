import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberProblemComponent } from './number-problem.component';

describe('NumberProblemComponent', () => {
  let component: NumberProblemComponent;
  let fixture: ComponentFixture<NumberProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
