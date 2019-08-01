import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap4CardComponent } from './bai-tap4-card.component';

describe('BaiTap4CardComponent', () => {
  let component: BaiTap4CardComponent;
  let fixture: ComponentFixture<BaiTap4CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap4CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap4CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
