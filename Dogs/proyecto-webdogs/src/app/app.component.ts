import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from './route-transition-animations';
import { GeneralService } from './services/general.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fader]
})
export class AppComponent {
  title = 'proyecto-webdogs';
  loggedIn = false;

  constructor(private generalService: GeneralService) { 
    generalService.claseUsuarioLogueado$.subscribe(
      loggedIn=>{
        this.loggedIn = loggedIn
        console.log(`El estatus cambió a ${loggedIn}`)
      }
    )
  }

  prepareRoute(outlet: RouterOutlet): boolean {
    return outlet && 
    outlet.activatedRouteData && 
    outlet.activatedRouteData['animationState'];
	}
}
