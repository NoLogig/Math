import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MatCardModule, MatSliderModule } from '@angular/material';

import { SplitScreenSkewedComponent } from './skewed/split-screen-skewed.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule, MatSliderModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: SplitScreenSkewedComponent
      }
    ])
  ],
  exports: [ SplitScreenSkewedComponent ],
  declarations: [ SplitScreenSkewedComponent ]
})
export class SplitScreensModule {}
