import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableServerPageComponent } from './user-table-server-page.component';

describe('UserTableServerPageComponent', () => {
  let component: UserTableServerPageComponent;
  let fixture: ComponentFixture<UserTableServerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTableServerPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTableServerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
