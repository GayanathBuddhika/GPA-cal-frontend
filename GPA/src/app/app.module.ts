import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { GpaviewComponent } from './component/gpaview/gpaview.component';
import { ResultviewComponent } from './component/resultview/resultview.component';

const appRoutes: Routes=[
{path: 'gpa', component : GpaviewComponent},
{path: 'result', component : ResultviewComponent },
{path: 'home', component :  AppComponent  },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GpaviewComponent,
    ResultviewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
