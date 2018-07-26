import { TechnicalModel } from './technical.model';
import { TechnicalService } from './technical.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent implements OnInit {
  @ViewChild('canvas') myCanvas: ElementRef;
  public doughnutChartLabels: string[];
  public doughnutChartData: number[] ;
  public doughnutChartType: string = 'doughnut';
  techSkills:TechnicalModel;
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  constructor(private technicalService:TechnicalService) { }

  ngOnInit() {
    this.techSkills=this.technicalService.getTechnicalSkills();
    this.doughnutChartLabels=this.techSkills.technologies;
    this.doughnutChartData=this.techSkills.techskillRates;
  }

}
