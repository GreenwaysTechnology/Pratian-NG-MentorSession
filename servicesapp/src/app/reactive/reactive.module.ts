import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterstreamComponent } from './greeterstream.component';
import { ArraystreamComponent } from './arraystream.component';
import { RangestreamComponent } from './rangestream.component';
import { DistinctstreamComponent } from './distinctstream.component';

@NgModule({
  declarations: [
    GreeterstreamComponent,
    ArraystreamComponent,
    RangestreamComponent,
    DistinctstreamComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[GreeterstreamComponent, ArraystreamComponent,RangestreamComponent, DistinctstreamComponent]
})
export class ReactiveModule { }
