import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BaiTap4Component } from "./bai-tap4/bai-tap4.component";
import { BaiTap4Module } from "./bai-tap4/bai-tap4.module";

@NgModule({
  declarations: [AppComponent, BaiTap4Component],
  imports: [BrowserModule, BaiTap4Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
