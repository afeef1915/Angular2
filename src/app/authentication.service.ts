import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
//import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

    private loginUrl     = 'http://localhost/mtl_project/web/app_dev.php/api/login_check';
    private headers_crosrequest = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
  constructor(private http: Http) {}
     //login 
   login(username: string, password: string) {
       
        return this.http.post(this.loginUrl, JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user.token));
                    
                       let headers = new Headers({ 'Authorization': 'Bearer ' + user.token });
                        return new RequestOptions({ headers: headers });
                }
            });
   }
   //logout service
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
