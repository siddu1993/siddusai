import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { MenuController, NavParams, NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // loginForm = {
  //   user_id: "",
  //   password: "",
  //   customer_id: null,
  //   store_id: ""
  // };
  public validations_patient: FormGroup;
  public validations_docter: FormGroup;
  public validations_lab: FormGroup;


  shift: string;
  userData: any;
  sel: any;
  pass: number;
  use: number;
  constructor(public nav:NavController,public route:Router,public auth:AuthService,public formBuilder: FormBuilder,public menu: MenuController) { 
    this.menu.enable(false);
    this.sel=1;
    this.validations_patient  =  this.formBuilder.group({
      phone_no: ['', Validators.required],
     password: ['', Validators.required]
     
  });
  this.validations_docter  =  this.formBuilder.group({
  
    docter_phone: ['', Validators.required],
    password: ['', Validators.required]

  
});
this.validations_lab  =  this.formBuilder.group({
 
  lab_phone: ['', Validators.required],
  password: ['', Validators.required]

});
   // store_id: ['', Validators.compose([Validators.required])]




  }
  ngOnInit() {
    console.log(22,localStorage.getItem("token"))
  
    // if(localStorage.getItem("token")!=null){
    //   this.route.navigateByUrl('/home');
    // }
  
  }
  validation_messages = {
    'phone_no': [
      { type: 'required', message: 'phone_no is required.' },
      { type: 'minlength', message: 'phone_no must be at least 8 characters long.' },
      { type: 'maxlength', message: 'phone_no cannot be more than 12 numbers.' },
    ],
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password must be at least 1 characters long.' },
      { type: 'maxlength', message: 'password cannot be more than 20 characters long.' },
    ],
    'docter_phone': [
      { type: 'required', message: 'docter_id is required.' },
      { type: 'minlength', message: 'docter_id must be at least 1 characters long.' },
      //{ type: 'pattern', message: 'Your password must contain only numbers and letters.' },
     
     
    ],
    'lab_phone': [
      { type: 'required', message: 'lab_id is required.' },
      { type: 'minlength', message: 'lab_id must be at least 1 characters long.' },
      //{ type: 'pattern', message: 'Your password must contain only numbers and letters.' },
     
     
    ],
  
  };
//   login() {
//     if (this.validations_form.invalid) {
//       // Show an alert, input hints or something to inform the user the fields are invalid.
//       // Let's just return for now
//       console.log("this is "+this.validations_form.invalid);
//       return;
//     }

//     this.route.navigateByUrl('/list');
// }

  // login()
  // {
    
  //   this.route.navigateByUrl('/list');

  // }
  
  login(formData,ex) {
    localStorage.setItem('token', "res.response.token");
   // location.reload();
    this.auth.presentLoading();
    this.auth.login(formData.value).subscribe(res => {
    
      if (res.status == "success") {
        if (res.response != "") {
        this.userData=res.response;
        this.auth.presentToast("login successfull");
        this.nav.pop();

        if(ex==1)
        {
          localStorage.setItem("userData",JSON.stringify(this.userData));
          localStorage.setItem("patient_id",this.userData.patient_id);
          localStorage.setItem("full_name",this.userData.full_name);
          
          this.validations_patient.reset();
          this.route.navigateByUrl('/medicaldetails');


        }
        if(ex==2)
        { 
          localStorage.setItem("userData",JSON.stringify(this.userData));
          localStorage.setItem("docter_id",this.userData.docter_id);

          
          localStorage.setItem("docter_phone",JSON.stringify(this.userData.docter_phone));
          this.validations_docter.reset();

          this.route.navigateByUrl('/persoaldoc');
        }
        if(ex==3)
        {
          this.validations_lab.reset();
          
          localStorage.setItem("lab_id",this.userData.lab_id);
          localStorage.setItem("name",this.userData.name);

          
          localStorage.setItem("userData",JSON.stringify(this.userData));
          this.route.navigateByUrl('/labinformation');
        }
        
        
       // location.reload();

       // this.route.navigateByUrl('/list');
      } else if(res.response =="") {
        this.auth.presentToast("no data found");
        this.validations_docter.reset;
      }
     
    }
    if(res.status=='error')
    {
      this.auth.presentToast(res.message);
    }
     }, (err) => {
       console.log(99,err)

       if(err.error.message.err=="No account exists")
       {
        this.use=1;
       }
       else{
      this.pass=1;
       }
     

    });
  }
  see(){
    this.pass=0;
  }
  user(){
    this.use=0;
  }
  reg()
  {
    this.route.navigateByUrl('/register');
  
  }
  change(e){
    console.log(e);
    this.sel=e.detail.value;
    this.pass=0;
    this.use=0;
  }
}
