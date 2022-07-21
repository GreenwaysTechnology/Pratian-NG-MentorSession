import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConditionalrenderingComponent } from './conditionalrendering.component';
import { CustomattributedirectiveComponent } from './customattributedirective.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    ConditionalrenderingComponent,
    CustomattributedirectiveComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConditionalrenderingComponent,
    CustomattributedirectiveComponent,
    HighlightDirective
  ]
})
export class DirectivesModule { }
