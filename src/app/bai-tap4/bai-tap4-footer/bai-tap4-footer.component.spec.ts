import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap4FooterComponent } from './bai-tap4-footer.component';

describe('BaiTap4FooterComponent', () => {
  let component: BaiTap4FooterComponent;
  let fixture: ComponentFixture<BaiTap4FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap4FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap4FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
