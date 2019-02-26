import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MyCookieService } from '../services/my-cookie-service';
import { RoutingStateService } from '../services/routing-state.service';
import { Router } from '@angular/router';



declare const $: any;
declare const AmCharts: any;

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	customOptions: any = {
	    loop: true,
	    mouseDrag: false,
	    touchDrag: false,
	    pullDrag: false,
	    dots: true,
	    autoplay:true,
	    navSpeed: 1500,
	    animateIn: 'slideOutDown',
	    items:1,
	    nav: false
	}

	showAdvBtn:any=true;
	preloadimg:any;
	constructor(
		private api:ApiService,
		private myCookieService : MyCookieService,
		private routingStateService : RoutingStateService,
		private router : Router
		) { }

	ngOnInit() {
	  		  window.scrollTo(0, 0);
			  /*%%%%%%%%%%%%% Map %%%%%%%%%%%%%%*/
			  var map = AmCharts.makeChart( "chartdiv", {
			  "type": "map",
			  "theme": "light",
			  "projection": "miller",

			  "dataProvider": {
			    "map": "worldLow",
			    "getAreasFromMap": true
			  },
			  "areasSettings": {
			    "autoZoom": false,
			    "selectedColor": "#CC0000"
			  },
			  "smallMap": {},
			  "listeners": [{
			    "event": "init",
			    "method": function(e) {
			      
			      var map = e.chart;
			      
			       /**
			       * Log initial zoom settings
			       */
			      map.initialZoom = {
			        "zoomLevel": e.chart.zoomLevel(),
			        "zoomLongitude": e.chart.zoomLongitude(),
			        "zoomLatitude": e.chart.zoomLatitude()
			      };
			    }
			  }],
			  "export": {
			    "enabled": true,
			    "position": "bottom-right",
			    "beforeCapture": function() {
			      var map = this.setup.chart;
			      /**
			       * Log current zoom settings so we can restore after export
			       */
			      map.currentZoom = {
			        "zoomLevel": map.zoomLevel(),
			        "zoomLongitude": map.zoomLongitude(),
			        "zoomLatitude": map.zoomLatitude()
			      };
			      
			      /**
			       * Zoom to initial position
			       */
			      map.zoomToLongLat(
			        map.initialZoom.zoomLevel,
			        map.initialZoom.zoomLongitude,
			        map.initialZoom.zoomLatitude,
			        true
			      );
			    },
			    "afterCapture": function() {
			      var map = this.setup.chart;
			      setTimeout(function() {
			        /**
			         * Restore current zoom
			         */
			        map.zoomToLongLat(
			          map.currentZoom.zoomLevel,
			          map.currentZoom.zoomLongitude,
			          map.currentZoom.zoomLatitude,
			          true
			        );
			      }, 10);
			    }
			  }
			});

	    this.preloadimg=true;
        setTimeout(() => {  
           this.preloadimg=false;
        }, 1000);
			   
	}

	openAdvanceOpt(){
		$('#target').show('slow');
		this.showAdvBtn = false;
	}

	hideAdvanceOpt(){
		$('#target').hide('slow');
		this.showAdvBtn = true;
	}

	// login(){
	// 	this.api.postData('login',{email : 'test3@gmail.com', password: '123456789', deviceType: 'Web', serviceKey: 'U2kaw394fckxegsmretk', fcmToken: 'c81e728d9d4c2f636f067f89cc14862c'}).subscribe((data: {}) => {
	//       	console.log(data);
	//    	});
	// }

	// register(){
	// 		this.api.postData('registering',{email: 'alf1i@gmail.com',password:'123456789',deviceType:'Android',serviceKey:'U2kaw394fckxegsmretk'registrationType:'2',phoneNo:'878979798798',address:'indore',latitude:'11.1',longitude:'25.8',fcmToken:'34534534534534534535'}).subscribe((data: {}) => {
	//    		console.log(data);
	//    	});
	// }

}
