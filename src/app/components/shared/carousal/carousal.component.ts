import { Component, OnInit } from '@angular/core';
import { ProjDescDialogComponent } from './../../shared/proj-desc-dialog/proj-desc-dialog.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.css']
})
export class CarousalComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
   openDialog(): void {
    let dialogRef = this.dialog.open(ProjDescDialogComponent, {
      width: '523px;',
    });

  }

  ngOnInit() {
  }

}
