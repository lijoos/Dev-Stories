import { ExperianceService } from './experiance.service';
import { ExperianceModel } from './experiance.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiance',
  templateUrl: './experiance.component.html',
  styleUrls: ['./experiance.component.css']
})
export class ExperianceComponent implements OnInit {
  experinces:ExperianceModel[];
  constructor(public experianceService:ExperianceService) { }

  ngOnInit() {
   this.experinces= this.experianceService.getAllExperiances();
  }

}
