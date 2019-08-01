import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap4HeaderComponent } from './bai-tap4-header.component';

describe('BaiTap4HeaderComponent', () => {
  let component: BaiTap4HeaderComponent;
  let fixture: ComponentFixture<BaiTap4HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap4HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap4HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
