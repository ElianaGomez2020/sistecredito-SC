import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRoutingModule } from './new-routing.module';
import { NewComponent } from './new.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCliFormModule } from 'src/app/new-cli-form/new-cli-form.module';




@NgModule({
  declarations: [
    NewComponent,
    
  ],
  imports: [
    CommonModule,
    NewRoutingModule,
    ReactiveFormsModule,
    NewCliFormModule
  
  ],
})
export class NewModule { }
