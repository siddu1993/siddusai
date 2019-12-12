import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LabpatienthistPage } from './labpatienthist.page';

const routes: Routes = [
  {
    path: '',
    component: LabpatienthistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LabpatienthistPage]
})
export class LabpatienthistPageModule {}
