import { SlideComponent } from './start/slides/slide.component';
import { HeaderComponent } from './start/header.component';
import { StartComponent } from './start/start.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { EventSummaryComponent } from './start/slides/event-summary/event-summary.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SlickModule } from 'ngx-slick';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    HeaderComponent,
    SlideComponent,
    EventSummaryComponent
    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    SlickModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
