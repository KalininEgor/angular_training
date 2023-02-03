import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedUserWrapperComponent } from './authorized-user-wrapper.component';

describe('AuthorizedUserWrapperComponent', () => {
  let component: AuthorizedUserWrapperComponent;
  let fixture: ComponentFixture<AuthorizedUserWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizedUserWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizedUserWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
