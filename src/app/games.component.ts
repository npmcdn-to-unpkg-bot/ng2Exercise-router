import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { Game } from './game';
import { GameFormComponent } from './game-form.component';
import { GameService } from './game.service';

@Component({
  selector: 'games',
  templateUrl: 'app/games.component.html',
  styleUrls:  ['app/games.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})

export class GamesComponent implements OnInit {
  games: Game[];
  selectedGame: Game;

  constructor(
    private _gameService: GameService
  ) {}

  getGames() {
    this._gameService.getGames().then(games => this.games = games);
  }

  ngOnInit() {
    this.getGames();
  }

  onSelect(game: Game) { this.selectedGame = game; }

  addGame() {
    let id = this.games.length;
    console.log(id);
  }
}