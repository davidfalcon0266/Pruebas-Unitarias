import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesComponent } from './votes.component';

describe('VotesComponent', () => {
  let component: VotesComponent;
  let fixture: ComponentFixture<VotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Values fx', () => {

  let component: VotesComponent;

  beforeEach(() => {
    component = new VotesComponent();
  });

  it('Should return the default value (0)', () => {
    let defaultValue = component.value;

    expect(defaultValue).toBe(0);
  });

  it('Should return the state as true', () => {
    let state = component.state;

    expect(state).toBeTruthy();
  });

  it('Should add 1 to the value', () => {
    component.upVote();

    expect(component.value).toBe(1);
  });

  it('Should rest 1 to the value', () => {
    component.downVote();

    expect(component.value).toBe(-1);
  });
});
