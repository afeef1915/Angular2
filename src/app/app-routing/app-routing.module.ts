import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


//declare your component here//
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { MaterialDashboardComponent } from '../material-dashboard/material-dashboard.component';
import { UserComponent } from '../user/user.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { HomeComponent } from '../home/home.component';
import { ApiDashboardComponent } from '../api-dashboard/api-dashboard.component';
import { ApiDashboardformComponent } from '../api-dashboardform/api-dashboardform.component';
import { EditApiDashboardComponent } from '../edit-api-dashboard/edit-api-dashboard.component';
import { LoginFosUserandRestBundleComponent } from '../login-fos-userand-rest-bundle/login-fos-userand-rest-bundle.component';
import { LoginuserbundleComponent } from '../loginuserbundle/loginuserbundle.component';
import { MaterialThemeComponent } from '../material-theme/material-theme.component';
import { MaterialTestthemeComponent } from '../material-testtheme/material-testtheme.component';
//end of component //

import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/material-dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard] },
  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
  { path: 'material-dashboard', component: MaterialDashboardComponent, canActivate: [AuthGuard] },
  { path: 'user-editforms', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'api-dashboard', component: ApiDashboardComponent, canActivate: [AuthGuard] },
  { path: 'add-newuser', component: ApiDashboardformComponent, canActivate: [AuthGuard] },
  { path: 'edit-person/:id', component: EditApiDashboardComponent, canActivate: [AuthGuard] },
  { path: 'register-users', component: LoginFosUserandRestBundleComponent },
  { path: 'login-fosuser', component: LoginuserbundleComponent },
  { path: 'material-portlets', component: MaterialThemeComponent },
  { path: 'register-materail', component: MaterialTestthemeComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
