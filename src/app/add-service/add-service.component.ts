import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';


@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  preloadimg:any;
  address:any;
  apiLoading:any;
  constructor() { }

  ngOnInit() {
  	window.scrollTo(0, 0);
  	 this.preloadimg=true;
     setTimeout(() => {  
         this.preloadimg=false;
     }, 1000);
  }


  handleAddressChange(address: any) {
    // console.log('----------address', address);
    // this.address.address = address.formatted_address;
    // this.address.latitude = address.geometry.location.lat();
    // this.address.longitude = address.geometry.location.lng();
  }

  

}
