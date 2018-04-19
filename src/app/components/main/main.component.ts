import { ProjDescDialogComponent } from './../shared/proj-desc-dialog/proj-desc-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  animal: string;
  name: string;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
openDialog(): void {
    let dialogRef = this.dialog.open(ProjDescDialogComponent  , {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}
