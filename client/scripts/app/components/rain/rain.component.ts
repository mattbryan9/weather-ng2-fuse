import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'rain-component',
    template: require('./rain.component.ngux'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RainComponent {
	@Input() rainColor: String;
    constructor() {
    }
}