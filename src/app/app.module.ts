import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    UserProfileComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }