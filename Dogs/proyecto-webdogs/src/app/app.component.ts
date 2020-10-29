import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-transition-animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent {
  title = 'proyecto-webdogs';
  prepareRoute(outlet: RouterOutlet): boolean {
    return outlet && 
    outlet.activatedRouteData && 
    outlet.activatedRouteData['animationState'];
	}
}
