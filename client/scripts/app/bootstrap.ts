/// <reference path="../../../node_modules/zone.js/dist/zone.js.d.ts" />
import { FuseModule, platformFuseDynamic } from '../../../fuse/platform.ts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MainComponent } from './components/main/main.component';
import { RainComponent } from './components/rain/rain.component';
import { SnowComponent } from './components/snow/snow.component';
import { TimeComponent } from './components/time/time.component';

import { Weather } from './services/weather/weather.service.ts';

@NgModule({
    imports: [
        FuseModule, CommonModule, FormsModule, ReactiveFormsModule, HttpModule
    ],
    declarations: [MainComponent, RainComponent, SnowComponent, TimeComponent, Weather],
    bootstrap: [MainComponent]
})
class MainModule { }

if (!window.fusejs) {
    document.addEventListener('DOMContentLoaded', () => {
        if (!(<any>window).bootstraped) {
            (<any>window).bootstraped = true;
            platformFuseDynamic().bootstrapModule(MainModule);
        }
    }, false);
} else {
    window.fusejs.bootstraper = () => platformFuseDynamic().bootstrapModule(MainModule);
}
