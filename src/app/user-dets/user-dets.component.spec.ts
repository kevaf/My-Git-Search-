import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetsComponent } from './user-dets.component';

describe('UserDetsComponent', () => {
  let component: UserDetsComponent;
  let fixture: ComponentFixture<UserDetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
