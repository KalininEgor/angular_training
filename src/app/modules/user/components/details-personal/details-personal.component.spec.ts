import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPersonalComponent } from './details-personal.component';

describe('DetailsPersonalComponent', () => {
  let component: DetailsPersonalComponent;
  let fixture: ComponentFixture<DetailsPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
