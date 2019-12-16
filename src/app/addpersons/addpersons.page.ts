import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-addpersons',
  templateUrl: './addpersons.page.html',
  styleUrls: ['./addpersons.page.scss'],
})
export class AddpersonsPage implements OnInit {

  public validations_form: FormGroup;
  patient_id: string;

  constructor(public nav:NavController,public auth:AuthService,public formBuilder: FormBuilder,public model:ModalController) { 
    this. patient_id=localStorage.getItem('patient_id');

    this.validations_form = this.formBuilder.group({

      patient_id: ['',Validators.required],
      name: ['',Validators.required],
      age: ['',Validators.required],
      gender:['',Validators.required],
     
    });

  }

  ngOnInit() {
  }
  back()
  {
    this.nav.pop();
  }
  addUser(e)
  {
      this.validations_form.value.patient_id=this.patient_id;
     // this.labupdateForm .value.docter_id=this.docter_id;
      this.auth.child(e.value).subscribe(res => {
        
        if (res.status == "success") {
          if (res.response != "") {
            this.nav.pop();
            this.auth.presentToast("member added successfully");
       console.log("21",this.validations_form);
           // localStorage.setItem("full_name",this.name);
           // this.router.navigateByUrl("/patientsearch");
          }
       
        }
      }
       );
     }
  
}
