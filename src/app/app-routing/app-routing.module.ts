import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';


//declare your component here//
import { DashboardComponent }   from '../dashboard/dashboard.component';
import { HeroesComponent }      from '../heroes/heroes.component';
import { HeroDetailComponent }  from '../hero-detail/hero-detail.component';
import { MaterialDashboardComponent } from '../material-dashboard/material-dashboard.component';
import { UserComponent } from '../user/user.component';
import {LoginComponent} from '../login/login.component';
import {RegisterComponent} from '../register/register.component';
import {HomeComponent} from '../home/home.component';
import {ApiDashboardComponent} from '../api-dashboard/api-dashboard.component';
import{ApiDashboardformComponent} from '../api-dashboardform/api-dashboardform.component';
import { EditApiDashboardComponent } from '../edit-api-dashboard/edit-api-dashboard.component';
//end of component //

import { AuthGuard } from '../auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/material-dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'material-dashboard',component: MaterialDashboardComponent },
  { path: 'user-editforms', component: UserComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'api-dashboard', component: ApiDashboardComponent },
  { path: 'add-newuser', component: ApiDashboardformComponent },
  {path: 'edit-person/:id',component:EditApiDashboardComponent}
  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
    
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
