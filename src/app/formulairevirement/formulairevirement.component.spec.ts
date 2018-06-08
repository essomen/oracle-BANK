import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairevirementComponent } from './formulairevirement.component';

describe('FormulairevirementComponent', () => {
  let component: FormulairevirementComponent;
  let fixture: ComponentFixture<FormulairevirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulairevirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulairevirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
