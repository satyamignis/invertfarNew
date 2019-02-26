import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-contractor-registration',
  templateUrl: './contractor-registration.component.html',
  styleUrls: ['./contractor-registration.component.css']
})
export class ContractorRegistrationComponent implements OnInit {
  preloadimg:any;

  constructor() { }

  ngOnInit() {
  		window.scrollTo(0, 0);
  		$(".toggle-open").slideToggle(0);
	    $(".toggle-click").click(function(){
	        $(".toggle-open").slideToggle(1000);
	    });
     this.preloadimg=true;
     setTimeout(() => {  
         this.preloadimg=false;
     }, 1000);
  }

}
