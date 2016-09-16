import { Component, Input } from '@angular/core';

@Component({
	selector: 'time-component',
	template: require('./time.component.ngux')
})
export class TimeComponent {
	@Input() tab: {};
}