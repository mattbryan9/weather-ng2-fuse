import { TestBed } from '@angular/core/testing';
import { RainComponent } from './rain.component';

describe('Module: app', () => {
    describe('Component: RainComponent', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [RainComponent],
                providers: [],
                imports: []
            });
        });

        it('should be defined', () => {
            const fixture = TestBed.createComponent(RainComponent);
            fixture.detectChanges();
            let element = fixture.debugElement.nativeElement;
            let cmpInstance = fixture.debugElement.componentInstance;
            expect(cmpInstance).toBeDefined();
            expect(element).toBeDefined();
        });

    });
});