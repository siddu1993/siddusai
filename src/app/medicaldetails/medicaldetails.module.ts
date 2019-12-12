import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MedicaldetailsPage } from './medicaldetails.page';
import { EditpatientPageModule } from '../editpatient/editpatient.module';

const routes: Routes = [
  {
    path: '',
    component: MedicaldetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MedicaldetailsPage]
})
export class MedicaldetailsPageModule {}
