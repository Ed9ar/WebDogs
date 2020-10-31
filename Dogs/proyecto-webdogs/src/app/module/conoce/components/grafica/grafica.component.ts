import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['Primer Trimestre', 'Segundo Trimestre', 'Tercer Trimestre' , 'Cuarto Trimestre']
  public barChartType = 'bar';
  public barChartLegend = true;

  public chartColors: any[] = [
    { 
      backgroundColor:["#FF7360", "#6FC8CE", "#FF7360", "#6FC8CE"] 
  }];
  
  public barChartData = [
    {data : [30, 89, 25, 70], label: 'Perros Adpotados'}
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
