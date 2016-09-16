import { TestBed } from '@angular/core/testing';
import { SnowComponent } from './snow.component';

describe('Module: app', () => {
    describe('Component: SnowComponent', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [SnowComponent],
                providers: [],
                imports: []
            });
        });

        it('should be defined', () => {
            const fixture = TestBed.createComponent(SnowComponent);
            fixture.detectChanges();
            let element = fixture.debugElement.nativeElement;
            let cmpInstance = fixture.debugElement.componentInstance;
            expect(cmpInstance).toBeDefined();
            expect(element).toBeDefined();
        });

    });
});