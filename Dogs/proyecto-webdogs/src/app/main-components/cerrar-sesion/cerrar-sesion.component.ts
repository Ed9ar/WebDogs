import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { GeneralService } from './../../services/general.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.component.html',
  styleUrls: ['./cerrar-sesion.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CerrarSesionComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal,private generalService: GeneralService) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content);
  }

  logout() {
    this.generalService.cambioEstatusUsuario(false);
  }

}
