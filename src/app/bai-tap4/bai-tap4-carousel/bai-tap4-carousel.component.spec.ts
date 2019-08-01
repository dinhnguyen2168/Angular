import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap4CarouselComponent } from './bai-tap4-carousel.component';

describe('BaiTap4CarouselComponent', () => {
  let component: BaiTap4CarouselComponent;
  let fixture: ComponentFixture<BaiTap4CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap4CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap4CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
