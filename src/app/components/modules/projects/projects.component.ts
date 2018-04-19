import { ProjDescDialogComponent } from './../../shared/proj-desc-dialog/proj-desc-dialog.component';
import { MatDialog } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    let dialogRef = this.dialog.open(ProjDescDialogComponent, {
      width: '523px;',
    });

  }
}
