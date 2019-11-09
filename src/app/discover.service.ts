import { Injectable } from '@angular/core';
import players from '../../6cret_config.json';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  currentToken : String;

  constructor() {}

  setToken(token : String) {
    this.currentToken = token;
  }

  getToGift() {
    var togift = players.find(
      elem => elem.id === this.currentToken
    );
    this.currentToken = "";
    return togift;
  }
}
