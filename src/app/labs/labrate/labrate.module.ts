import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LabratePage } from './labrate.page';

const routes: Routes = [
  {
    path: '',
    component: LabratePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,

    RouterModule.forChild(routes)
  ],
  declarations: [LabratePage]
})
export class LabratePageModule {}
