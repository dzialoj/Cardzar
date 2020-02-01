import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardInfoPageRoutingModule } from './card-info-routing.module';

import { CardInfoPage } from './card-info.page';
import { PriceHistoryGraphComponent } from '../price-history-graph/price-history-graph.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardInfoPageRoutingModule
  ],
  exports: [CardInfoPage],
  declarations: [CardInfoPage,PriceHistoryGraphComponent]
})
export class CardInfoPageModule {}
