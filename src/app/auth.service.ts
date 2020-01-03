import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';


import { Observable, Subject } from 'rxjs';
import 'rxjs';
import { EventEmitter } from 'protractor';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable()

export class AuthService {

  //baseUrl: string = 'http://115.118.240.231:4100';
  //baseUrl: string = 'http://192.168.1.106:3000';
 // baseUrl: string = 'http://192.168.1.137:3000';

 //baseUrl: string = 'http://192.168.1.120:4100';
 //baseUrl: string = 'http://192.168.1.104:3000';
  //baseUrl: string = 'http://18.220.79.100:4100';
 //baseUrl: string = 'http://ec2-18-219-216-51.us-east-2.compute.amazonaws.com';
  baseUrl: string = 'http://18.206.155.160:4100';  
  addUserData: Subject<any> = new Subject();
  onUserEdit: Subject<any> = new Subject();
  deleteUserData: Subject<any> = new Subject();
  addNewCustomerData: Subject<any> = new Subject();
  onCustomerEdit:Subject<any> = new Subject();
  deleteCustomerData:Subject<any> = new Subject();
  addNewBookData:Subject<any> = new Subject();
  deleteLotteryData:Subject<any> = new Subject();
  saveData:Subject<any> = new Subject();
  
  isLoggedIn=false;


   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization':localStorage.getItem('token')
 });
  options = {
    headers: this.headers
 }




  constructor(
    public toastController: ToastController,public loadingController: LoadingController,
    protected http: HttpClient
  ) {
    this.isLoggedIn = false; 


    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Authorization',localStorage.getItem('token'));

   
  }


  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  login(data): Observable<any> {
    return new Observable(subscribe => {
      this.http.post(this.baseUrl + '/user/loginType', data).subscribe((data: any) => {
        if(data.status == 'success') {
          let token = data.response.token;
          this.isLoggedIn = true; 
          localStorage.setItem('userToken', token);
        }

        subscribe.next(data);
        subscribe.complete();
      }, (err) => {
      this.presentToast("invalid credentials")
        subscribe.error(err);
      });
    });
  }


  
  editaft(data?):Observable<any>{

    return this.http.post(this.baseUrl + '/patient/patientData',data);
  }


  newpatient(data?):Observable<any>{

    return this.http.post(this.baseUrl + '/patient/create',data);
  }
  patientedit(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/patient/edit',data);
  }
  doctor(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/docters/create',data);
  }
  doctoredit(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/docters/edit',data);
  }
  getdoctor(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/docters/SearchByDocterId',data);
  }

  

  doctorlist(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/docters/doctersList',data);
  }
  lab(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/lab/create',data);
  }
  lablist(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/lab/labList',data);
  }
  patientcheck(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/docter_visits/checkpateint',data);
  }
  doctorvisit(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/docter_visits/create',data);
  }


 patientlist(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/docter_visits/patientlist',data);
  }
  patientsearch(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/docter_visits/tableSearch',data);
  }
  patient_history(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/docter_visits/patient_history',data);
  }
  
  patienthist(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/docter_visits/findById',data);
  }
  updates(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/lab_visits/create',data);
  }
  labupdate(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/test_report/findByPatientId',data);
  }
  labhistory(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/test_report/yearSearch',data);
  }
  lipidprofile(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/lab_visits/lipidProfileResultView',data);
  }

  labdata(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/lab/searchingForLab',data);
  }
  

  editdoc(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/docter_visits/edit',data);
  }
  editpatient(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/patient/edit',data);
  }
  labedit(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/lab/edit',data);
  }
 
  labrating(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/lab_rating/create',data);
  }
  hospitalrating(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/hospital_rating/create',data);
  }
  hospitalList(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/hospital_registation/hospitalList',data);
  }
  
  doctorrating(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/docter_rating/create',data);
  }
  child(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/patient_child/create',data);
  }
  childremove(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/patient_child/remove',data);
  }
  
  findchild(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/patient_child/getingpatientData',data);
  }
  childedit(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/patient_child/edit',data);
  }
  hospreg(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/hospital_registation/create',data);
  }
  hosprate(data?):Observable<any>{
    return this.http.post(this.baseUrl + '/hospital_rating/create',data);
  }
  quest():Observable<any>
  {
    return this.http.post(this.baseUrl + '/questions/find',""); 
  }
  

  lab_tests():Observable<any>
  {
    return this.http.post(this.baseUrl + '/test_list/requireList',""); 
  }
  findbytestid(data?):Observable<any>
  {
    return this.http.post(this.baseUrl + '/lab_tests/DataById',data); 
  }

  testbyid(data?):Observable<any>
  {
    return this.http.post(this.baseUrl + '/lab_tests/findData',data); 
  }
  readings():Observable<any>
  {
    return this.http.post(this.baseUrl + '/readings/find',""); 
  }
  readingsave(data):Observable<any>
  {
    return this.http.post(this.baseUrl + '/test_report/create',data,{headers:this.headers}); 
  }
  readingedit(data):Observable<any>
  {
    return this.http.post(this.baseUrl + '/test_report/findById',data,{headers:this.headers}); 
  }
  updateval(data):Observable<any>
  {
    return this.http.post(this.baseUrl + '/test_report/edit',data,{headers:this.headers}); 
  }
  testcreate(data):Observable<any>
  {
    return this.http.post(this.baseUrl + '/lab_tests/create',data,{headers:this.headers}); 
  }
  getmain():Observable<any>
  {
    return this.http.post(this.baseUrl + '/lab_tests/relationFalse',''); 
  }
  


  




  
  async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }


  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'please wait..',
      duration: 2000
    });
    await loading.present();
  }
}
