import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsbindingComponent } from './eventsbinding.component';



@NgModule({
  declarations: [EventsbindingComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[EventsbindingComponent]
})
export class EventsbindingModule { }
