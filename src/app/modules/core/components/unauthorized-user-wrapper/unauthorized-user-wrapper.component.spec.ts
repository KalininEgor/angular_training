import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedUserWrapperComponent } from './unauthorized-user-wrapper.component';

describe('UnauthorizedUserWrapperComponent', () => {
  let component: UnauthorizedUserWrapperComponent;
  let fixture: ComponentFixture<UnauthorizedUserWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorizedUserWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthorizedUserWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
