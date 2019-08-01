import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestLaptopComponent } from './best-laptop.component';

describe('BestLaptopComponent', () => {
  let component: BestLaptopComponent;
  let fixture: ComponentFixture<BestLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
