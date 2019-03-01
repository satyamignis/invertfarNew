import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css']
})
export class MyPropertiesComponent implements OnInit {
  preloadimg:any;
  totalCount = 0;
  pagination = [];
  pageNo = 1;
  limit = 10;
  constructor() { }

  ngOnInit() {
   window.scrollTo(0, 0);
       this.preloadimg=true;
       setTimeout(() => {  
           this.preloadimg=false;
       }, 1000);
}

pageChange($event){
  
}
}
