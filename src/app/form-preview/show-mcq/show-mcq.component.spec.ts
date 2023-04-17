import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMcqComponent } from './show-mcq.component';

describe('ShowMcqComponent', () => {
  let component: ShowMcqComponent;
  let fixture: ComponentFixture<ShowMcqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMcqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMcqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
