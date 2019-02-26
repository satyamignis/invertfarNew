import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-companies-registration',
  templateUrl: './companies-registration.component.html',
  styleUrls: ['./companies-registration.component.css']
})
export class CompaniesRegistrationComponent implements OnInit {
  preloadimg:any;
  constructor() { }

  ngOnInit() {
  		window.scrollTo(0, 0);
  		/*$(".toggle-open").slideToggle(0);
	    $(".toggle-click").click(function(){
	        $(".toggle-open").slideToggle(1000);
	    });*/

        this.preloadimg=true;
        setTimeout(() => {  
           this.preloadimg=false;
        }, 1000);
  }

}
