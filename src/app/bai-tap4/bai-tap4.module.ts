import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaiTap4HeaderComponent } from "./bai-tap4-header/bai-tap4-header.component";
import { BaiTap4CarouselComponent } from "./bai-tap4-carousel/bai-tap4-carousel.component";
import { BaiTap4CardComponent } from "./bai-tap4-card/bai-tap4-card.component";
import { BaiTap4FooterComponent } from "./bai-tap4-footer/bai-tap4-footer.component";
import { BestSmartphoneComponent } from "./bai-tap4-card/best-smartphone/best-smartphone.component";
import { BestLaptopComponent } from "./bai-tap4-card/best-laptop/best-laptop.component";

@NgModule({
  declarations: [
    BaiTap4HeaderComponent,
    BaiTap4CarouselComponent,
    BaiTap4CardComponent,
    BaiTap4FooterComponent,
    BestSmartphoneComponent,
    BestLaptopComponent
  ],
  exports: [
    BaiTap4HeaderComponent,
    BaiTap4CarouselComponent,
    BaiTap4CardComponent,
    BaiTap4FooterComponent,
    BestSmartphoneComponent,
    BestLaptopComponent
  ],
  imports: [CommonModule]
})
export class BaiTap4Module {}
