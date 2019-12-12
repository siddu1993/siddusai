import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-editpatient',
  templateUrl: './editpatient.page.html',
  styleUrls: ['./editpatient.page.scss'],
})
export class EditpatientPage implements OnInit {

  @Input() value: number;
  id: any;
  public validations_form: FormGroup;
  result: any;
  data: any;

  constructor(public navParams:NavParams,public modalController:ModalController,public auth:AuthService,public formBuilder: FormBuilder,
    public nav:NavController) { 
   this.data= navParams.get("value");
    // console.log(this.id);
   this.validations_form = formBuilder.group({

    full_name: ['',Validators.required],
    date_of_birth: ['',Validators.required],
    email: ['',Validators.required],
    address: ['',Validators.required],
    city: ['',Validators.required],
    state:['',Validators.required],
    sex:['',Validators.required],
    age: ['',Validators.required],
    phone_no:['',Validators.required],
    insurance: ['false',Validators.required],
    _id:['']
  
    

   
});
this.validations_form.patchValue(this.data);
  }

  ngOnInit() {
  
  }

  register(validations_form) {
    this.auth.presentLoading();
    console.log(56, validations_form.value)
      this.auth.patientedit(validations_form.value).subscribe(res => {
       this.result=res;
     
        if (res.status == 'success') {
          this.modalController.dismiss() //this.dismiss()

         this.auth.presentToast("updated successfully");
        }
      
      },
       );
       console.log(JSON.stringify(this.result))
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
        { type: 'required', message: 'phone is required.' }],
    'date_of_birth': [
          { type: 'required', message: 'date_of_birth is required.' },
        ],
  
    'address': [
              { type: 'required', message: 'address  is required.' }],
              'city': [
                { type: 'required', message: 'city  is required.' }],
                'state': [
                   { type: 'required', message: 'state  is required.' }],
                   'phone_no': [
                    { type: 'required', message: 'phone_no  is required.' }],
                  
  };
  back()
  {
   this.modalController.dismiss() //this.dismiss()
  }

 
}
