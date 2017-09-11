import { Component, OnInit } from '@angular/core';
import {UserRegistrationService} from '../user-registration.service';
import { Router } from '@angular/router';

import {FormControl, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MdInputModule} from '@angular/material';
@Component({
  selector: 'app-login-fos-userand-rest-bundle',
   moduleId: module.id,
  templateUrl: './login-fos-userand-rest-bundle.component.html',
  styleUrls: ['./login-fos-userand-rest-bundle.component.css']
})
export class LoginFosUserandRestBundleComponent implements OnInit {
  model: any = {};
 
  constructor(private router: Router,
        private userregistrationService: UserRegistrationService) { }

  ngOnInit() {
  }
  

  RegisterNewUser() {

         this.userregistrationService.create(this.model)
            .then(
                data => {
                  console.log("register user through fos user bundle");
                //this.router.navigate(['/api-dashboard']);
                },
                error => {
                  console.log("hey some error reappeared !!!");
                  //this.router.navigate(['/api-dashboard']);
                });
    }
}
