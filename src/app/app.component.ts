import { Component, OnInit } from '@angular/core';

/*import { HeroDetailComponent } from './hero-detail/hero-detail.component';*/
import { Hero } from './hero';
import {HeroService} from './hero.service';
// import {Http, Response} from '@angular/http';
/*const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];
*/
@Component({
  selector: 'app-root',
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  
 
  
    title = 'Tour of Heroes';
  //  heroes=HEROES;
  //   heroes: Hero[];
  //   selectedHero: Hero;
  //   constructor(private heroService: HeroService) { }
    
  //     getHeroes():void{
  //     this.heroService.getHeroes().then(heroes => this.heroes= heroes);
  //     }
  //   /*hero: Hero = {
  //   id: 1,
  //   name: 'Mohd Afeef'
  // };*/
  // ngOnInit(): void {
  //   this.getHeroes();
  // }
  //  onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }

}

