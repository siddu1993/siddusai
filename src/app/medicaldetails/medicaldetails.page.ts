import { Component, OnInit, HostBinding } from '@angular/core';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { EditchildPage } from '../editchild/editchild.page';
import { EditpatientPage } from '../editpatient/editpatient.page';

@Component({
  selector: 'app-medicaldetails',
  templateUrl: './medicaldetails.page.html',
  styleUrls: ['./medicaldetails.page.scss'],
  
})

export class MedicaldetailsPage implements OnInit {
  tickets:any=[];
  userData: any;
  src: any;
  hosv:any;
  doctr: string;
  labvisit: string;
  userimg: any;
  constructor(public modalController:ModalController,public nav:NavController,public router:Router,public auth:AuthService,public menu: MenuController) {
    this.menu.enable(true);
    this.userData=JSON.parse(localStorage.getItem("userData"));
    console.log( 123,this.userData);

    this.userimg= 'assets/images/user.png';
   this.src= 'assets/images/rating.png';
   this.hosv='assets/images/hosvisit.png';
   this.doctr='assets/images/doctr.jpg';
   this.labvisit='assets/images/labvisit.png';

   
  }
 
  ngOnInit() {
    
  }
  login() {
    localStorage.setItem('token', "res.response.token");
   // location.reload();
    this.auth.presentLoading();
    this.auth.editaft(this.userData).subscribe(res => {

    
      if (res.status == "success") {
        this.userData=res.response[0];
        localStorage.setItem("userData",JSON.stringify(this.userData));
          localStorage.setItem("patient_id",this.userData.patient_id);
      }
     }, () => {
      this.auth.presentToast("Server failed");

    });
  }
  add()
  {
    this.router.navigateByUrl("/addpersons");

  }
  docvisit(){
    this.router.navigateByUrl("/patiandocvisits");
  }
  docrate()
  {
  this.router.navigateByUrl("/docrates");
  }
  lab()
  {
    this.router.navigateByUrl("/labrate");
  }
  hosvisit()
  {
    this.router.navigateByUrl("/hospvisits");
  }
  hos()
  {
    this.router.navigateByUrl("/hosprate");
  }
  labvisits()
  {
    this.router.navigateByUrl("/labvisits");
  }


async view() {
      const modal = await this.modalController.create({
        component: EditpatientPage,
        componentProps: { value: this.userData }
      });
      modal.onDidDismiss().then(data=> {
    this.login();
     });
     return await modal.present();
  
  }
}
