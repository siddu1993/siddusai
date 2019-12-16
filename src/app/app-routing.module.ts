import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'labpatienthist',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'fogotpass', loadChildren: './fogotpass/fogotpass.module#FogotpassPageModule' },
  { path: 'medicaldetails', loadChildren: './medicaldetails/medicaldetails.module#MedicaldetailsPageModule' },
  { path: 'patiandocvisits', loadChildren: './patiandocvisits/patiandocvisits.module#PatiandocvisitsPageModule' },
  { path: 'labvisits', loadChildren: './labs/labvisits/labvisits.module#LabvisitsPageModule' },
  { path: 'hosprate', loadChildren: './hosprate/hosprate.module#HospratePageModule' },
  { path: 'labrate', loadChildren: './labs/labrate/labrate.module#LabratePageModule' },
  { path: 'lipidprofile', loadChildren: './lipidprofile/lipidprofile.module#LipidprofilePageModule' },
  { path: 'docregiser', loadChildren: './doctor/docregiser/docregiser.module#DocregiserPageModule' },
  { path: 'chckpdetails', loadChildren: './doctor/chckpdetails/chckpdetails.module#ChckpdetailsPageModule' },
  { path: 'patentmedicalhistory', loadChildren: './doctor/patentmedicalhistory/patentmedicalhistory.module#PatentmedicalhistoryPageModule' },
  { path: 'labinformation', loadChildren: './labs/labinformation/labinformation.module#LabinformationPageModule' },
  { path: 'labtestupdate', loadChildren: './labs/labtestupdate/labtestupdate.module#LabtestupdatePageModule' },
  { path: 'docrates', loadChildren: './doctor/docrates/docrates.module#DocratesPageModule' },
  { path: 'persoaldoc', loadChildren: './doctor/persoaldoc/persoaldoc.module#PersoaldocPageModule' },
  { path: 'addnewlab', loadChildren: './labs/addnewlab/addnewlab.module#AddnewlabPageModule' },
  { path: 'editlab', loadChildren: './labs/editlab/editlab.module#EditlabPageModule' },
  { path: 'addpersons', loadChildren: './addpersons/addpersons.module#AddpersonsPageModule' },
  { path: 'personslist', loadChildren: './personslist/personslist.module#PersonslistPageModule' },
  { path: 'hospitalreg', loadChildren: './hospitalreg/hospitalreg.module#HospitalregPageModule' },
  { path: 'editchild', loadChildren: './editchild/editchild.module#EditchildPageModule' },
  { path: 'editpatient', loadChildren: './editpatient/editpatient.module#EditpatientPageModule' },
  { path: 'pateintuserhist', loadChildren: './pateintuserhist/pateintuserhist.module#PateintuserhistPageModule' },
  { path: 'docedit', loadChildren: './doctor/docedit/docedit.module#DoceditPageModule' },
  { path: 'selectable', loadChildren: './selectable/selectable.module#SelectablePageModule' },
  { path: 'labpatienthist', loadChildren: './labpatienthist/labpatienthist.module#LabpatienthistPageModule' },
  { path: 'viewlipid', loadChildren: './doctor/viewlipid/viewlipid.module#ViewlipidPageModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
  { path: 'editchdetails', loadChildren: './doctor/editchdetails/editchdetails.module#EditchdetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
