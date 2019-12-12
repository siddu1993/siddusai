import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { NavParams, ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-editlab',
  templateUrl: './editlab.page.html',
  styleUrls: ['./editlab.page.scss'],
})
export class EditlabPage implements OnInit {

  validations_form: FormGroup;
  userData: any;
  full_name: string;
  patient_id: string;
  obj: any;
  constructor(private fb: FormBuilder,
    private router: Router, 
    // private formBuilder: FormBuilder,
    protected auth: AuthService,public navParams:NavParams,public modalController: ModalController,public nav:NavController,
    protected route: ActivatedRoute) {

      this.userData=JSON.parse(localStorage.getItem("userData"));
      this.full_name=localStorage.getItem("full_name");
      this.patient_id= localStorage.getItem("patient_id");
     }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.validations_form = this.fb.group({
     
      _id:['', Validators.required],
      lab_id:['', Validators.required],
      name: ['', Validators.required],
      lab_phone: ['', Validators.required],
      // speciality: ['', Validators.required],
      // labtest_required:new FormControl(false, [Validators.required]),
 
      address:['', Validators.required],
      city:['', Validators.required],
      state:['', Validators.required],
});

this.validations_form.patchValue(this.userData)
  }
  edit() {
    
    this.auth.labedit(this.validations_form.value).subscribe(res=>{
      if(res.status=="success"){
        //this.nav.pop();
        this.modalController.dismiss();

        this.auth.presentToast("edited successfully");

      }
    })
 }
 validation_messages = {
 
  'name': [
    { type: 'required', message: 'name is required.' },
    { type: 'minlength', message: 'name must be at least 1 characters long.' },
    //{ type: 'pattern', message: 'Your password must contain only numbers and letters.' },
  ],
  'lab_phone': [
    { type: 'required', message: 'phone_no is required.' },],

  // 'phone': [
  //     { type: 'required', message: 'phone is required.' }],
  'address': [
        { type: 'required', message: 'address is required.' },
      ],

      
         

            'city': [
              { type: 'required', message: 'city  is required.' }],
              'state': [
                 { type: 'required', message: 'state  is required.' }],
               
                
};

close()
{
  this.modalController.dismiss()
}

}
