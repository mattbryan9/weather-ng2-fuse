import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Weather } from '../../services/weather/weather.service.ts';
@Component({
    selector: 'main',
    template: require('./main.component.ngux'),
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent {
    tabs: Array < any > ;

    constructor(private weatherService: Weather, private cd: ChangeDetectorRef) {
        this.weatherService.getWeather().subscribe(days => {
            this.tabs = days;
            console.dir(this.tabs);
            this.cd.markForCheck();
        });
    }
}