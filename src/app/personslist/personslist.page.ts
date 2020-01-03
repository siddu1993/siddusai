import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, AlertController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { FormBuilder } from '@angular/forms';
import { EditchildPage } from '../editchild/editchild.page';

@Component({
  selector: 'app-personslist',
  templateUrl: './personslist.page.html',
  styleUrls: ['./personslist.page.scss'],
})
export class PersonslistPage implements OnInit {
  patient_id: string;
  usersdata: any;

  constructor(public alertController:AlertController,public modalController:ModalController,public nav:NavController,public auth:AuthService,public formBuilder: FormBuilder) {
    this. patient_id=localStorage.getItem('patient_id');
   }

  ngOnInit() {
    this.list();

  }
  list()
  {
   // this.userData='';
     // this.labupdateForm .value.docter_id=this.docter_id;
      this.auth.findchild( {patient_id:this. patient_id}).subscribe(res => {
        
        if (res.status == "success") {
     
         this.usersdata=res.response;

           // localStorage.setItem("full_name",this.name);
           // this.router.navigateByUrl("/patientsearch");
        
       
        }
      },
         
   
         () => {
        alert("server failed, server details not exits ");
       }
       );
     }

    async edit(obj) {
      const modal = await this.modalController.create({
        component: EditchildPage,
        componentProps: { value: obj }
      });
      modal.onDidDismiss().then(data=> {
    this.list();
     });
     return await modal.present();
  

  }

  async childremove(item) {
    const alert = await this.alertController.create({
      header: 'remove!',
      message: 'do you want to remove?',
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
            this.remove(item)
            console.log('Confirm Okay');
          }
        }
      ]
    });
  
    await alert.present();
  
  }

  remove(item)
  {
     // this.labupdateForm .value.docter_id=this.docter_id;
      this.auth.childremove({_id:item._id}).subscribe(res => {
        
        if (res.status == "success") {
           // this.list();

      this.auth.presentToast("child person removed")
      this.list();
           // localStorage.setItem("full_name",this.name);
           // this.router.navigateByUrl("/patientsearch");
          
       
        }
      },
         
   
         (err) => {
          this.auth.presentToast("server failed");
       }
       );
     }
  
}
