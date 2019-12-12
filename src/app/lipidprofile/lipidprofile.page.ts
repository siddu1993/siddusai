import { Component, OnInit, Input } from '@angular/core';
import { ModalController, MenuController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-lipidprofile',
  templateUrl: './lipidprofile.page.html',
  styleUrls: ['./lipidprofile.page.scss'],
})
export class LipidprofilePage implements OnInit {
  userData: any;
  full_name: string;
  patient_id: string;
  obj: any;
  constructor(private router: ActivatedRoute,public navParams:NavParams ,public modalController: ModalController,public route:Router,public auth:AuthService,public menu: MenuController) { 

    this.userData=JSON.parse(localStorage.getItem("userData"));
    this.full_name=localStorage.getItem("full_name");
    this.patient_id= localStorage.getItem("patient_id");
    this.obj = JSON.parse(this.navParams.get('value'));
    console.log("2",this.obj);
this.list();

  }

  ngOnInit() {
  }
  close()
  {
    this.modalController.dismiss();
  }
  list()
  {
     // this.labupdateForm .value.docter_id=this.docter_id;
      this.auth.findchild( {patient_id:this. patient_id}).subscribe(res => {
        
        if (res.status == "success") {
          if (res.response != "") {
         this.userData=res.response;
         
           // localStorage.setItem("full_name",this.name);
           // this.router.navigateByUrl("/patientsearch");
          }
       
        }
      },
         
   
         () => {
        alert("Login failed, Login detils not exits ");
       }
       );
     }
  
 
  

}
