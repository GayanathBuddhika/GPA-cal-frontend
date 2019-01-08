import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { GpaviewComponent } from './component/gpaview/gpaview.component';
import { ResultviewComponent } from './component/resultview/resultview.component';
import { UserRegisterComponent } from './component/user-register/user-register.component';
import { HomeComponent } from './component/home/home.component';
import { FacultyService} from './shared_service/faculty.service';
import { SubjectService} from './shared_service/subject.service';
import {HttpClientModule} from '../../node_modules/@angular/common/http';
import {FormsModule} from '@angular/forms';
import { SubjectEnterComponent } from './component/subject-enter/subject-enter.component';
import { AdminLoginComponent } from './component/admin-login/admin-login.component';
import { AdminComponent } from './component/admin/admin.component';
import { NavbarUserComponent } from './component/navbar-user/navbar-user.component';
import { UserLoginComponent } from './component/user-login/user-login.component';
import { UserPageComponent } from './component/user-page/user-page.component';
import { ResultComponent } from './component/result/result.component';
import { UserViewComponent } from './component/user-view/user-view.component';



const appRoutes: Routes=[

{path: '', component :  HomeComponent },
{path: 'login-admin', component : AdminLoginComponent },
{path: 'login-admin/admin', component :  AdminComponent },
{path: 'login-admin/admin/user_register', component : UserRegisterComponent},
{path: 'login-admin/admin/user_register/userdata', component : UserViewComponent },
{path: 'login-admin/admin/enter_subject', component : SubjectEnterComponent},
{path: 'login-admin/admin/result_enter', component : ResultComponent},
{path: 'login-user', component :  UserLoginComponent  },
{path: 'login-user/user', component :  UserPageComponent},
{path: 'login-user/user/gpa', component : GpaviewComponent},
{path: 'login-user/user/result', component : ResultviewComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GpaviewComponent,
    ResultviewComponent,
    UserRegisterComponent,
    HomeComponent,
    SubjectEnterComponent,
    AdminLoginComponent,
    AdminComponent,
    NavbarUserComponent,
   UserLoginComponent,
   UserPageComponent,
   ResultComponent,
   UserViewComponent,
   
  ],
  imports: [
     BrowserModule,
     RouterModule.forRoot(appRoutes),
     HttpClientModule,
     FormsModule
  ],
  providers: [FacultyService,SubjectService],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
