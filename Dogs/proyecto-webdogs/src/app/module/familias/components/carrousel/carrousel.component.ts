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
      img: '../../../../../assets/img/guadalajara.jpg'
    },
    {
      name: 'Ciudad de Mexico',
      img: '../../../../../assets/img/cdmx.jpg'
    },
    {
      name: 'Oaxaca',
      img: '../../../../../assets/img/oaxaca.jpg'
    },
    {
      name: 'San Miguel de Allende',
      img: '../../../../../assets/img/sanmiguel.jpg'
    }
  ];

  constructor(private _config:NgbCarouselConfig) {
	_config.interval = 3000;
	_config.pauseOnHover = true;
  }

  ngOnInit(): void {
  }

}
