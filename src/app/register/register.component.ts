import { Component, OnInit } from '@angular/core';
import { AlertService } from '../alert.service';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import {MatInputModule} from '@angular/material';

@Component({
  selector: 'app-register',
   moduleId: module.id,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 model: any = {};
    loading = false;
  constructor(private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

  ngOnInit() {
  }
  register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', true);
                    this.router.navigate(['/login']);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
