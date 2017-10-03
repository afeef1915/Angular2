import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { ApiDashboard } from './api-dashboard';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ApiDashboardDataService {

  constructor(private http: Http) { }
  private headers = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
 // private heroesUrl = 'api/heroes';  // URL to web api
  private heroesUrl = 'http://localhost/mtl_project/web/app_dev.php/db-show';  // URL to web api

  getApiData(): Promise<ApiDashboard[]> {
   return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json() as ApiDashboard[])
               .catch(this.handleError);
}
//edit by id
  getResultsById(id: string): Promise<ApiDashboard> {
    const url = `${this.heroesUrl}/${id}`;
    console.log("api dashboard service ");
    console.log(url);

    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as ApiDashboard)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
