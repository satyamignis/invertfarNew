import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router, NavigationEnd } from '@angular/router';
import { MyCookieService } from '../services/my-cookie-service';
import { RoutingStateService } from '../services/routing-state.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  previousRoute : any;
  fileName: string;
  filePreview: string;
  preloadimg:any;
  loginSuccess:any;
  loginData:any= {email:'',password:'',deviceType: 'Web', serviceKey: 'U2kaw394fckxegsmretk', fcmToken: 'c81e728d9d4c2f636f067f89cc14862c'};
  signupData:any={};
  apiLoading:any;
  registerForm:any;
  submitted:any;

  constructor(
    private api:ApiService,
    private myCookieService : MyCookieService,
    private router : Router,
    private routingStateService : RoutingStateService,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
     //this.previousRoute = this.routingStateService.getPreviousUrl();
	   window.scrollTo(0, 0);
     this.preloadimg=true;
     setTimeout(() => {  
         this.preloadimg=false;
     }, 1000);
     /*Register validation init*/
     this.registerFormInt();
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  registerFormInt(){
  this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]]
        });
  }

  onFileChanged(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        reader.result.split(',')[1];
        this.fileName = file.name + " " + file.type;
        this.filePreview = 'data:image/png' + ';base64,' + reader.result.split(',')[1];
        console.log(this.filePreview);
      };
    }
  }

  doLogin(){
        this.apiLoading=true;
        this.api.postData('login',this.loginData)
        .subscribe(
        (response : any) => {
          if(response.errorCode == '0' || response.errorCode == '3'){
           //console.log(response.data[0]);
           this.setCookieAndNavigate(response.data[0]);
            this.toastr.success(response.errorMsg);
          } else {
            this.toastr.error(response.errorMsg);
            //this.myToasterService.alert(response.errorCode, 'Error', response.errorMsg);
          }
          this.apiLoading=false;
        },
        (error: any) => {
          console.log(error);
          this.apiLoading=false;
        }
      )
}

 setCookieAndNavigate(user){
    this.myCookieService.setCookie('user', user);
    this.router.navigate(['/']);
 }


    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }

  
}
