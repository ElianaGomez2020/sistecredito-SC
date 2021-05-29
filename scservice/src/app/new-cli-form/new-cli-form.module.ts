import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NewCliFormComponent } from './new-cli-form.component';



@NgModule({
  declarations: [ NewCliFormComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    NewCliFormComponent
  ]
})
export class NewCliFormModule { }
