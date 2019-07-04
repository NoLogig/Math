import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  MatCardModule, MatSliderModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatTabsModule,
  MatListModule, MatButtonModule
} from '@angular/material';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatVerticalTabsComponent } from './mat-vertical-tabs.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatCardModule, MatSliderModule, MatSidenavModule, MatToolbarModule, MatIconModule,
    MatTabsModule, MatListModule, MatButtonModule,
    RouterModule.forRoot([
      {
        path: 'vertical-tabs',
        component: MatVerticalTabsComponent
      }
    ])
  ],
  exports: [ MatVerticalTabsComponent ],
  declarations: [ MatVerticalTabsComponent ]
})
export class MatVerticalTabsModule {}
