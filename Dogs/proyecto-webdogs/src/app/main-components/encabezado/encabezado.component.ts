import { Component, OnInit } from '@angular/core';
import { GeneralService } from './../../services/general.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  //styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
  }
  public isNavbarCollapsed = false;

  
}
