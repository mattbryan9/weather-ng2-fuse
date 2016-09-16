import { Component, Input } from '@angular/core';

@Component({
  selector: 'rain-component',
  template: require('./rain.component.ngux')
})
export class RainComponent {
  @Input() rainColor: String;
  constructor() { }
}