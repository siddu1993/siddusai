import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { LipidprofilePage } from 'src/app/lipidprofile/lipidprofile.page';
import { AuthService } from 'src/app/auth.service';
declare var swal;
@Component({
  selector: 'app-labvisits',
  templateUrl: './labvisits.page.html',
  styleUrls: ['./labvisits.page.scss'],
})
export class LabvisitsPage implements OnInit {
 
  patient_id: any;
  visits: any;
  userData: any;
  full_name: string;
  syear:any;
  res: any;
 
    seyear:any;
    sechild_name:any;
 
  years:any=[{"years":2019},{"years":2020},{"years":2021},{"years":2022},{"years":2023},{"years":2024},{"years":2025},{"years":2026},{"years":2027},{"years":2028},{"years":2029}];
  child: any;

  constructor(public nav:NavController,public modalController: ModalController,public route:Router,public auth:AuthService,public menu: MenuController) {
    this.userData=JSON.parse(localStorage.getItem("userData"));
      this.full_name=localStorage.getItem("full_name");
      this.patient_id= localStorage.getItem("patient_id");
      this.patientlist();
   }

  ngOnInit() {

  }

  async view(labobj) {
    const modal = await this.modalController.create({
      component: LipidprofilePage,
      componentProps: { value: JSON.stringify(labobj) }
    });
    modal.onDidDismiss().then(data=> {
  
   });
   return await modal.present();
}

patientlist(){

  this.auth.labupdate({patient_id:this.patient_id}).subscribe(res => {
    this.list();

    if (res.status == "success") {
   {
       this. visits=(res.response).reverse();
    //  this.name=res.response[0].full_name;
   
    this.list();
      
   }}
   
  },
     

     () => {
    swal("Login failed, Login detils not exits ");
   }
   );
 }
 Search(){
 


  this.auth.labhistory({year:this.seyear,patient_id:this.patient_id,child_name:this.sechild_name}).subscribe(res => {
    if (res.status == 'success') {
      
      this.visits = (res.response).reverse();
     
      console.log(39,this.res);
     
    }

    this.visits = (res.response).reverse()
  }, console.log);
 }
 list()
 {
    // this.labupdateForm .value.docter_id=this.docter_id;
     this.auth.findchild( {patient_id:this. patient_id}).subscribe(res => {
       
       if (res.status == "success") {
         if (res.response != "") {
        this.child=(res.response).reverse()
        
          // localStorage.setItem("full_name",this.name);
          // this.router.navigateByUrl("/patientsearch");
         }
         else{
          this.child=[];
         }
      
       }
     },
        
  
        () => {
          this.auth.presentToast("Server failed, Server details not exits ");
      }
      );
    }

 back(){
  this.nav.pop();
}
}


