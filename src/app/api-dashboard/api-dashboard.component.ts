//import { Component, OnInit } from '@angular/core';
import {Component, ElementRef, ViewChild,Pipe,PipeTransform,OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/observable/fromEvent';

// import {Component, ElementRef, ViewChild} from '@angular/core';
import { ApiDashboard } from '../api-dashboard';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//import { ApiDashboard } from './api-dashboard';
import { ApiDashboardDataService } from '../api-dashboard-data.service';
// import { Observable } from 'rxjs/Observable';
// import {DataSource} from '@angular/cdk';
 //import {BehaviorSubject} from 'rxjs/BehaviorSubject';
//import {Observable} from 'rxjs/Observable';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/observable/merge';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/observable/fromEvent';
import {Subject} from 'rxjs/Subject';
//import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
//import { DataTablesModule } from 'angular-datatables';
import { Router } from '@angular/router';
import {FormService} from '../form.service';
//import { ApiDashboardDataService } from '../api-dashboard-data.service';
// @Pipe({ name: 'dataPipe' })
// export class DataTablePipe implements PipeTransform {
//   transform(array: any[], query: string): any {
//     if (query) {
//       query = query.toLowerCase();
//       return array.filter((value: any) =>
//         value.name.toLowerCase().indexOf(query) > -1);
//     }
//     return array;
//   }
// }

@Component({
  selector: 'app-api-dashboard',
  moduleId: module.id,
  templateUrl: './api-dashboard.component.html',
  styleUrls: ['./api-dashboard.component.css']
})


export class ApiDashboardComponent implements OnInit  {
  api: ApiDashboard[] = [];
  model: any = {};
  loading = false;
  data: any = null;
  search: string = null;
  //dtOptions: DataTables.Settings = {};
  dtOptions:any={};
  //heroes: Hero[];
  selectedData: ApiDashboard;
 // persons: Person[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  //dtTrigger: Subject = new Subject();
  dtTrigger:Subject<any> = new Subject();
  private heroesUrl = 'http://localhost/mtl_project/web/app_dev.php/db-show';  // URL to web api
  constructor(private apiService: ApiDashboardDataService,public http: Http,private router: Router,
        private formService: FormService) {}
  

  ngOnInit() {
     this.dtOptions = {
      pagingType: "full_numbers",
      pageLength:10,
        // dom: 'Bfrtip',
        // // Configure the buttons
        // buttons: [
        // 'columnsToggle',
        // 'colvis',
        // 'copy',
        // 'print',
        // 'excel',
        // {
        // text: 'Some button',
        // key: '1',
        // action: function (e, dt, node, config) {
        // alert('Button activated');
        // }
        // }
        // ]
        // };
        // }
    };
     // Declare the use of the extension in the dom parameter
     
    this.http.get(this.heroesUrl)
      .map(this.extractData)
      .subscribe(api => {
        this.api = api;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
    //this.apiService.getApiData();
  //  this.http.get('./assets/data.json')
  //     .subscribe((data) => {
  //       this.data = data.json();
  //     });
        //  this.apiService.getApiData()
        //  .then(api => this.api = api);
        // this.dtTrigger.next();
      
}

private extractData(res: Response) {
    const body = res.json();
    //console.log(body.name);
    return body;
  }
  // Create() {
  //       this.loading = true;
  //       //console.log("create function test");
  //       this.formService.update(this.model)
  //           .then(
  //               data => {
  //                // console.log("redirection testing");
  //                   this.formService.success('Registration successful', true);
  //                   this.router.navigate(['/material-dashboard']);
  //               },
  //               error => {
  //                 //console.log("failre url");
  //                // console.log(error);
  //               // console.log(JSON.parse(JSON.stringify(error)));
  //               this.formService.success('Registration successful', true);
  //                   this.router.navigate(['/material-dashboard']);
  //                  this.formService.error(error);
  //                   this.loading = false;
  //               });
  //   }
  
  onSelect(values: ApiDashboard): void {
    console.log("onselect function");
    this.selectedData = values;
    console.log(this.selectedData);
  }
  viewDetails(selected_id): void {
    console.log("view details function");
    console.log(selected_id);
    this.router.navigate(['/edit-person', selected_id]);
  }

  DeleteDetails(selected_id):void{
    this.formService.delete(selected_id)
            .then(
            
                 data => {
                     console.log('delete the records');
                //  // console.log("redirection testing");
                //     this.formService.success('Registration successful', true);
                //     this.router.navigate(['/api-dashboard']);
                 },
                error => {
                    console.log('cannot delete data');
                     this.router.navigate(['/api-dashboard']);
                     window.location.reload();
                //   //console.log("failre url");
                
                });
               
  }
}
