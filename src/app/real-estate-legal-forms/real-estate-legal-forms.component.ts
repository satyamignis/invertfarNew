import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-real-estate-legal-forms',
  templateUrl: './real-estate-legal-forms.component.html',
  styleUrls: ['./real-estate-legal-forms.component.css']
})
export class RealEstateLegalFormsComponent implements OnInit {
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
