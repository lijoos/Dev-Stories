import { EducationService } from './education.service';
import { EducationModel } from './education.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
 educations:EducationModel[];
  constructor(public educationService:EducationService) { }

  ngOnInit() {
      this.educations =this.educationService.getEducations();
    }

}
