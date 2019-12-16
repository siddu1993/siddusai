import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';


import { Observable, Subject } from 'rxjs';
import 'rxjs';
import { EventEmitter } from 'protractor';
import { ToastController, LoadingController, ModalController, AlertController } from '@ionic/angular';

@Injectable()
export class ErrordialogServicce{
    public isDialogOpen: Boolean = false;
    constructor(public modalController: ModalController,public alertController: AlertController) { }


    async openDialog(data) {

 console.log(JSON.stringify(data));

      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: data.status,
        message:(data.reason.err)?data.reason.err:data.reason.error,
        buttons: ['OK']
      });
  
      await alert.present();
    }


   
    
}
