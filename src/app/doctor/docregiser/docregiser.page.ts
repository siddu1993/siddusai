import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-docregiser',
  templateUrl: './docregiser.page.html',
  styleUrls: ['./docregiser.page.scss'],
})
export class DocregiserPage implements OnInit {

  @Input() value: number;
  id: any;
  public validations_form: FormGroup;
  result: any;

  constructor(public nav:NavController,public modalController:ModalController,public auth:AuthService,public formBuilder: FormBuilder) { 
    // this.id= navParams.get("value");
    // console.log(this.id);
   this.validations_form = formBuilder.group({


  
    docter_name: ['', Validators.required],
    sex: ['', Validators.required],
    speciality: ['', Validators.required],
    email: ['', Validators.required],
    clinic_address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    hospital: ['', Validators.required],
    docter_phone: ['', Validators.required],
    password: ['', Validators.required],

    

   
});

  }

  ngOnInit() {
  
  }
  back()
  {
   this.nav.pop(); //this.dismiss()
  }

 
  doctor() {
    this.auth.presentLoading();
    console.log(56, this.validations_form.value)
      this.auth.doctor(this.validations_form.value).subscribe(res => {
       this.result=res;
     
        if (res.status == 'success') {
         this.auth.addNewBookData.next(res.response);
         this.auth.presentToast("Doctor added successfully");
         this.nav.pop();

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
   
    'docter_name': [
      { type: 'required', message: 'name is required.' },
      { type: 'minlength', message: 'name must be at least 1 characters long.' },
      //{ type: 'pattern', message: 'Your password must contain only numbers and letters.' },
    ],
    'age': [
      { type: 'required', message: 'age is required.' },],

    'password': [
       { type: 'required', message: 'password is required.' }],
    'date_of_birth': [
          { type: 'required', message: 'date_of_birth is required.' },
        ],
    'email': [
            { type: 'required', message: 'email_id is required.' }
           ],
           'speciality': [
            { type: 'required', message: 'speciality is required.' }
           ],
           'docter_phone': [
            { type: 'required', message: 'docter_phone is required.' }
           ],
           
    'clinic_address': [
              { type: 'required', message: 'address  is required.' }],
              'city': [
                { type: 'required', message: 'city  is required.' }],
                'state': [
                   { type: 'required', message: 'state  is required.' }],
                      'hospital': [
                    { type: 'required', message: 'hospital  is required.' }],
                    'sex': [
                      { type: 'required', message: 'gender  is required.' }],
                  
  };
  close()
  {
    this.modalController.dismiss({
      'result': "1"
    })
    //this.dismiss()
  }

 
}
