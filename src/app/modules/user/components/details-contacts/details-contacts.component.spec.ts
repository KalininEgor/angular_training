import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsContactsComponent } from './details-contacts.component';

describe('DetailsContactsComponent', () => {
  let component: DetailsContactsComponent;
  let fixture: ComponentFixture<DetailsContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
