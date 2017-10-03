import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Component({
  selector: 'app-dashboard',
  moduleId: module.id,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
heroes: Hero[] = [];


  constructor(private heroService: HeroService,public http: Http) { 
    
  }
  // constructor(public http: Http) { 
  //  // this.data();
  // }
  ngOnInit() {
    //this.data();
      this.heroService.getHeroes()
       .then(heroes => this.heroes = heroes.slice(1, 5));
  }
  
  
  // data() {
  //   this.http.get('http://localhost/mtl_project/web/app_dev.php/db-show')
  //    .map((res: Response) => res.json())
  //    .subscribe((res: any) => {
  //      this.persons = res;
  //    });
  // }
  //  public getAllTodos(): Observable<Hero[]> {
  //   return this.http
  //     .get('http://localhost/mtl_project/web/app_dev.php/db-show')
  //     .map(response => {
  //       const todos = response.json();
  //       return todos.map((todo) => new Hero(todo));
  //     })
  //     .catch(this.handleError);
  // }
}
