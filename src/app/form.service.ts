import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { URLSearchParams } from '@angular/http';
import { ApiDashboard } from './api-dashboard';
import { Router, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FormService {
private subject = new Subject<any>();
  private keepAfterNavigationChange = false;
  constructor(public router: Router,public http: Http) {
    // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });

        
   }

 // constructor(private http: Http) { }
  
   private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
   private insertdataUrl = 'http://localhost/mtl_project/web/app_dev.php/db-insert';
   private updatedataUrl = 'http://localhost/mtl_project/web/app_dev.php/db-update';
   private deletedataUrl = 'http://localhost/mtl_project/web/app_dev.php/db-delete';

// create(user: ApiDashboard) {
//   return this.http.post(this.insertdataUrl,user).map(response => response.json());
//         //return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
//     }
create(name: string): Promise<ApiDashboard> {
  
    return this.http
      .post(this.insertdataUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as ApiDashboard)
      .catch(this.handleError);
  }
   update(name: string,price:number,id:string): Promise<ApiDashboard> {
    //const url = `${this.updatedataUrl}/${name.id}`;
     const url = `${this.updatedataUrl}/${id}`;
    // return this.http
    //   .put(url, JSON.stringify(name), {headers: this.headers})
    //   .toPromise()
    //   .then(() => name)
    //   .catch(this.handleError);
   
    console.log(name);
     return this.http
      .post(url, JSON.stringify({name: name,price:price}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as ApiDashboard)
      .catch(this.handleError);
  }
   delete(id: string): Promise<void> {
   // const url = `${this.heroesUrl}/${id}`;
    const url = `${this.deletedataUrl}/${id}`;
    console.log(url);
    // return this.http.delete(url, {headers: this.headers})
    //   .toPromise()
    //   .then(() => null)
    //   .catch(this.handleError);
    return this.http
      .post(url, JSON.stringify({id:id}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as ApiDashboard)
      .catch(this.handleError);
  
       //router.navigate(['/api-dashboard']);
  }

  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
   success(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    }
    //error while login
    error(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    }
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
