import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';
declare var swal;
@Component({
  selector: 'app-labrate',
  templateUrl: './labrate.page.html',
  styleUrls: ['./labrate.page.scss'],
})
export class LabratePage implements OnInit {
  public validations_form: FormGroup;
  patient_id: string;
  lablist: any;

  constructor(public nav:NavController,public auth:AuthService,public formBuilder: FormBuilder) { 
    this. patient_id=localStorage.getItem('patient_id');

    this.validations_form = this.formBuilder.group({
      lab_name: ['', Validators.required],
      rating: ['',Validators.required],
      comments: ['',Validators.required]
    
    });
this.lablists()
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
      this.auth.labrating(labupdateForm.value).subscribe(res => {
        
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
        swal("Login failed, Login detils not exits ");
       }
       );
     }


     lablists(){

      this.auth.lablist().subscribe(res => {
        
        if (res.status == "success") {
       {
           this. lablist=res.response 
           
       
          
       }}
       
      },
         
   
         () => {
          this.auth.presentToast("error");
  
       }
       );
     }
  
}
