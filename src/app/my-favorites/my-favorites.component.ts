import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-favorites',
  templateUrl: './my-favorites.component.html',
  styleUrls: ['./my-favorites.component.css']
})
export class MyFavoritesComponent implements OnInit {
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
