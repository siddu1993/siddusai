import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormArray } from '@angular/forms';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

declare var swal; 
@Component({
  selector: 'app-labtestupdate',
  templateUrl: './labtestupdate.page.html',
  styleUrls: ['./labtestupdate.page.scss'],
})
export class LabtestupdatePage implements OnInit {
  public labupdateForm:FormGroup
  userData: any;
  patient_id: string;
  name: string;
  alllist: any;
  test_id: any;
  test_res: any;
  myFormGroup:FormGroup;
items: FormArray;
  read: any;

  sname:any=[];
  unit:any=[];
  method:any=[];
  range:any=[];
  val: any[];
  docter_id: any;
  docter_name: any;
  lab_name: any;
  _id: any;
  sts: any;
  result: any;
  child_name: any;
  checks:any=[];
  ch: any=[];
  chec: any=[];



  constructor(public route:Router,private activatedRoute: ActivatedRoute,public nav:NavController,public modalController:ModalController,public auth:AuthService) {

    this.activatedRoute.queryParams.subscribe(params => {
      this.test_res = JSON.parse(params['test_id']);
      this.docter_id = params['docter_id'];
      this.docter_name = params['docter_name'];
      this.lab_name = params['lab_name'];
      this._id = params['_id'];
      this.sts = params['sts'];
      this.child_name = params['child_name'];


      console.log("hi this.child_name", this.child_name); // Print the parameter to the console. 
  });


    this.userData=JSON.parse(localStorage.getItem("userData"));
    this.patient_id=localStorage.getItem("patient_id")
    this.name=localStorage.getItem("full_name")
    //this.readings();
    for(let i=0;i<this.test_res;i++)
    {
     this.chec[i]=false;
    }
   }

  ngOnInit() {
    //console.log(101,this.test_res[1].range);

 if(this.sts=="1")
 {
  this.getval(this._id);
 }
   for(let i=0;i<this.test_res;i++)
   {
    this.chec[i]=false;
   
    let group={}    
    this.test_res.forEach(input_template=>{
      group[input_template.name]=new FormControl('');
      group[input_template._id]=new FormControl('');
      group[i]=new FormControl('');

     // this.myFormGroup = new FormGroup(group);

    })
    this.myFormGroup[i] = new FormGroup(group);

  }

    // this.orderForm = this.formBuilder.group({
    //   name: '',
    //   email: '',
    //   items: this.test_res
    // });

  //   this.labupdateForm = this.formBuilder.group({

  //     docter_name: new FormControl('', [Validators.required]),
  //     test_name: new FormControl('', [Validators.required]),
  //     total_cholestrol: new FormControl('', [Validators.required]),
  //     tri_glycerides: new FormControl('', [Validators.required]),
  //     hdl: new FormControl('', [Validators.required]),
  //     no_hdl: new FormControl("", [Validators.required]),
  //     ldl: new FormControl('', [Validators.required]),
  //     vldl: new FormControl('', [Validators.required]),
  //     chol_ratio: new FormControl('', [Validators.required]),
  //     patient_id: new FormControl("", [Validators.required]),
  //     child_name: new FormControl("", [Validators.required])

  
     
  // });
  }

  sub()
  {

  
this.val=[];
    for(let i=0;i<this.test_res.length;i++)
    {
this.val.push({"name":this.test_res[i].name,"other_method":this.method[i]?this.method[i]:'',
"unit":this.sname[i]+" "+this.unit[i],
"method":this.checks[i],"range":this.test_res[i].range?this.test_res[i].range:0});
    }
 
    console.log('orm',JSON.stringify(this.val));

    if(this.sts==1)
    {
this.updateval();
    }
    else{
      this.readsave();

    }
  }


  updateval()
  {
     // this.labupdateForm .value.docter_id=this.docter_id;
      this.auth.updateval({data:this.val,"patient_id": localStorage.getItem("patient_id"),"lab_id":localStorage.getItem("lab_id"),"docter_id":localStorage.getItem("docter_id"),
      "docter_name":this.docter_name,"lab_name":this.lab_name,"_id":this._id,"child_name":this.child_name}).subscribe(res => {
        
        if (res.status == "success") {
          if (res.response != "") {
         this.read=res.response;
         this.auth.presentToast("report successfully updated ");
         this.route.navigateByUrl("/labinformation");
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



  readsave()
  {
     // this.labupdateForm .value.docter_id=this.docter_id;
      this.auth.readingsave({data:this.val,"patient_id": localStorage.getItem("patient_id"),"lab_id":localStorage.getItem("lab_id"),"docter_id":localStorage.getItem("docter_id"),
      "docter_name":this.docter_name,"lab_name":this.lab_name,"_id":this._id,"child_name":this.child_name}).subscribe(res => {
        
        if (res.status == "success") {
          if (res.response != "") {
         this.read=res.response;
         this.auth.presentToast("report successfully added ");
         this.route.navigateByUrl("/labinformation");
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

     check(e,i){
      console.log(e);
    if(e=='Other Method')
    {
     // this.ch=e.detail.checked;
      this.chec[i]=true;
    }
    else{
      this.chec[i]=false;

    }
      
    
    }






  validation_messages = {
    'docter_name': [
      // { type: 'required', message: 'upc is required.' },
      { type: 'minlength', message: 'refdoc must be at least 1 characters long.' },
      { type: 'maxlength', message: 'refdoc cannot be more than 20 characters long.' },
      { type: 'validUsername', message: 'Your refdoc has already been taken.' }
    ],
    'test_name': [
      { type: 'required', message: 'testname is required.' },
      { type: 'minlength', message: 'test name must be at least 1 characters long.' },
      //{ type: 'pattern', message: 'Your password must contain only numbers and letters.' },
    ],
    'total_cholestrol': [
      { type: 'required', message: 'total  cholestrol is required.' },],
      'tri_glycerides': [
        { type: 'required', message: 'Triglycerides is required.' },],

    // 'phone': [
    //     { type: 'required', message: 'phone is required.' }],
    'hdl': [
          { type: 'required', message: 'hdl is required.' },
        ],
    'no_hdl': [
            { type: 'required', message: 'no hdl is required.' }
           ],
    'address': [
              { type: 'required', message: 'address  is required.' }],
              'vldl': [
                { type: 'required', message: 'vldl  is required.' }],
                'ldl': [
                  { type: 'required', message: 'ldl  is required.' }],
                'chol_ratio': [
                   { type: 'required', message: 'chol_ratio  is required.' }],
                  
  };





  update(labupdateForm){
    this.labupdateForm .value.patient_id=this.patient_id;
   // this.labupdateForm .value.docter_id=this.docter_id;
    this.auth.updates(labupdateForm.value).subscribe(res => {
      
      if (res.status == "success") {
        if (res.response != "") {
          this.nav.pop();

          this.auth.presentToast("updated successfully");

       
     console.log("21",this.labupdateForm);
         // localStorage.setItem("full_name",this.name);
         // this.router.navigateByUrl("/patientsearch");
        }
     
      }
    },
       
 
       () => {
      swal("server failed, server detils not exits ");
     }
     );
   }

getval(e){
    this.auth.readingedit({report_id:e}).subscribe(res => {
      
      if (res.status == "success") {
        if (res.response != "") {
this.result=res.response[0].data;
let s=[];
          for(let i=0;i<this.result.length;i++)
          {
             let r=(this.result[i].unit).split(" ");


this.sname[i]=r[0];
this.checks[i]=this.result[i].method;
if(this.checks[i]=="Other Method"){
this.chec[i]=true;
this.method[i]=this.result[i].other_method;

}
this.range[i]=this.result[i].range;

this.unit[i]=r[1];
          }
      //    this.auth.presentToast("updated successfully");

       
     console.log("21",res.response);
     
        }
     
      }
    },
       
 
       () => {
      swal("server failed, server details not exits ");
     }
     );
   }
    
         
       
            onSubmit()
            {
            }

            

      back()
      {
        this.nav.pop();
      }

}
