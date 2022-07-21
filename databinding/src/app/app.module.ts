import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InterpolationModule } from './interpolation/interpolation.module';
import { AttributebindingModule } from './attributebinding/attributebinding.module';
import { PropsbindingModule } from './propsbinding/propsbinding.module';
import { EventsbindingModule } from './eventsbinding/eventsbinding.module';
import { FormsModule } from '@angular/forms';
import { PipesModule } from './pipes/pipes.module';
import { DirectivesModule } from './directives/directives.module';
import { FormsappModule } from './formsapp/formsapp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    InterpolationModule,
    AttributebindingModule,
    PropsbindingModule,
    EventsbindingModule,
    FormsModule,
    PipesModule,
    DirectivesModule,
    FormsappModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
