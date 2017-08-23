import { Component, OnInit } from '@angular/core';
//import {  } from '../alert.service';
import {FormService} from '../form.service';
import { Router } from '@angular/router';
import { ApiDashboardDataService } from '../api-dashboard-data.service';
import {FormControl, Validators} from '@angular/forms';
import {MdInputModule} from '@angular/material';
@Component({
  selector: 'app-api-dashboardform',
   moduleId: module.id,
  templateUrl: './api-dashboardform.component.html',
  styleUrls: ['./api-dashboardform.component.css']
})
export class ApiDashboardformComponent implements OnInit {
model: any = {};
loading = false;

  constructor(private router: Router,
        private formService: FormService
        ) { }

  ngOnInit() {
   
  }
   Create() {
        this.loading = true;
        //console.log("create function test");
        this.formService.create(this.model)
            .then(
                data => {
                 // console.log("redirection testing");
                    this.formService.success('Registration successful', true);
                    this.router.navigate(['/api-dashboard']);
                },
                error => {
                  //console.log("failre url");
                 // console.log(error);
                // console.log(JSON.parse(JSON.stringify(error)));
                this.formService.success('Registration successful', true);
                    this.router.navigate(['/api-dashboard']);
                   this.formService.error(error);
                    this.loading = false;
                });
    }
}
