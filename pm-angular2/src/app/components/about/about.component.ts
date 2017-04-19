import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  about_display: string;

  constructor() {

    this.about_display = "ABOUT THE SITE";

   }

  ngOnInit() {

    console.log("About component initiated");
  }

}
