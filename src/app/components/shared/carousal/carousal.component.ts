import { ProjectModel, ProjectSlidesModel } from './../models/projects.model';
import { Component, OnInit, Input } from '@angular/core';
import { ProjDescDialogComponent } from './../../shared/proj-desc-dialog/proj-desc-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {
 @Input() slides :ProjectSlidesModel[];
 mobileSlides:ProjectModel[]=[];
 
 
  constructor(public dialog: MatDialog) { }
   openDialog(projectModel:ProjectModel): void {
    let dialogRef = this.dialog.open(ProjDescDialogComponent, {
      width: '523px;',
      data: {
    dataKey: projectModel
  }
    });

  }

  ngOnInit() {
    this.slides.forEach(slide => {
      slide.projectslide.forEach(project=>{
         this.mobileSlides.push(project);
      })
  });
  }
}
