import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-fogotpass',
  templateUrl: './fogotpass.page.html',
  styleUrls: ['./fogotpass.page.scss'],
})
export class FogotpassPage implements OnInit {
  public validations_form: FormGroup;
  constructor(public nav:NavController ,public route:Router,public auth:AuthService,public formBuilder: FormBuilder,public menu: MenuController) { 
    this.menu.enable(true);
  
    this.validations_form = formBuilder.group({

      email: new FormControl('', Validators.compose([
       
         Validators.maxLength(20),
         Validators.minLength(1),
      
        Validators.required
      ])),
      
      dob: new FormControl('', Validators.compose([
       
        Validators.maxLength(20),
        Validators.minLength(1),
       //Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
       Validators.required
     ])),

     //user_id: ['', Validators.compose([Validators.required])],
   //  password: ['', Validators.compose([Validators.required])],
    
  });



  }
  ngOnInit() {
    console.log(22,localStorage.getItem("token"))
  
  
  
  }
  validation_messages = {
    'email': [
      { type: 'required', message: 'Username is required.' },
      { type: 'minlength', message: 'Username must be at least 1 characters long.' },
      { type: 'maxlength', message: 'Username cannot be more than 20 characters long.' },
      { type: 'validUsername', message: 'Your username has already been taken.' }
    ],
    'dob': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password must be at least 1 characters long.' },
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
  
  login(formData) {
    this.auth.presentLoading();
    this.auth.login(formData.value).subscribe(res => {
    
      if (res.status == "success") {
       

      
        this.nav.pop();

      

       // this.route.navigateByUrl('/list');
      } else if(res.status =="error") {
 
      }
     }, () => {
   // swal("Login failed, Login detils not exits ");
    });
  }
  back()
  {
    this.nav.pop();
  
  }
}
