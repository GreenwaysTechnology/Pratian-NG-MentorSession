import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe.component';
import { DecimalFractionPipe } from './decimal-fraction.pipe';



@NgModule({
  declarations: [
    PipeComponent,
    DecimalFractionPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PipeComponent,
    DecimalFractionPipe
  ]
})
export class PipesModule { }
