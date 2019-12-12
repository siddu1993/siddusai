import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController, ModalController, NavParams } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-editchild',
  templateUrl: './editchild.page.html',
  styleUrls: ['./editchild.page.scss'],
})
export class EditchildPage implements OnInit {

  public validations_form: FormGroup;
  patient_id: string;
  obj: any;

  constructor(public navParams:NavParams,public nav:NavController,public auth:AuthService,public formBuilder: FormBuilder,public model:ModalController) { 
    
    this. patient_id=localStorage.getItem('patient_id');
    this.obj = this.navParams.get('value');

    this.validations_form = this.formBuilder.group({

      _id: ['',Validators.required],
      name: ['',Validators.required],
      age: ['',Validators.required],
      gender:['',Validators.required],
     
    });
    this.validations_form.patchValue(this.obj);
  }

  ngOnInit() {
  }
  close()
  {
    this.model.dismiss();
  }
  addUser(e)
  {
      this.validations_form.value.patient_id=this.patient_id;
     // this.labupdateForm .value.docter_id=this.docter_id;
      this.auth.childedit(e.value).subscribe(res => {
        
        if (res.status == "success") {
          if (res.response != "") {
            this.model.dismiss();
            this.auth.presentToast("person updated successfully");
       console.log("21",this.validations_form);
           // localStorage.setItem("full_name",this.name);
           // this.router.navigateByUrl("/patientsearch");
          }
       
        }
      },
         
   
         () => {
          this.auth.presentToast("server failed");
       }
       );
     }
  
}
