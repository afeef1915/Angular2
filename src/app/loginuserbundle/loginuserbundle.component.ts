import { Component, OnInit } from '@angular/core';
import {UserRegistrationService} from '../user-registration.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginuserbundle',
  moduleId: module.id,
  templateUrl: './loginuserbundle.component.html',
  styleUrls: ['./loginuserbundle.component.css']
})
export class LoginuserbundleComponent implements OnInit {

    model: any = {};
  constructor(private router: Router,
        private userregistrationService: UserRegistrationService) { }

  ngOnInit() {
  }

  LoginUser() {
         this.userregistrationService.login(this.model)
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
