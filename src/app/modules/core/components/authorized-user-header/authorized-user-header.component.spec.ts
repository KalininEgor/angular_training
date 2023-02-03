import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedUserHeaderComponent } from './authorized-user-header.component';

describe('AuthorizedUserHeaderComponent', () => {
  let component: AuthorizedUserHeaderComponent;
  let fixture: ComponentFixture<AuthorizedUserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizedUserHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorizedUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
