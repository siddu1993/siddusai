import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/medicaldetails',
      icon: 'home'
    },
  
    
   
  
    {
      title: 'Persons List',
      url: '/personslist',
      icon: 'list'
    },

    {
      title: 'Medical History',
      url: '/pateintuserhist',
      icon: 'list'
    },

    {
      title: 'Logout',
      url: '/login',
      icon: 'list'
    },
    
  ];
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router
  ) {
    this.initializeApp();
    if(localStorage.getItem('token')!=null) {
       this.router.navigateByUrl('/login');
 
     } else { 
     this.router.navigateByUrl('/login');

    }
      
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
