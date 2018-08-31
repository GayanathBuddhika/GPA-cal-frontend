import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { GpaviewComponent } from './component/gpaview/gpaview.component';
import { ResultviewComponent } from './component/resultview/resultview.component';
import { ResultEnterComponent } from './component/result-enter/result-enter.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';

const appRoutes: Routes=[
{path: 'gpa', component : GpaviewComponent},
{path: 'result', component : ResultviewComponent },
{path: 'home', component :  AppComponent  },
{path: 'result_enter', component : ResultEnterComponent},
{path: 'user_register', component : UserRegisterComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GpaviewComponent,
    ResultviewComponent,
    ResultEnterComponent,
    UserRegisterComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
