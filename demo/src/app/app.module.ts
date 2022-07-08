import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PageModule } from "./page/page,module";
//import { PageComponent } from "./page/page.component";

@NgModule({
  //injector configuration
  declarations: [AppComponent],//PageComponent],
  imports: [BrowserModule, PageModule],
  providers: [],
  //Root Component
  bootstrap: [AppComponent]
})
export class AppModule { }