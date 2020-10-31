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

  public barChartLabels = ['1/4', '2/4', '3/4' , '4/4']
  public barChartType = 'bar';
  public barChartLegend = true;

  public chartColors: any[] = [
    {
      backgroundColor:["#FF7360", "#6FC8CE", "#FF7360", "#6FC8CE"]
  }];

  public barChartData = [
    {data : [30, 89, 25, 70], label: ''}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
