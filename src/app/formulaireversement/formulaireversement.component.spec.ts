import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireversementComponent } from './formulaireversement.component';

describe('FormulaireversementComponent', () => {
  let component: FormulaireversementComponent;
  let fixture: ComponentFixture<FormulaireversementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireversementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireversementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
