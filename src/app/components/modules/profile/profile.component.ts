import { Component, OnInit ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private renderer2: Renderer2 ) { }

  ngOnInit() {
  }
mouseenter (event) {
     this.renderer2.addClass(event.target, 'mat-elevation-z5')
  }
  
  mouseleave (event) {
    this.renderer2.removeClass(event.target, 'mat-elevation-z5')
  }
}
