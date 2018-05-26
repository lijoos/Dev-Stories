import { ProjectModel } from './../models/projects.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: 'app-dev-stories-popup',
  templateUrl: './proj-desc-dialog.component.html',
  styleUrls: ['./proj-desc-dialog.component.css']
})
export class ProjDescDialogComponent implements OnInit {
  project:ProjectModel;
  ngOnInit(): void {
  console.log(this.data.dataKey);
  this.project=this.data.dataKey;
  }

   constructor(
    public dialogRef: MatDialogRef<ProjDescDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
