import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-docedit',
  templateUrl: './docedit.page.html',
  styleUrls: ['./docedit.page.scss'],
})
export class DoceditPage implements OnInit {

  @Input() value: number;
  id: any;
  public validations_form: FormGroup;
  result: any;
  obj: any;

  constructor(public navParams:NavParams,public nav:NavController,public modalController:ModalController,public auth:AuthService,public formBuilder: FormBuilder) { 

    this.obj = this.navParams.get('value');
   this.validations_form = formBuilder.group({


    _id: ['', Validators.required],
    docter_name: ['', Validators.required],
    sex: ['', Validators.required],
    speciality: ['', Validators.required],
    email: ['', Validators.required],
    clinic_address: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required],
    hospital: ['', Validators.required],
    docter_phone: ['', Validators.required],

    

   
});
this.validations_form.patchValue(this.obj);
  }

  ngOnInit() {
  
  }
  back()
  {
  this.modalController.dismiss()
  }

 
  doctor() {
    this.auth.presentLoading();
    console.log(56, this.validations_form.value)
      this.auth.doctoredit(this.validations_form.value).subscribe(res => {
       this.result=res;
     
        if (res.status == 'success') {
         this.auth.addNewBookData.next(res.response);
         this.auth.presentToast("Doctor edited successfully");
         this.modalController.dismiss();

        }
      
      },
       );
       console.log(JSON.stringify(this.result))
    }
    


  validation_messages = {
   
    'docter_name': [
      { type: 'required', message: 'name is required.' },
      { type: 'minlength', message: 'name must be at least 1 characters long.' },
      //{ type: 'pattern', message: 'Your password must contain only numbers and letters.' },
    ],
    'age': [
      { type: 'required', message: 'age is required.' },],

    // 'phone': [
    //     { type: 'required', message: 'phone is required.' }],
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
                      { type: 'required', message: 'sex  is required.' }],
                  
  };
  close()
  {
    this.modalController.dismiss({
      'result': "1"
    })
    //this.dismiss()
  }

 
}
