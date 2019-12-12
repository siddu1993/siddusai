import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, MenuController, ModalController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { LipidprofilePage } from '../lipidprofile/lipidprofile.page';

@Component({
  selector: 'app-pateintuserhist',
  templateUrl: './pateintuserhist.page.html',
  styleUrls: ['./pateintuserhist.page.scss'],
})
export class PateintuserhistPage implements OnInit {

  patient_id: any;
  visits: any;

  searchOptions = {
    year:"",
    child_name:""
   };
  lablist: any;
  userData: any;
  child_name: any;
  years:any=[{year:2019},{year:2020},{year:2021},{year:2022},{year:2023},{year:2024},{year:2025},{year:2026},{year:2027},{year:2028}];
  full_name: string;

  constructor(public modalController:ModalController,public route:Router,public nav:NavController,public auth:AuthService,public menu: MenuController) {

    
    this. patient_id=localStorage.getItem('patient_id');
    this. full_name=localStorage.getItem('full_name');

    
    console.log('222', this. patient_id);
    this.list();

 
   }
   ngOnInit() {
    this.labhistory();
    this.patientlisting();
  }
  patientlist(){
if(this.child_name==undefined)
{
  this.child_name="";
}
    this.auth.patientlist({patient_id:this.patient_id,patient_child:this.child_name}).subscribe(res => {
      
      if (res.status == "success") {
     {
         this. visits=(res.response).slice().reverse;
      //  this.name=res.response[0].full_name;
     
        
     }}
     
    },
       
 
       () => {
        this.auth.presentToast("Login failed, Login detils not exits ");
     }
     );
   }
  
   search(){
   
    this.auth.patient_history({year:this.searchOptions.year,patient_id:this.patient_id,child_name:this.searchOptions.child_name}).subscribe(res => {
      if (res.status == 'success') {
       
        this.visits = (res.response).reverse();
       this.labhistory();
        console.log(39,this.visits);
       
      }
    }, console.log);
   }


   patientlisting(){

    this.auth.patienthist({patient_id:this.patient_id,patient_child:this.child_name}).subscribe(res => {
      
      if (res.status == "success") {
     {
         this. visits=(res.response).reverse();
      //  this.name=res.response[0].full_name;
     
        
     }}
     
    },
       
 
       () => {
        this.auth.presentToast("sever failed, server detils not exits ");
     }
     );
   }
   labhistory(){

      this.auth.labhistory({year:this.searchOptions.year,patient_id:this.patient_id,child_name:this.searchOptions.child_name}).subscribe(res => {
        if (res.status == 'success') {
          
          this.lablist = (res.response).reverse();
         
          console.log(39,this.visits);
         
        }
    
        this.lablist = res.response;
      }, console.log);
     }


   async view(labobj) {
    const modal = await this.modalController.create({
      component: LipidprofilePage,
      componentProps: { value: JSON.stringify(labobj.data) }
    });
    modal.onDidDismiss().then(data=> {
 
   });
   return await modal.present();

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
            this.auth.presentToast("server failed, server details not exits ");
        }
        );
      }
   
  
     
 
 
 
  }



