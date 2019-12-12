import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController, MenuController, NavParams } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';
import { IonicSelectableComponent } from 'ionic-selectable';

@Component({
  selector: 'app-editchdetails',
  templateUrl: './editchdetails.page.html',
  styleUrls: ['./editchdetails.page.scss'],
})
export class EditchdetailsPage implements OnInit {

  userData: any;
  full_name: string;
  patient_id: string;
  patientupdateForm:FormGroup;
  docname: any;
  docter_id: any;
  testname: any;
  ch: any;
  editdc: any;
  data: any;
  port: any;
  
  constructor(public navParams:NavParams, private activatedRoute: ActivatedRoute,public modalController:ModalController, private formBuilder: FormBuilder,public nav:NavController,
    public route:Router,public auth:AuthService,public menu: MenuController) { 

      this. data="";
      this.editdc =this.navParams.get('test_id');


        if(this.editdc!=undefined)
        {
          this. data=JSON.parse(this.editdc);
          console.log("hi test_id",this.data );
         
        }
        
        // Print the parameter to the console. 

    this. patientupdateForm  =  this.formBuilder.group({
      blood_pressure: ['', Validators.required],
      comments: ['', Validators.required],
      medicine_prescribed: ['', Validators.required],
      labtest_required: [false, Validators.required],
      child_name: ['',Validators.required],
      patient_id:['', Validators.required],
      docter_id:['', Validators.required],
      docter_name:[this.docname],
      reason:['', Validators.required],
      test_name:[''],
      _id:['']

  });

  if(this.data!="")
  {
    this.patientupdateForm.patchValue(this.data);
    this.patientupdateForm.value.test_name=this.data.test_name.name;
this.port=this.data.test_name;
  }
  



      this.userData=JSON.parse(localStorage.getItem("userData"));
      this.full_name=localStorage.getItem("full_name");
      this.patient_id=localStorage.getItem("patient_id");
      this.docname=this.userData.docter_name;
      this.docter_id=this.userData.docter_id;

      this.ch=false;
this.list();
    }

   
  history()
  {
    this.route.navigateByUrl('/patentmedicalhistory');
  }
  ngOnInit() {
  
    console.log("in patc");

   

 
 
  }
  save(patientupdateForm){
    this.patientupdateForm.value.patient_id=this.patient_id;
    this.patientupdateForm.value.docter_id=localStorage.getItem("docter_id");
    this.auth.editdoc(patientupdateForm.value).subscribe(res => {
      
      if (res.status == "success") {
        if (res.response != "") {

          this.auth.presentToast("updated successfully");

          this.modalController.dismiss() //this.dismiss()
     
         // localStorage.setItem("full_name",this.name);
         // this.router.navigateByUrl("/patientsearch");
        }
     
      }
    },
       
 
       () => {
      this.auth.presentToast("server failed, server detils not exits ");
     }
     );
   }
   view(){
    this.route.navigateByUrl('/patentmedicalhistory',);
   }
   list()
  {
    console.log("in patch");
  
  
      this.auth.findchild({patient_id:this. patient_id}).subscribe(res => {
        
        if (res.status == "success") {
         
         this.userData=res.response;
         
           // localStorage.setItem("full_name",this.name);
           // this.router.navigateByUrl("/patientsearch");
          
       this.search();
        }
      },
         
   
         () => {
          this.auth.presentToast("server failed, server detils not exits ");
       }
       );
     }

     check(e){
       console.log(e.detail);
     
         this.ch=e.detail.checked;
     
     }

     portChange(event: {
      component: IonicSelectableComponent,
      value: any
  
      
    }) {
      let va=event.value;
      let c=0;
      for(let i=0;i<event.value;i++)
      {
      if(va[i].relation==0 )
      {
        c++
      }
    }
      //this.comp(event.value.id);
      this.patientupdateForm.value.test_name=event.value;

      

      console.log('port:', event.value);
    }
  
    
    testbyid(){
      this.auth.testbyid().subscribe(res => {
        
        if (res.status == "success") {
          if (res.response != "") {
         
          this.testname=res.response;
       
          
          }
       
        }
      },
         
   
         () => {
          this.auth.presentToast("Login failed, Login detils not exits ");
       }
       );
     }


  
    
     search(){
      this.auth.lab_tests().subscribe(res => {
        
        if (res.status == "success") {
          if (res.response != "") {
         
          this.testname=res.response;
       
          
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
      this.modalController.dismiss() //this.dismiss()
     }
   
  }


