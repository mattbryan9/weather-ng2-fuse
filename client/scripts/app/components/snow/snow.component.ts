import { Component, Input } from '@angular/core';

@Component({
  selector: 'snow-component',
  template: require('./snow.component.ngux')
})
export class SnowComponent {
  @Input() snowColor: String;
  constructor() { }
}