import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HomeComponent } from './home.component';
import { GamesComponent } from './games.component';
import { GameFormComponent } from './game-form.component';

import { GameService } from './game.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Home']">Home</a>
      <a [routerLink]="['Games']">All games</a>
      <a [routerLink]="['GameForm']" class="float-to-right">Add game</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, GameService]
})

@RouteConfig([
  {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/games',
    name: 'Games',
    component: GamesComponent
  },
  {
    path: '/games/add',
    name: 'GameForm',
    component: GameFormComponent
  }
])

export class AppComponent {
  title = 'Game Manager';
}