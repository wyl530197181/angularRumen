import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: []
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
