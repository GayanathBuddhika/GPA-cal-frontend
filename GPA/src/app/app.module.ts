import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { GpaviewComponent } from './component/gpaview/gpaview.component';
import { ResultviewComponent } from './component/resultview/resultview.component';
import { ResultEnterComponent } from './component/result-enter/result-enter.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import { HomeComponent } from './component/home/home.component';
import { FacultyService} from './shared_service/faculty.service';
import {HttpClientModule} from '../../node_modules/@angular/common/http';
import {FormsModule} from '@angular/forms'



const appRoutes: Routes=[
{path: 'gpa', component : GpaviewComponent},
{path: 'result', component : ResultviewComponent },
{path: 'home', component :  HomeComponent },
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
    UserRegisterComponent,
    HomeComponent
  ],
  imports: [
     BrowserModule,
     RouterModule.forRoot(appRoutes),
     HttpClientModule,
     FormsModule
  ],
  providers: [FacultyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
