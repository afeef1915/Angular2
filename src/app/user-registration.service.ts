import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { UserDetails } from './userdetails';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class UserRegistrationService {

  constructor(private http: Http) { }
    
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
  private insertdataUrl = 'http://localhost/mtl_project/web/app_dev.php/register-user';
   
  /* create new user */
    create(name: string): Promise<UserDetails> {

        return this.http
        .post(this.insertdataUrl, JSON.stringify({name: name}), {headers: this.headers})
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
