import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicationTableComponent } from './multiplication-table.component';

describe('MultiplicationTableComponent', () => {
  let component: MultiplicationTableComponent;
  let fixture: ComponentFixture<MultiplicationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiplicationTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get 0 number', () => {
    expect(component.getZero()).toEqual(0);
  })

  it('should get 5 if a pass 5', () => {
    expect(component.getAbsValue(5)).toEqual(5);
  });

  it('should get 5 if a pass -5', () => {
    expect(component.getAbsValue(-5)).toEqual(5);
  });

  it('should get 0 if a pass 0', () => {
    expect(component.getAbsValue(0)).toEqual(0);
  });

  it('should get 6 if ask for factorial of 3', () => {
    expect(component.getFactorial(3)).toEqual(6);
  });

  it('should get 1 if ask for factorial of 0', () => {
    expect(component.getFactorial(0)).toEqual(1);
  });

  it('should get 6 if ask for factorial of -3', () => {
    expect(component.getFactorial(-3)).toEqual(6);
  });

  it('should get 1 if ask for factorial of 1', () => {
    expect(component.getFactorial(1)).toEqual(1);
  });

});
