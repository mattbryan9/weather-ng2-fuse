import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'snow-component',
    template: require('./snow.component.ngux'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SnowComponent {
	@Input() snowColor: String;
    constructor() {
    }
}