import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewCliFormModule } from 'src/app/new-cli-form/new-cli-form.module';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    EditComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,

    NewCliFormModule
  ]
})
export class EditModule { }
