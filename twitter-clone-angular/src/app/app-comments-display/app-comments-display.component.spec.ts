import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCommentsDisplayComponent } from './app-comments-display.component';

describe('AppCommentsDisplayComponent', () => {
  let component: AppCommentsDisplayComponent;
  let fixture: ComponentFixture<AppCommentsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppCommentsDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCommentsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
