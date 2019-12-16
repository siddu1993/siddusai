import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { HttpClient, HttpHandler, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicSelectableModule } from 'ionic-selectable';

import { ListPageModule } from './list/list.module';
import { LipidprofilePageModule } from './lipidprofile/lipidprofile.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditlabPageModule } from './labs/editlab/editlab.module';
import { AddpersonsPipe } from './addpersons.pipe';
import { EditchildPageModule } from './editchild/editchild.module';
import { EditpatientPageModule } from './editpatient/editpatient.module';
import { DoceditPageModule } from './doctor/docedit/docedit.module';
import { EditchdetailsPageModule } from './doctor/editchdetails/editchdetails.module';
import { DatePipe } from '@angular/common';
import { ErrordialogServicce } from './errordlog';
import { HttpConfigInterceptorService } from './http-config-interceptor.service';

@NgModule({
  declarations: [AppComponent, AddpersonsPipe],
  entryComponents: [],
  imports: [
    IonicSelectableModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    IonicModule.forRoot({ mode: 'ios' }),
    AppRoutingModule,
    ListPageModule,
    LipidprofilePageModule,
    EditchildPageModule,
    EditlabPageModule,
    EditpatientPageModule,
    DoceditPageModule,
    EditchdetailsPageModule,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AuthService,
    DatePipe,
    ErrordialogServicce,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptorService, multi: true },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
