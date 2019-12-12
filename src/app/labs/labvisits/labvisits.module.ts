import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LabvisitsPage } from './labvisits.page';
import { LipidprofilePageModule } from 'src/app/lipidprofile/lipidprofile.module';

const routes: Routes = [
  {
    path: '',
    component: LabvisitsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LabvisitsPage]
})
export class LabvisitsPageModule {}
