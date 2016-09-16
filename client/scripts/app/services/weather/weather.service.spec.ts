import { inject, TestBed } from '@angular/core/testing';
import { Weather } from './weather.service';

describe('Module: app', () => {
    describe('Service: Weather', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [Weather]
            });
        });

        it('should be defined', inject([Weather], (service: Weather) => {
            expect(service).toBeDefined();
        }));

    });
});