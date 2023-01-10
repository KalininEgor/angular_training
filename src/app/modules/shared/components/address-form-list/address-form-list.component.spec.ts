import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormListComponent } from './address-form-list.component';

describe('AddressFormListComponent', () => {
  let component: AddressFormListComponent;
  let fixture: ComponentFixture<AddressFormListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressFormListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
