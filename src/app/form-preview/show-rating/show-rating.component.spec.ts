import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRatingComponent } from './show-rating.component';

describe('ShowRatingComponent', () => {
  let component: ShowRatingComponent;
  let fixture: ComponentFixture<ShowRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRatingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
