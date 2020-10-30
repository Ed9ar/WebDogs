import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit {

  ciudades:any[] = [
    {
      name: 'Guadalajara',
      img: '../../../../../assets/img/guadalajara.jpg',
      desc: 'Contamos con 16 familias y mas de 70 estrellas de recomendacion'
    },
    {
      name: 'Ciudad de Mexico',
      img: '../../../../../assets/img/cdmx.jpg',
      desc: 'Contamos con 16 familias y mas de 70 estrellas de recomendacion'
    },
    {
      name: 'Oaxaca',
      img: '../../../../../assets/img/oaxaca.jpg',
      desc: 'Contamos con 16 familias y mas de 70 estrellas de recomendacion'
    },
    {
      name: 'San Miguel de Allende',
      img: '../../../../../assets/img/sanmiguel.jpg',
      desc: 'Contamos con 16 familias y mas de 70 estrellas de recomendacion'
    }
  ];

  constructor(private _config:NgbCarouselConfig) {
	_config.interval = 3000;
	_config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
