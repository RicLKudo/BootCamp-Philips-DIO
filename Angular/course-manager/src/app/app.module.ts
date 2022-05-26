import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CourseListComponent } from './courses/CourseList.Component';
import { StarComponent } from './star/star.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Erro404Component } from './error-404/error-404.compnent';
import { CourseInfoComponent } from './courses/CourseInfo.Component';


@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Erro404Component,
    CourseInfoComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: 'courses', component: CourseListComponent      
    },{
      path: 'courses/info/:id', component: CourseInfoComponent
    },
    {
      path: '', redirectTo: 'courses', pathMatch: 'full'
    },{
      path: '**', component: Erro404Component
    }
  ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
