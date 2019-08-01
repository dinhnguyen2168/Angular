import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSmartphoneComponent } from './best-smartphone.component';

describe('BestSmartphoneComponent', () => {
  let component: BestSmartphoneComponent;
  let fixture: ComponentFixture<BestSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
