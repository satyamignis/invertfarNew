import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css']
})
export class MyPropertiesComponent implements OnInit {
  preloadimg:any;
  constructor() { }

  ngOnInit() {
   window.scrollTo(0, 0);
       this.preloadimg=true;
       setTimeout(() => {  
           this.preloadimg=false;
       }, 1000);
}
}
