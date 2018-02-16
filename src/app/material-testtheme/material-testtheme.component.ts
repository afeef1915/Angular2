import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {UserRegistrationService} from '../user-registration.service';
//import { Router } from '@angular/router';
import { Router, ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { AlertService } from  '../alert.service';
@Component({
  selector: 'app-material-testtheme',
  moduleId: module.id,
  templateUrl: './material-testtheme.component.html',
  styleUrls: ['./material-testtheme.component.css']
})
export class MaterialTestthemeComponent implements OnInit {
  
  email = new FormControl('', [Validators.required, Validators.email]);
  model: any = {};
   loading = false;
   message: any;
    returnUrl: string;
  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }
  constructor(private router: Router,
        private userregistrationService: UserRegistrationService,private alertService: AlertService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.alertService.getMessage().subscribe(message => { this.message = message; });
     this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/login';
  }
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
