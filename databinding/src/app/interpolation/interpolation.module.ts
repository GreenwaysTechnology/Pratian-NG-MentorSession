import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreeterComponent } from './greeter.component';
import { CustomerComponent } from './customer.component';



@NgModule({
  declarations: [
    GreeterComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GreeterComponent,
    CustomerComponent
  ]
})
export class InterpolationModule { }
