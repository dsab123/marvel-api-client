import {bindable} from 'aurelia-framework';

export class App {
  @bindable userName;

  constructor() {
    this.heroesList = [];
  }
}
