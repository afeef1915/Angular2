import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Component, ElementRef, ViewChild,Pipe,PipeTransform,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
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
import {UserRegistrationService} from './user-registration.service';
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
//import {MatSidenavModule} from '@angular/material';
import { UserComponent } from './user/user.component';
import {Http, Response} from '@angular/http';
import {LoginComponent} from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import { RegisterComponent } from './register/register.component';
//import {MatMenuModule} from '@angular/material';
//component for input fields
//import {MatInputModule} from '@angular/material';

import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';
import { DataTablesModule } from 'angular-datatables';

//import { MaterialModule,MatAutocompleteModule, MatFormFieldModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import {MATERIAL_COMPATIBILITY_MODE} from '@angular/material';
import { DialogOverviewExampleDialog } from './material-theme/material-theme.component';
import {PizzaPartyComponent} from './material-theme/material-theme.component';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
 
  //MatCoreModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSnackBar
 
} from '@angular/material';
//import {MenuIconsExample} from './menu-icons-example';
//import {HttpModule} from '@angular/http';

import { ApiDashboardComponent } from './api-dashboard/api-dashboard.component';
import { ApiDashboardformComponent } from './api-dashboardform/api-dashboardform.component';
import { EditApiDashboardComponent } from './edit-api-dashboard/edit-api-dashboard.component';
import { MaterialThemeComponent } from './material-theme/material-theme.component';
import { LoginFosUserandRestBundleComponent } from './login-fos-userand-rest-bundle/login-fos-userand-rest-bundle.component';
import { LoginuserbundleComponent } from './loginuserbundle/loginuserbundle.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MaterialTestthemeComponent } from './material-testtheme/material-testtheme.component';
import {MatStepperModule} from '@angular/material/stepper';

// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
//import {FlashMessagesModule} from 'angular2-flash-messages/module';

//import {Mat2Module} from 'Mat2';
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
    MaterialThemeComponent,
    LoginFosUserandRestBundleComponent,
    LoginuserbundleComponent,
    MaterialTestthemeComponent,
    DialogOverviewExampleDialog,
    PizzaPartyComponent
    //DialogResultExampleDialog
    // MatDialogModule
    //MenuIconsExample
    //AppRoutingModule
  ],
  entryComponents: [DialogOverviewExampleDialog,PizzaPartyComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterTestingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService, {passThruUnknownUrl: true}), // fake in memory API simulation
   // InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    MatSidenavModule,
    MatInputModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatTableModule,
    CdkTableModule,
    DataTablesModule,
    //MaterialModule,
    ReactiveFormsModule,
    MatAutocompleteModule, 
    MatFormFieldModule,
   MatSlideToggleModule,
   BrowserAnimationsModule,
   MatCheckboxModule,
   MatDatepickerModule,

   MatFormFieldModule,
   MatSelectModule,
   MatRadioModule,
   MatIconModule,
   MatExpansionModule,
   MatGridListModule,
   MatStepperModule,
   MatButtonModule,
   MatTabsModule,
   MatButtonToggleModule,
   MatChipsModule,
   MatProgressSpinnerModule,
   MatProgressBarModule,
   MatCardModule,
   MatDialogModule,
   MatTooltipModule
  // MatSnackBar
   //MatDialogModule
  
 
   
    //Mat2Module

  ],
  //exports: [MatSidenavModule,MatInputModule,MatMenuModule],
exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    //MatCoreModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatStepperModule,
   // MatSnackBar
  
     
  ],
 schemas: [CUSTOM_ELEMENTS_SCHEMA],
  //declare your service  here 
  providers: [HeroService,UserService,AlertService,AuthGuard,
        
        AuthenticationService,
        UserService,
        ApiDashboard,
        ApiDashboardDataService,
        FormService,
        UserRegistrationService,
        FormBuilder,
        
      // providers used to create fake backend
      //  fakeBackendProvider,
        MockBackend,
        BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
