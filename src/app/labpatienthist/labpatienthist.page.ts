import { Component, OnInit } from '@angular/core';
import { LipidprofilePage } from '../lipidprofile/lipidprofile.page';
import { ModalController, NavController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-labpatienthist',
  templateUrl: './labpatienthist.page.html',
  styleUrls: ['./labpatienthist.page.scss'],
})
export class LabpatienthistPage implements OnInit {

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
  test_name: any;
  test_res: any;
  lab_id: any;

  constructor(public modalController:ModalController,public route:Router,public nav:NavController,public auth:AuthService,public menu: MenuController) {

    
    this. patient_id=localStorage.getItem('patient_id');
    this. full_name=localStorage.getItem('full_name');
    this. lab_id=localStorage.getItem('lab_id');
    
    
    console.log('222', this. patient_id);
     this.labhistory();
     this.patientlisting();
   }
   ngOnInit() {
    this.list();
  }
  patientlist(){
if(this.child_name==undefined)
{
  this.child_name="";
}
    this.auth.patientlist({patient_id:this.patient_id,patient_child:this.child_name}).subscribe(res => {
      
      if (res.status == "success") {
     {
         this. visits=res.response 
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
       
        this.visits = (res.response).reverse() ;
       this.labhistory();
        console.log(39,this.visits);
       
      }
    }, console.log);
   }


   patientlisting(){

    this.auth.patienthist({patient_id:this.patient_id,patient_child:this.child_name}).subscribe(res => {
      
      if (res.status == "success") {
     {
         this. visits=(res.response).reverse() ;
      //  this.name=res.response[0].full_name;
     
        
     }}
     
    },
       
 
       () => {
        this.auth.presentToast("Server failed, Server details not exits ");
     }
     );
   }
   labhistory(){

      this.auth.labhistory({year:this.searchOptions.year,patient_id:this.patient_id,child_name:this.searchOptions.child_name}).subscribe(res => {
        if (res.status == 'success') {
          
          this.lablist = res.response;
         
          console.log(39,this.visits);
         
        }
    
        this.lablist = res.response;
      }, console.log);
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
            this.auth.presentToast("Server failed, Server details not exits ");
        }
        );
      }
      listbyid(test_id,list_id,sts,docter_name,lab_name)
      {
         // this.labupdateForm .value.docter_id=this.docter_id;
          this.auth.testbyid( {test_id:test_id}).subscribe(res => {
            
            if (res.status == "success") {
              if (res.response != "") {
             this.test_res=res.response;
             console.log("test_id",this.test_res)

            //  condition: true
            //  name: "Hb or Hbg(Hemoblobin)"
            //  relation: "5ddf6fc8e8c7682140a140e5"
            //  __v: 0
            //  _id: "5ddf72b686eac72658cd0463"


             this.route.navigate(['/labtestupdate'],{ queryParams:{test_id:JSON.stringify(this.test_res),_id:list_id,sts:sts,"docter_name":docter_name,"lab_name":lab_name}});

               // localStorage.setItem("full_name",this.name);
               // this.router.navigateByUrl("/patientsearch");
              }
           
            }
          },
             
       
             () => {
               this.auth.presentToast("Server failed, Server detils not exits ");
           }
           );
         }
      
  
     
 
 
      details(e)
      {
       

        this.test_name=e.test_name;
        console.log("66",this.test_name) 
        if(this.test_name[0].relation==0)
        {
          console.log("66",this.test_name[0].relation) 

          this.listbyid(this.test_name[0].id,e._id,e.status,e.docter_name,localStorage.getItem('name'));

        }
        else{
          this.route.navigate(['/labtestupdate'],{queryParams:{sts:e.status,test_id:JSON.stringify(e.test_name),"docter_id":e.docter_id,"docter_name":e.docter_name,"lab_name":localStorage.getItem('name'),"_id":e._id}});

        }

console.log()
      }
  



  
     back()
     {
       this.nav.pop();
     }
 
 
 
  }



