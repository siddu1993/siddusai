import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-viewlipid',
  templateUrl: './viewlipid.page.html',
  styleUrls: ['./viewlipid.page.scss'],
})
export class ViewlipidPage implements OnInit {
  result: any;
  id: any;

  constructor(public alertController:AlertController,private activatedRoute: ActivatedRoute,public nav:NavController,
    public route:Router,public auth:AuthService) { 

      this.activatedRoute.queryParams.subscribe(params => {
        this.result = JSON.parse(params['test_id']);
     
  
        
  
  //this.getval(this.id);
  
   
        
        console.log("hi test_id",this.result ); // Print the parameter to the console. 
    });
  



    }

  ngOnInit() {
  }
  getval(e){
    this.auth.readingedit({report_id:e}).subscribe(res => {
      
      if (res.status == "success") {
        if (res.response != "") {
this.result=res.response[0].data;

       //   this.auth.presentToast("");

       
     console.log("21",res.response);
     
        }
     
      }
    },
       
 
       () => {
     }
     );
   }

   back()
   {
     this.nav.pop();
   }
}
