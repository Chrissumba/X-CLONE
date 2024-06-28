import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProfileContactComponent } from './app-profile-contact.component';

describe('AppProfileContactComponent', () => {
  let component: AppProfileContactComponent;
  let fixture: ComponentFixture<AppProfileContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppProfileContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppProfileContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
