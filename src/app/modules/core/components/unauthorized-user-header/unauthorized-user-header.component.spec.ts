import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnauthorizedUserHeaderComponent } from './unauthorized-user-header.component';

describe('UnauthorizedUserHeaderComponent', () => {
  let component: UnauthorizedUserHeaderComponent;
  let fixture: ComponentFixture<UnauthorizedUserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnauthorizedUserHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnauthorizedUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
