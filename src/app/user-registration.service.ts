import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UserDetails } from './userdetails';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class UserRegistrationService {

  constructor(private http: Http) { }
    
  private headers_crosrequest = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
     private headers=new Headers({ 'Content-Type': 'application/json' });
  private insertdataUrl = 'http://localhost/mtl_project/web/app_dev.php/api/v1/register-user';
   private loginUrl     = 'http://localhost/mtl_project/web/app_dev.php/api/login_check';
   
  /* create new user */
    create(name: string): Promise<UserDetails> {

        return this.http
        .post(this.insertdataUrl, JSON.stringify(name) , {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as UserDetails)
        .catch(this.handleError);
    }

    login(name: string): Promise<UserDetails> {

        return this.http
        .post(this.loginUrl, JSON.stringify(name), {headers: this.headers_crosrequest})
        .toPromise()
        .then(res => res.json().data as UserDetails)
        .catch(this.handleError);
    }
    /* handle error */
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
