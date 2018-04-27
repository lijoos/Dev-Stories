import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent implements OnInit {
  @ViewChild('canvas') myCanvas: ElementRef;
  public doughnutChartLabels: string[] = ['Angular4', 'Javascript', 'DotNet','Sql Server','css','Html','Node JS'];
  public doughnutChartData: number[] = [300,150,350,100,20,20,80];
  public doughnutChartType: string = 'doughnut';
 
public static defaultColors:Array<number[]> = [
  [255, 99, 132],
     [255, 99, 132],
    [255, 99, 132],
     [255, 99, 132],
     [255, 99, 132],
     [255, 99, 132],
    [255, 99, 132],
     [255, 99, 132],
      [255, 99, 132],
     [255, 99, 132],
    [255, 99, 132],
     [255, 99, 132],
      [255, 99, 132],
     [255, 99, 132],
    [255, 99, 132],
     [255, 99, 132],
  ];
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  constructor() { }

  ngOnInit() {
   console.log(this.myCanvas);
  }

}
