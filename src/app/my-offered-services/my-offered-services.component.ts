import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-offered-services',
  templateUrl: './my-offered-services.component.html',
  styleUrls: ['./my-offered-services.component.css']
})
export class MyOfferedServicesComponent implements OnInit {
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
