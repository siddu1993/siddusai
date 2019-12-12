import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms';
declare var swal;
@Component({
  selector: 'app-patiandocvisits',
  templateUrl: './patiandocvisits.page.html',
  styleUrls: ['./patiandocvisits.page.scss'],
})
export class PatiandocvisitsPage implements OnInit {
  userData: any;
  full_name: string;
  patient_id: string;
  visits: any;
  searchOptions = {
    year:"",
    docter_name:"",
    child_name:""
   };
  doclist: any;
  years:any=[{year:2019},{year:2020},{year:2021},{year:2022},{year:2023},{year:2024},{year:2025},{year:2026},{year:2027},{year:2028}];
  child: any;


  constructor(public modalController:ModalController,public nav:NavController,public route:Router,public auth:AuthService,public menu: MenuController) {
    this.userData=JSON.parse(localStorage.getItem("userData"));
    this.full_name=localStorage.getItem("full_name");
    this.patient_id= localStorage.getItem("patient_id");
    this.patientlist();
   }

  ngOnInit() {
  }
  back(){
    this.nav.pop();
  }
  patientlist(){

    this.auth.patienthist({patient_id:this.patient_id}).subscribe(res => {
      
      if (res.status == "success") {
     {
      
         this. visits=res.response 
      //  this.name=res.response[0].full_name;
     this.doctorlist();
        
     }}
     
    },
       
 
       () => {
        this.auth.presentToast("error");

     }
     );
   }
   doctorlist(){

    this.auth.doctorlist().subscribe(res => {
      
      if (res.status == "success") {
     {
         this. doclist=res.response 
         this.list();
     
        
     }}
     
    },
       
 
       () => {
        this.auth.presentToast("error");

     }
     );
   }


   
   list()
   {
      // this.labupdateForm .value.docter_id=this.docter_id;
       this.auth.findchild( {patient_id:this. patient_id}).subscribe(res => {
         
         if (res.status == "success") {
           if (res.response != "") {
          this.child=res.response;
          
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
   
  
     



  
   searchData(){
   
    let date=this.searchOptions.year.split('T');

    let newDate = date[0].split('-');
    let day=newDate[1];
    let month=newDate[2];
    let year=newDate[0];
     this.searchOptions.year=year;
  
    this.auth.patientsearch({year:this.searchOptions.year,patient_id:this.patient_id,docter_name:this.searchOptions.docter_name,child_name:this.searchOptions.child_name}).subscribe(res => {
      if (res.status == 'success') {
       
        this.visits = res.response;
       
        console.log(39,this.visits);
       
      }
    }, console.log);
   }
  }



