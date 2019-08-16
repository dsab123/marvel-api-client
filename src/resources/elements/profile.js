import {bindable} from 'aurelia-framework';

export class Profile {
  @bindable userName = 'spider-man'; // this initial value should be config'd
  @bindable hero;
}
