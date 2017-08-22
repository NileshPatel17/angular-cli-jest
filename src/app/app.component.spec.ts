import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    let component: AppComponent;
    let dom: any;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        });
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        dom = fixture.nativeElement;
        })
    );

    test('should create the app', async(() => {
        expect(component).toBeTruthy();
        })
    );

    it(`should have as title 'app'`, async(() => {
        expect(component.title).toEqual('app');
        })
    );

    it('should render title in a h1 tag', async(() => {
        fixture.detectChanges();
        expect(dom.querySelector('h1').textContent).toContain('Welcome to app!');
        })
    );
});
