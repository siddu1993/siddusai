import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-hospitalreg',
  templateUrl: './hospitalreg.page.html',
  styleUrls: ['./hospitalreg.page.scss'],
})
export class HospitalregPage implements OnInit {

  validations_form: FormGroup;
  patientData:any;
  patient:any
  constructor(private fb: FormBuilder,
            protected auth: AuthService,
            protected route: ActivatedRoute,
            private router: Router,
            private nav: NavController, 
 

    ) { }

  ngOnInit() {
     this.createForm();
  }
  createForm() {
    this.validations_form = this.fb.group({
     // patient_id: ['', Validators.required],
      name: ['',Validators.required],
      email: ['',Validators.required],
      address: ['',Validators.required],
      city: ['',Validators.required],
      state:['',Validators.required],
      phone_no:['',Validators.required],
    });
  }
  regester() {
 
  this.auth.hospreg(this.validations_form.value).subscribe(res=>{
    if(res.status=="success"){
      if(res.status=='success'){
        this.auth.presentToast("registered successfully");

        this.nav.pop();

        this.router.navigateByUrl('/login');
      }
    }
  })

}
validation_messages = {

  'name': [
    { type: 'required', message: 'name is required.' },
    { type: 'minlength', message: 'name must be at least 1 characters long.' },
    //{ type: 'pattern', message: 'Your password must contain only numbers and letters.' },
  ],
 

  'phone_no': [
       { type: 'required', message: 'phone is required.' }],
  
  'email': [
          { type: 'required', message: 'email_id is required.' }
         ],
       
         
  'address': [
            { type: 'required', message: 'address  is required.' }],
            'city': [
              { type: 'required', message: 'city  is required.' }],
              'state': [
                 { type: 'required', message: 'state  is required.' }],
                    'hospital': [
                  { type: 'required', message: 'hospital  is required.' }],
                
};

back()
{
  this.nav.pop();

}
}
