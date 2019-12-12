import { Component, OnInit } from '@angular/core';
import { IonicSelectableComponent } from 'ionic-selectable';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

class Port {
  public id: number;
  public name: string;
}

@Component({
  selector: 'app-selectable',
  templateUrl: './selectable.page.html',
  styleUrls: ['./selectable.page.scss'],
})
export class SelectablePage {

  ports: Port[];
  port: Port;
  port1:Port;
  testname: any;
  select: any;

  constructor(public nav:NavController,public route:Router,public auth:AuthService) {
    this.search();
    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' },
      { id: 4, name: 'pokai' },
      { id: 5, name: 'kladivostok' },
      { id: 6, name: 'lavlakhi' }
    ];
  }

  portChange(event: {
    component: IonicSelectableComponent,
    value: any

    
  }) {
    this.comp(event.value.id);
    console.log('port:', event.value);
  }


  portChange1(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
 
  }
  close()
  {
    this.nav.pop();
  }
  next(){
    this.route.navigateByUrl('/chckpdetails');
  
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
   

   comp(id){
    this.auth.findbytestid({relation:id}).subscribe(res => {
      
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
}
