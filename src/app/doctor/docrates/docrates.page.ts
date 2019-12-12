import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { NavController, ModalController } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';
declare var swal;

@Component({
  selector: 'app-docrates',
  templateUrl: './docrates.page.html',
  styleUrls: ['./docrates.page.scss'],
})
export class DocratesPage implements OnInit {
  public validations_form: FormGroup;
  patient_id: string;
  doclist: any;

  constructor(public nav:NavController,public auth:AuthService,public formBuilder: FormBuilder,public model:ModalController) { 
    this. patient_id=localStorage.getItem('patient_id');

    this.validations_form = this.formBuilder.group({
      docter_name: ['', Validators.required],
      rating: ['',Validators.required],
      comments: ['',Validators.required]
     
    });
this.doctorlist();
  }

  ngOnInit() {
  }
  back()
  {
    this.nav.pop();
  }
  addUser(labupdateForm)
  {
      this.validations_form .value.patient_id=this.patient_id;
     // this.labupdateForm .value.docter_id=this.docter_id;
      this.auth.doctorrating(labupdateForm.value).subscribe(res => {
        
        if (res.status == "success") {
          if (res.response != "") {
            this.nav.pop();

            this.auth.presentToast("saved successfully");

       console.log("21",this.validations_form);
           // localStorage.setItem("full_name",this.name);
           // this.router.navigateByUrl("/patientsearch");
          }
       
        }
      },
         
   
         () => {
        swal("Login failed, Login detils not exits ");
       }
       );
     }
     doctorlist(){

      this.auth.doctorlist().subscribe(res => {
        
        if (res.status == "success") {
       {
           this. doclist=res.response 
           
       
          
       }}
       
      },
         
   
         () => {
          this.auth.presentToast("error");
  
       }
       );
     }
  
}
