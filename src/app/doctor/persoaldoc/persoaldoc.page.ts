import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, MenuController, AlertController } from '@ionic/angular';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { FormBuilder } from '@angular/forms';
import { DoceditPage } from '../docedit/docedit.page';
declare var swal;
@Component({
  selector: 'app-persoaldoc',
  templateUrl: './persoaldoc.page.html',
  styleUrls: ['./persoaldoc.page.scss'],
})
export class PersoaldocPage implements OnInit {
  name: any;
  userData: any;
  phone_no: any;
  docter_phone: any;
  pho: string;

  constructor(public modalController:ModalController,public alertController:AlertController,
    public route:Router,public auth:AuthService,public menu: MenuController) { 
      this.userData=JSON.parse(localStorage.getItem("userData"));
      this.docter_phone=this.userData.docter_phone;

    }

  ngOnInit() {
  }


  search(){
    this.auth.patientcheck({phone_no:this.phone_no}).subscribe(res => {
      
      if (res.status == "success") {
        if (res.response != "") {
       
        this.name=res.response[0];
     
          localStorage.setItem("full_name",this.name.full_name);
          localStorage.setItem("patient_id",this.name.patient_id);
          this.route.navigateByUrl("/chckpdetails");
        }
        else{
          this.auth.presentToast("patient not exists ");
          this.pho="1"
        }
     
      }
    },
       
 
       () => {
     }
     );
   }
 
   async edit() {
    const modal = await this.modalController.create({
      component: DoceditPage,
      componentProps: { value: this.userData }
    });
    modal.onDidDismiss().then(data=> {
  this.getdata();
   });
   return await modal.present();

}
getdata() {
  localStorage.setItem('token', "res.response.token");
 // location.reload();
  this.auth.presentLoading();
  this.auth.getdoctor( {docter_id:this.userData.docter_id}).subscribe(res => {
  
    if (res.status == "success") {
      if (res.response != "") {
     
        this.userData=res.response[0];
      
     // location.reload();

     // this.route.navigateByUrl('/list');
    } else if(res.response =="") {
      this.auth.presentToast("server failed");

    }
    else if(res.status =="error") {
      this.auth.presentToast("server failed");

    }
  }
   }, (err => {
    this.auth.presentToast("Server failed");

    }));
}

async back() {
  const alert = await this.alertController.create({
    header: 'logout!',
    message: 'do you want to logout?',
    buttons: [
      {
        text: 'no',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'yes',
        handler: () => {
          location.reload();
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();

}
phone(){
  this.pho="0"
}
}
