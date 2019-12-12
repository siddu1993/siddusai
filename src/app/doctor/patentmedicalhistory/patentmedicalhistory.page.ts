import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder } from '@angular/forms';
import { MenuController, NavController, ModalController } from '@ionic/angular';
import { LipidprofilePage } from 'src/app/lipidprofile/lipidprofile.page';
import { EditchdetailsPage } from '../editchdetails/editchdetails.page';
declare var swal;
@Component({
  selector: 'app-patentmedicalhistory',
  templateUrl: './patentmedicalhistory.page.html',
  styleUrls: ['./patentmedicalhistory.page.scss'],
})
export class PatentmedicalhistoryPage implements OnInit {
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
  docter_id: string;

  constructor(public modalController:ModalController,public route:Router,public nav:NavController,public auth:AuthService,public menu: MenuController) {

    
    this. patient_id=localStorage.getItem('patient_id');
    this. full_name=localStorage.getItem('full_name');
    this. docter_id=localStorage.getItem('docter_id');

    

    
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
         this. visits=(res.response).reverse();
      //  this.name=res.response[0].full_name;
     
        
     }}
     
    },
       
 
       () => {
        this.auth.presentToast("server failed, server details not exits ");
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
        this.auth.presentToast("Server failed, Server detils not exits ");
     }
     );
   }
   labhistory(){

      this.auth.labhistory({year:this.searchOptions.year,patient_id:this.patient_id,child_name:this.searchOptions.child_name}).subscribe(res => {
        if (res.status == 'success') {
          
          this.lablist = (res.response).reverse();
         
          console.log(39,this.visits);
         
        }
    
        this.lablist =  (res.response).reverse();
      }, console.log);
     }
   

     async editdc(item) {
      const modal = await this.modalController.create({
        component: EditchdetailsPage,
        componentProps: {test_id:JSON.stringify(item) }
      });
      modal.onDidDismiss().then(data=> {
        this.labhistory();
        this.patientlisting();

     });
     return await modal.present();
  
  }
     

   async view(labobj) {
    this.route.navigate(['/viewlipid'],{ queryParams:{test_id:JSON.stringify(labobj)}});

  //   const modal = await this.modalController.create({
  //     component: LipidprofilePage,
  //     componentProps: { value: JSON.stringify(labobj) }
  //   });
  //   modal.onDidDismiss().then(data=> {
 
  //  });
  //  return await modal.present();

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
            this.auth.presentToast("Login failed, Login detils not exits ");
        }
        );
      }
   
  
     
 
 
 
  



  
     back()
     {
       this.nav.pop();
     }
 
 
 
  }



