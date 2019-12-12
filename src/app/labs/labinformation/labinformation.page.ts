import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { MenuController, ModalController, AlertController } from '@ionic/angular';
import { EditlabPage } from '../editlab/editlab.page';
declare var swal;
@Component({
  selector: 'app-labinformation',
  templateUrl: './labinformation.page.html',
  styleUrls: ['./labinformation.page.scss'],
})
export class LabinformationPage implements OnInit {
  userData: any;
  phone_no: any;
  name: any;
  patient_id: any;

  constructor(public alertController: AlertController,public modalController: ModalController,public route:Router,public auth:AuthService,public menu: MenuController) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem("userData"));
  }
  search(){
    this.auth.patientcheck({phone_no:this.phone_no}).subscribe(res => {
      
      if (res.status == "success") {
        if (res.response != "") {

        this.name=res.response[0].full_name;
        this.patient_id=res.response[0].patient_id;
     
          localStorage.setItem("full_name",this.name);
          localStorage.setItem("patient_id",this.patient_id);
          this.route.navigateByUrl("/labpatienthist");
          //labtestupdate
        }
     
      }
    },
       
 
       () => {
      swal("server failed, server detils not exits ");
     }
     );
   }

   login() {
    localStorage.setItem('token', "res.response.token");
   // location.reload();
    this.auth.presentLoading();
    this.auth.labdata({lab_id:this.userData.lab_id}).subscribe(res => {
    
      if (res.status == "success") {
        if (res.response != "") {

          let a=res.response;
     
          localStorage.setItem("userData",JSON.stringify(a[0]));
          this.userData = JSON.parse(localStorage.getItem("userData"));

        }
        
        
       // location.reload();

       // this.route.navigateByUrl('/list');
    
      else if(res.status =="error") {
        this.auth.presentToast("login failed");

      }
    }
     }, () => {
      this.auth.presentToast("Server failed");

    });
  }





   async edit() {
    const modal = await this.modalController.create({
      component: EditlabPage,
      componentProps: { value: '' }
    });
    modal.onDidDismiss().then(data=> {
  this.login();
   });
   return await modal.present();
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

}
