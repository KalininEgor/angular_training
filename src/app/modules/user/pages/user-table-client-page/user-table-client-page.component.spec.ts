import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTableClientPageComponent } from './user-table-client-page.component';

describe('UserTableClientPageComponent', () => {
  let component: UserTableClientPageComponent;
  let fixture: ComponentFixture<UserTableClientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTableClientPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTableClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
