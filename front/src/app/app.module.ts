import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { Content2Component } from './content2/content2.component';
import { RouterModule, Routes } from '@angular/router';
import { Content3Component } from './content3/content3.component';

const routes : Routes =[
  {path: 'content', component: ContentComponent},
  {path: 'content2', component: Content2Component},
  {path: 'content3', component: Content3Component}, 
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    Content2Component,
    Content3Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
