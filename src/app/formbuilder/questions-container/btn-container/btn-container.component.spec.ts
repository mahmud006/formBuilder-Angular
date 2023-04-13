import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnContainerComponent } from './btn-container.component';

describe('BtnContainerComponent', () => {
  let component: BtnContainerComponent;
  let fixture: ComponentFixture<BtnContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
