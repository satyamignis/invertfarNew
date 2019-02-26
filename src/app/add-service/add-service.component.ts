import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
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
