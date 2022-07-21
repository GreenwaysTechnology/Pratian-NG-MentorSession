import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsbindingComponent } from './eventsbinding.component';
import { ParentComponent } from './parent.component';
import { ChildeventsemitterComponent } from './childeventsemitter.component';
import { TemplatereferenceComponent } from './templatereference.component';
import { DynamiccssComponent } from './dynamiccss.component';



@NgModule({
  declarations: [EventsbindingComponent, ParentComponent, ChildeventsemitterComponent, TemplatereferenceComponent, DynamiccssComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[EventsbindingComponent, ParentComponent, ChildeventsemitterComponent, TemplatereferenceComponent, DynamiccssComponent]
})
export class EventsbindingModule { }
