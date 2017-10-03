import { Component, OnInit } from '@angular/core';
import { ApiDashboardDataService } from '../api-dashboard-data.service';
import { ApiDashboard } from '../api-dashboard';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import {FormService} from '../form.service';
@Component({
  selector: 'app-edit-api-dashboard',
  moduleId: module.id,
  templateUrl: './edit-api-dashboard.component.html',
  styleUrls: ['./edit-api-dashboard.component.css']
})
export class EditApiDashboardComponent implements OnInit {
  //hero: Hero;
  api_data: ApiDashboard;
  model: any = {};
  loading = false;
  getelementid:string;
  name: string;
  price:number;
  constructor(private apidashboardataService: ApiDashboardDataService,
    private route: ActivatedRoute,
    private location: Location,private router: Router,
        private formService: FormService) { }

  // ngOnInit() {
  // }
ngOnInit() {
  this.getelementid = this.route.snapshot.params['id'];
  console.log(this.getelementid);
     this.route.paramMap
      .switchMap((params: ParamMap) => this.apidashboardataService.getResultsById(this.getelementid))
      .subscribe(api_data => this.api_data = api_data);
     
  }

  goBack(): void {
    this.location.back();
  }

  //update records
   Update(name,price) {
     console.log(name);
     console.log(price);

        this.loading = true;
        //console.log("create function test");
        this.getelementid = this.route.snapshot.params['id'];
        this.formService.update(name,price,this.getelementid)
            .then(
                data => {
                  console.log("true url");
                    this.formService.success('Registration successful', true);
                    this.router.navigate(['/api-dashboard']);
                },
                error => {
                  console.log("failre url");
                 // console.log(error);
                // console.log(JSON.parse(JSON.stringify(error)));
                // this.formService.success('Registration successful', true);
                    this.router.navigate(['/api-dashboard']);
                //    this.formService.error(error);
                    this.loading = false;
                });
    }
}
