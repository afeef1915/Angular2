import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component, ElementRef, ViewChild,Pipe,PipeTransform } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

//import service libraries declare all services used in project here//
import { HeroService } from './hero.service';
import { UserService } from './user.service';
import { AlertService } from  './alert.service';
import {AuthenticationService } from './authentication.service';
import { ApiDashboard } from './api-dashboard';
import { ApiDashboardDataService } from './api-dashboard-data.service';
import {FormService} from './form.service';
//services closed//

//import {DataTableModule} from "angular2-datatable";

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterTestingModule} from '@angular/router/testing';
import { AppRoutingModule }     from './app-routing/app-routing.module';

// used to create fake backend
//import { fakeBackendProvider } from './helpers/fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
//import { routing }        from '../app-routing';
import { AuthGuard } from './auth.guard';

// Imports for loading & configuring the in-memory web api

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
//import {MdSidenavModule} from '@angular/material';
import { UserComponent } from './user/user.component';
import {Http, Response} from '@angular/http';
import {LoginComponent} from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { RegisterComponent } from './register/register.component';
//import {MdMenuModule} from '@angular/material';
//component for input fields
//import {MdInputModule} from '@angular/material';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk';
import { DataTablesModule } from 'angular-datatables';
import {
  MdAutocompleteModule,
  MdButtonModule,
  MdButtonToggleModule,
  MdCardModule,
  MdCheckboxModule,
  MdChipsModule,
  MdCoreModule,
  MdDatepickerModule,
  MdDialogModule,
  MdExpansionModule,
  MdGridListModule,
  MdIconModule,
  MdInputModule,
  MdListModule,
  MdMenuModule,
  MdNativeDateModule,
  MdPaginatorModule,
  MdProgressBarModule,
  MdProgressSpinnerModule,
  MdRadioModule,
  MdRippleModule,
  MdSelectModule,
  MdSidenavModule,
  MdSliderModule,
  MdSlideToggleModule,
  MdSnackBarModule,
  MdSortModule,
  MdTableModule,
  MdTabsModule,
  MdToolbarModule,
  MdTooltipModule,
} from '@angular/material';
//import {MenuIconsExample} from './menu-icons-example';
//import {HttpModule} from '@angular/http';

import { ApiDashboardComponent } from './api-dashboard/api-dashboard.component';
import { ApiDashboardformComponent } from './api-dashboardform/api-dashboardform.component';
import { EditApiDashboardComponent } from './edit-api-dashboard/edit-api-dashboard.component';
import { MaterialThemeComponent } from './material-theme/material-theme.component';
//import {Md2Module} from 'md2';
//import {HttpModule} from '@angular/http';
//import {CdkTableModule} from '@angular/cdk';
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    MaterialDashboardComponent,
    UserComponent,
    LoginComponent,
    AlertComponent,
    RegisterComponent,
    HomeComponent,
    ApiDashboardComponent,
    ApiDashboardformComponent,
    EditApiDashboardComponent,
    MaterialThemeComponent
     
    //MenuIconsExample
    //AppRoutingModule
  ],
 
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterTestingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}), // fake in memory API simulation
   // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    MdSidenavModule,
    MdInputModule,
    MdMenuModule,
    BrowserAnimationsModule,
    MdTableModule,
    CdkTableModule,
    DataTablesModule
    //Md2Module

  ],
  //exports: [MdSidenavModule,MdInputModule,MdMenuModule],
exports: [
    CdkTableModule,
    MdAutocompleteModule,
    MdButtonModule,
    MdButtonToggleModule,
    MdCardModule,
    MdCheckboxModule,
    MdChipsModule,
    MdCoreModule,
    MdDatepickerModule,
    MdDialogModule,
    MdExpansionModule,
    MdGridListModule,
    MdIconModule,
    MdInputModule,
    MdListModule,
    MdMenuModule,
    MdNativeDateModule,
    MdPaginatorModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdRadioModule,
    MdRippleModule,
    MdSelectModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdSnackBarModule,
    MdSortModule,
    MdTableModule,
    MdTabsModule,
    MdToolbarModule,
    MdTooltipModule,
  ],
  //declare your service  here 
  providers: [HeroService,UserService,AlertService,AuthGuard,
        
        AuthenticationService,
        UserService,
        ApiDashboard,
        ApiDashboardDataService,
        FormService,
      // providers used to create fake backend
        //fakeBackendProvider,
        MockBackend,
        BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
