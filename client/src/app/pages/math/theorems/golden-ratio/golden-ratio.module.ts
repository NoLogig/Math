import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { GoldenRatioComponent } from './golden-ratio.component';
import { GoldenRectComponent } from './golden-rect/golden-rect.component';
import { MatCardModule, MatSliderModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ GoldenRatioComponent, GoldenRectComponent ],
  exports: [],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule, MatSliderModule,
    RouterModule.forRoot([
      {
        path: 'golden',
        component: GoldenRatioComponent
      }
    ])
  ]
})
export class GoldenModule {}
