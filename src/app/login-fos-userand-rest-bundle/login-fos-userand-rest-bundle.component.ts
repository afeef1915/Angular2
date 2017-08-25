import { Component, OnInit } from '@angular/core';
import {UserRegistrationService} from '../user-registration.service';
import { Router } from '@angular/router';

import {FormControl, Validators} from '@angular/forms';
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
                this.router.navigate(['/api-dashboard']);
                },
                error => {
                  this.router.navigate(['/api-dashboard']);
                });
    }
}
