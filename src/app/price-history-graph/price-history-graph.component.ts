import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-price-history-graph',
  templateUrl: './price-history-graph.component.html',
  styleUrls: ['./price-history-graph.component.scss'],
})
export class PriceHistoryGraphComponent implements OnInit, AfterViewInit {
  @ViewChild('lineGraph', { static: false }) private lineGraph;
  graph: any;

  labels: any[];
  dataset: any[];
  loading: boolean;

  constructor() {
    // tslint:disable-next-line: max-line-length
    this.labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.loading = false;
  }

  ngOnInit() { }

  loadGraph() {
    this.dataset = [{
      x: 1,
      y: 10
    }, {
      x: 2,
      y: 20
    },{
      x: 1,
      y: 15
    },{
      x: 3,
      y: 27
    }];
    this.graph = new Chart(this.lineGraph.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.dataset,
            borderColor: 'purple',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    });
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.loading = true;
      if (this.loading === true) {
        this.loadGraph();
      }
    }, 10);
  }

}
