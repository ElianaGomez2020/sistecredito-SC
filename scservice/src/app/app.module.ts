import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderModule } from './components/header/header.module';
import { NewCliFormModule } from './new-cli-form/new-cli-form.module';
import {AngularFireModule} from '@angular/fire'
import {AngularFirestore} from '@angular/fire/firestore'


import { environment } from 'src/environments/environment';
import { FilterPipe } from './filter.pipe';
import {FormsModule} from  '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    NewCliFormModule,
    FormsModule,
    NgxPaginationModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
