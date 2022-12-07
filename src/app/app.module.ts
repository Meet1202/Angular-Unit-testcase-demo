import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthModule } from 'auth';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DateFormatPipe } from './date-format.pipe';
import { HttpClientModule } from '@angular/common/http';
import { DyncamicCOmponentComponent } from './dyncamic-component/dyncamic-component.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const Routes:any = [
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DateFormatPipe,
    DyncamicCOmponentComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    RouterModule.forRoot(Routes),
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
