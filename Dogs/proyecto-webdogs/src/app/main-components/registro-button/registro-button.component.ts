import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-registro-button',
  templateUrl: './registro-button.component.html',
  styleUrls: ['./registro-button.component.scss']
})
export class RegistroButtonComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }
  registro():void{
    this.auth.loginWithRedirect({screen_hist: 'signup' });
  }
}
