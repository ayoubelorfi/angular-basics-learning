import { Component } from '@angular/core';

import { Hero } from '../heroform';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  constructor(private heroService: HeroService) { }

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  onSubmit() { 
    this.submitted = true; 
    this.heroService.showmessage('My hero number '+ this.model.id+ ' is called ' + this.model.name+ ' his alter ego '+this.model.alterEgo+'hhs power is '+this.model.power);
  }

  newHero() {
    this.model = new Hero(Math.floor(Math.random() * 100), '',
    '',
    '');
    
  }
}