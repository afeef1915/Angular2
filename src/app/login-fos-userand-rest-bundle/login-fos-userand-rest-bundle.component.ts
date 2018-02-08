import { Component, OnInit } from '@angular/core';
import {UserRegistrationService} from '../user-registration.service';
//import { Router } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { AlertService } from  '../alert.service';
@Component({
  selector: 'app-login-fos-userand-rest-bundle',
   moduleId: module.id,
  templateUrl: './login-fos-userand-rest-bundle.component.html',
  styleUrls: ['./login-fos-userand-rest-bundle.component.css']
})
export class LoginFosUserandRestBundleComponent implements OnInit {
  model: any = {};
   message: any;
   loading = false;
   returnUrl: string;
  constructor(private router: Router,
        private userregistrationService: UserRegistrationService,private alertService: AlertService,private route: ActivatedRoute) { }

  ngOnInit() {
     this.alertService.getMessage().subscribe(message => { this.message = message; });
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }
  

  // RegisterNewUser() {

  //        this.userregistrationService.create(this.model)
  //           .then(
  //               data => {
                  
  //                 //this.router.navigate(['/api-dashboard']);
  //               },
  //               error => {
  //                 console.log("hey some error reappeared !!!");
                 
  //               });
  //   }
  RegisterNewUser() {
        this.loading = true;
        this.userregistrationService.create(this.model)
            .then(
                data => {
                    this.alertService.success('Registration successfully', true);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
                
    }
}
