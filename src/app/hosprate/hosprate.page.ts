import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-hosprate',
  templateUrl: './hosprate.page.html',
  styleUrls: ['./hosprate.page.scss'],
})
export class HospratePage implements OnInit {
  patient_id: string;
  validations_form: FormGroup;
  hoslist: any;



  constructor(public nav:NavController,public auth:AuthService,public formBuilder: FormBuilder,public model:ModalController) { 
    this. patient_id=localStorage.getItem('patient_id');

    this.validations_form = this.formBuilder.group({
      hospital_name: ['', Validators.required],
      rating: ['',Validators.required],
      comments: ['',Validators.required]
    
    });
this.hoslists();
  }

  ngOnInit() {
  }

  rate(labupdateForm)
  {
      this.validations_form .value.patient_id=this.patient_id;
     // this.labupdateForm .value.docter_id=this.docter_id;
      this.auth.hosprate(labupdateForm.value).subscribe(res => {
        
        if (res.status == "success") {
          if (res.response != "") {
            this.nav.pop();

            this.auth.presentToast("rated successfully");

         
       console.log("21",this.validations_form);
           // localStorage.setItem("full_name",this.name);
           // this.router.navigateByUrl("/patientsearch");
          }
       
        }
      },
         
   
         () => {
       // swal("Login failed, Login detils not exits ");
       }
       );
     }
  
     hoslists(){

      this.auth.hospitalList().subscribe(res => {
        
        if (res.status == "success") {
       {
           this. hoslist=res.response 
           
       
          
       }}
       
      },
         
   
         () => {
          this.auth.presentToast("error");
  
       }
       );
     }

  back()
  {
    this.nav.pop();
  }
}
