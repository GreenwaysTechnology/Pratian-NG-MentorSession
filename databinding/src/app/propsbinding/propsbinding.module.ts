import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { SkillsComponent } from './skills.component';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent,
    SkillsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ParentComponent,
    ChildComponent,
    SkillsComponent,
  ]
})
export class PropsbindingModule { }
