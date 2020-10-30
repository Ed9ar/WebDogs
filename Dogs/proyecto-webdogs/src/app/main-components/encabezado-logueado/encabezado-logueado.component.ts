import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado-logueado',
  templateUrl: './encabezado-logueado.component.html',
  styleUrls: ['./encabezado-logueado.component.scss']
})
export class EncabezadoLogueadoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public isNavbarCollapsed = false;

}
