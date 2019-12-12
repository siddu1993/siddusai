import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-addnewlab',
  templateUrl: './addnewlab.page.html',
  styleUrls: ['./addnewlab.page.scss'],
})
export class AddnewlabPage implements OnInit {

  validations_form: FormGroup;
  constructor(private fb: FormBuilder,public nav:NavController,
    private router: Router, 
    // private formBuilder: FormBuilder,
    protected auth: AuthService,
    protected route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.validations_form = this.fb.group({
     
    

      name: ['',Validators.required],
      lab_phone: ['',Validators.required],
      address: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      password: ['',Validators.required],


});
  }

  back()
  {
    this.nav.pop();
  }

  labregister(validations_form) {
    
    this.auth.lab(validations_form.value).subscribe(res=>{
      if(res.status=="success"){
        this.nav.pop();

        this.auth.presentToast("saved successfully");

      }
    }, (err) => {
      console.log(err)
    if(err.error.message.code=="11000")
    {
      this.auth.presentToast("phone number already registered");

    }
    else{
     this.auth.presentToast(err.error.message.error);
    }
   });
    
  }
 validation_messages = {
 
  'name': [
    { type: 'required', message: 'name is required.' },
    { type: 'minlength', message: 'name must be at least 1 characters long.' },
    //{ type: 'pattern', message: 'Your password must contain only numbers and letters.' },
  ],
  'lab_phone': [
    { type: 'required', message: 'phone_no is required.' },],

  'password': [
       { type: 'required', message: 'password is required.' }],
  'address': [
        { type: 'required', message: 'address is required.' },
      ],

      
         

            'city': [
              { type: 'required', message: 'city  is required.' }],
              'state': [
                 { type: 'required', message: 'state  is required.' }],
               
                
};
}
