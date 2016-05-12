import { Injectable } from 'angular2/core';

import { Game } from './game';
import { GAMES } from './games';

@Injectable()
export class GameService {
 _GAMES: Game[] = GAMES;

  getGames() {
    return Promise.resolve(this._GAMES);
  }

  addGame(game: Game) {
    this._GAMES.push(game);
  }

  getAmount() {
    return this._GAMES.length;
  }
}