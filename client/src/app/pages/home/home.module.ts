import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import {
  MatCardModule, MatSliderModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatTabsModule, MatListModule, MatButtonModule
} from '@angular/material';

import { HeadComponent } from './head-bar/head.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    MatCardModule, MatSliderModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatTabsModule, MatListModule, MatButtonModule
  ],
  exports: [ HeadComponent, HomeComponent ],
  declarations: [ HeadComponent, HomeComponent ]
})
export class HomeModule {}
