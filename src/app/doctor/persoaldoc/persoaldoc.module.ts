import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from 'ionic-selectable';

import { PersoaldocPage } from './persoaldoc.page';

const routes: Routes = [
  {
    path: '',
    component: PersoaldocPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,

    RouterModule.forChild(routes)
  ],
  declarations: [PersoaldocPage]
})
export class PersoaldocPageModule {}
