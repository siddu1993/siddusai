import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable';

declare var swal;
@Component({
  selector: 'app-chckpdetails',
  templateUrl: './chckpdetails.page.html',
  styleUrls: ['./chckpdetails.page.scss'],
})
export class ChckpdetailsPage implements OnInit {
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
  select: boolean;
  
  constructor(private activatedRoute: ActivatedRoute,public modalController:ModalController, private formBuilder: FormBuilder,public nav:NavController,
    public route:Router,public auth:AuthService,public menu: MenuController) { 

      this. data="";
      this.select=true;
      this.activatedRoute.queryParams.subscribe(params => {
        this.editdc = params['test_id'];
        if(this.editdc!=undefined)
        {
          this. data=JSON.parse(this.editdc);
          console.log("hi test_id",this.data );
          if(this.data!="")
          {
            this.patientupdateForm.patchValue(this.data);
            this.patientupdateForm.value.test_name=this.data.test_name.name;
this.port=this.data.test_name;
          }
        }
        
        // Print the parameter to the console. 
    });

    this.userData=JSON.parse(localStorage.getItem("userData"));
    this.full_name=localStorage.getItem("full_name");
    this.patient_id=localStorage.getItem("patient_id");
    this.docname=this.userData.docter_name;
    this.docter_id=this.userData.docter_id;
    this.ch=false;


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
      test_name:['']
  });


  



     
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
    if(this.patientupdateForm.value.labtest_required==true && this.patientupdateForm.value.test_name==""){
      this.auth.presentToast('please select test name');
   }
          else{

          
    this.patientupdateForm.value.patient_id=this.patient_id;
    this.patientupdateForm.value.docter_id=localStorage.getItem("docter_id");
    this.auth.doctorvisit(patientupdateForm.value).subscribe(res => {
      
      if (res.status == "success") {
        if (res.response != "") {
          this.nav.pop();

          this.auth.presentToast("saved successfully");

       
     
         // localStorage.setItem("full_name",this.name);
         // this.router.navigateByUrl("/patientsearch");
        }
     
      }
    }
     );
  }
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
      let arr=[];
      let va=event.value;
      let c=0;
      for(let i=0;i<event.value;i++)
      {  
      if(arr.includes("0"))
      {
        arr.push(va[i].relation);
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
        
       );
     }

    //  check1(e)
    //  {
    //   this.auth.lab_tests().subscribe(res => {
        
    //     if (res.status == "success") {
    //       if (res.response != "") {
         
    //       this.testname=res.response;
    //       var arr=[];
    //       if(e.detail.checked==true)
    //       {
    //         this.port=[];
    //         this.select=true;
    //         for(let obj of this.testname)
    //         {
    //            if(obj.relation!="0")
    //            {
    //             arr.push({name:obj.name,id:obj.id,relation:obj.relation});
               
    //            }
    //         }
    //         this.testname=arr;
    //       }
    //       if(e.detail.checked==false)
    //       {
    //         this.port=[];

    //         this.select=false;
    //         for(let obj of this.testname)
    //         {
    //            if(obj.relation=="0")
    //            {
    //             arr.push({name:obj.name,id:obj.id,relation:obj.relation});
    //            }
    //         }
    //         this.testname=arr;
    //       }
        
          
    //       }
     
    //     }
    //   }
    //    );
       
    //    console.log(e);
      
     
    //  }
  
     back()
     {
       this.nav.pop();
     }
     search(){
      this.auth.lab_tests().subscribe(res => {
        
        if (res.status == "success") {
          if (res.response != "") {
         
          this.testname=res.response;
       
          
          }
       
        }
      }
       );
     }
  }


