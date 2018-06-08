import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListepersonnelComponent } from './listepersonnel.component';

describe('ListepersonnelComponent', () => {
  let component: ListepersonnelComponent;
  let fixture: ComponentFixture<ListepersonnelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListepersonnelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListepersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
