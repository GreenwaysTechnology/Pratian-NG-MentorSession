import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PageComponent } from "./page.component";
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
    declarations: [PageComponent],
    imports: [CommonModule, HeaderModule, FooterModule],
    providers: [],
    exports: [PageComponent] //make it availble outside this module
})
export class PageModule {

}