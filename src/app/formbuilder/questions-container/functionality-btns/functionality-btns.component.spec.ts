import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalityBtnsComponent } from './functionality-btns.component';

describe('FunctionalityBtnsComponent', () => {
  let component: FunctionalityBtnsComponent;
  let fixture: ComponentFixture<FunctionalityBtnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionalityBtnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionalityBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
