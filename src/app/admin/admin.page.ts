import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  name: any;
  mname:any;
  main: any;
  relation: any;
  ch: boolean;
  range:any;
  constructor(public nav:NavController,public auth:AuthService,public formBuilder: FormBuilder,public model:ModalController) {
    
    this.ch=false;

    this.getmain()
   }

  ngOnInit() {
  }
  getmain()
  {
    
     // this.labupdateForm .value.docter_id=this.docter_id;
      this.auth.getmain().subscribe(res => {
        
        if (res.status == "success") {
          if (res.response != "") {
            this.main=res.response
       
       console.log("21",this.name);
           // localStorage.setItem("full_name",this.name);
           // this.router.navigateByUrl("/patientsearch");
          }
       
        }
      },
         
   
         () => {
          this.auth.presentToast("server failed, server details not exits ");
       }
       );
     }
     check(e){
      this.ch=e.detail.checked;


     }
     change(e)
     {
      console.log(e);
      this.relation=e.detail.value;
     }


     save()
     {

       
        // this.labupdateForm .value.docter_id=this.docter_id;
         this.auth.testcreate({relation:this.relation,name:this.name,condition:this.ch,range:this.range}).subscribe(res => {
           
           if (res.status == "success") {
             if (res.response != "") {
               this.main=res.response
               //this.nav.pop();
               this.auth.presentToast("sub test added successfully");
          console.log("21",this.name);
              // localStorage.setItem("full_name",this.name);
              // this.router.navigateByUrl("/patientsearch");
             }
          
           }
         },
            
      
            () => {
             this.auth.presentToast("server details not exits ");
          }
          );
        }
}
