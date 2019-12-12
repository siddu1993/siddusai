import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavParams, ModalController, NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  @Input() value: number;
  id: any;
  public validations_form: FormGroup;
  result: any;
  ques: any;

  constructor(public modalController:ModalController,public auth:AuthService,public formBuilder: FormBuilder,
    public nav:NavController) { 
    // this.id= navParams.get("value");
    // console.log(this.id);
   this.validations_form = formBuilder.group({

    full_name: ['',Validators.required],
    date_of_birth: ['',Validators.required],
    email: ['',Validators.compose([
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'),

    ])],
    address: ['',Validators.required],
    city: ['',Validators.required],
    state:['',Validators.required],
    sex:['',Validators.required],
    age: ['',Validators.required],
    phone_no:['',Validators.required],
    password:['',Validators.required],
    question:['',Validators.required],
    answer:['',Validators.required],
    insurance: [false]
  
    

   
});

  }

  ngOnInit() {
  this.question();
  }

  register(validations_form) {
    this.auth.presentLoading();
    console.log(56, validations_form.value)
      this.auth.newpatient(validations_form.value).subscribe(res => {
       this.result=res;
     
        if (res.status == 'success') {
         this.auth.presentToast("registered  successfully");
this.nav.pop();
        }
      
     
     
       console.log(JSON.stringify(this.result))
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
    'insurance': [
      // { type: 'required', message: 'upc is required.' },
      { type: 'minlength', message: 'insurence must be at least 1 characters long.' },
      { type: 'maxlength', message: 'insurence cannot be more than 20 characters long.' },
     // { type: 'validUsername', message: 'Your insurence has already been taken.' }
    ],
    'full_name': [
      { type: 'required', message: 'name is required.' },
      { type: 'minlength', message: 'name must be at least 1 characters long.' },
      //{ type: 'pattern', message: 'Your password must contain only numbers and letters.' },
    ],
    'age': [
      { type: 'required', message: 'age is required.' },],
      'sex': [
        { type: 'required', message: 'sex is required.' },],

        'email': [
          { type: 'required', message: 'Email id is required.' },
          { type: 'pattern', message: 'please enter valid email' }],

    'date_of_birth': [
          { type: 'required', message: 'date_of_birth is required.' },
        ],
    'email_id': [
            { type: 'required', message: 'email_id is required.' }
           ],
    'address': [
              { type: 'required', message: 'address  is required.' }],
              'city': [
                { type: 'required', message: 'city  is required.' }],
                'state': [
                   { type: 'required', message: 'state  is required.' }],
                   'phone_no': [
                    { type: 'required', message: 'phone_no  is required.' }],
                    'password': [
                      { type: 'required', message: 'password  is required.' }],
                      'quest'  : [{ type: 'required', message: 'select security question is required.' }],
                      'answer'  : [{ type: 'required', message: 'answer is required' }]
                  
  };
  back()
  {
   this.nav.pop() //this.dismiss()
  }

  question() {
    this.auth.presentLoading();
      this.auth.quest().subscribe(res => {
       this.ques=res.response;
     
       
     
     
       console.log(JSON.stringify(this.ques))
    }, (err) => {
      console.log(err)
    if(err.error.message.code=="11000")
    {
      this.auth.presentToast("err");

    }
    else{
     this.auth.presentToast(err.error.message.error);
    }
   });
    
  }
}
