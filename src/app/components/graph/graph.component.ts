import {OnChanges, Component, ElementRef, Input, OnInit } from '@angular/core';

declare var google: any;
declare var isGoogleChartLoaded: boolean;
declare var chartPackages: string[];

@Component({
  selector: 'bd-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit, OnChanges {

  public _element: any;

  @Input() type: string;
  @Input() data: Object;
  @Input() options: Object;
  @Input() drawMaterial: boolean = false;


  constructor(private element: ElementRef) {
    this._element = element.nativeElement;
  }

  ngOnChanges() {
    if(!this.checkloaded()){
      google.charts.load('current', {'packages':chartPackages});
    }
    setTimeout(() => {
      this.drawChart(this.options, this.type, this.data, this._element)
    },250);
  }

  checkloaded(): boolean {
    return !((typeof google === 'undefined') || (typeof google.visualization === 'undefined'));
  }

  drawChart(options, chartType, dataTable, element){
    google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var wrapper = new google.visualization.ChartWrapper({
             chartType: chartType,
             dataTable:dataTable ,
             options:options||{}
            });
	        wrapper.draw(element);

    }
  }

  ngOnInit() {
  }

}
