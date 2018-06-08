import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairetraitComponent } from './formulairetrait.component';

describe('FormulairetraitComponent', () => {
  let component: FormulairetraitComponent;
  let fixture: ComponentFixture<FormulairetraitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairetraitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairetraitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
