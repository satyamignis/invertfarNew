import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-purchase-history',
  templateUrl: './my-purchase-history.component.html',
  styleUrls: ['./my-purchase-history.component.css']
})
export class MyPurchaseHistoryComponent implements OnInit {
  preloadimg:any;
  constructor() { }

  ngOnInit() {
  this.preloadimg=true;
        setTimeout(() => {  
           this.preloadimg=false;
        }, 1000);
  }

}
