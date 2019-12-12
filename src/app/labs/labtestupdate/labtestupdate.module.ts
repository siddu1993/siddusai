import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LabtestupdatePage } from './labtestupdate.page';

const routes: Routes = [
  {
    path: '',
    component: LabtestupdatePage
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
  declarations: [LabtestupdatePage]
})
export class LabtestupdatePageModule {}
