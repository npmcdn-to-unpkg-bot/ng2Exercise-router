import { Component, OnInit } from 'angular2/core';
import { NgForm } from 'angular2/common';
import { Router } from 'angular2/router';

import { Game } from './game';

import { GameService } from './game.service';

@Component({
  selector: 'game-form',
  templateUrl: 'app/game-form.component.html',
  styleUrls: ['app/game-form.component.css'],
  providers: [GameService]
})

export class GameFormComponent {
  constructor(
    private _router: Router,
    private _gameService: GameService
  ) {}

  active = true;
  submitted = false;
  id = this._gameService.getAmount() + 1;
  types = ['Unknown', 'Action', 'Adventure', 'Role-playing', 'Strategy', 'Sports'];
  game = new Game(this.id, '', '', 'Unknown', '');

  onSubmit() {
    this._gameService.addGame(this.game);
    this.game = new Game(this.id+1, '', '', 'Unknown', '');
    this.active = false;
    setTimeout(()=> this.active=true, 0);
    this.submitted = true;
  }
}