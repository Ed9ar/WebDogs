import { Component, OnInit } from '@angular/core';
import { GeneralService } from './../../../../services/general.service';


@Component({
  selector: 'app-login-formulario',
  templateUrl: './login-formulario.component.html',
  styleUrls: ['./login-formulario.component.scss']
})
export class LoginFormularioComponent implements OnInit {

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
  }

  logear() {
    this.generalService.cambioEstatusUsuario(true);
  }

}
