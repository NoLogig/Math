import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { HexagonsComponent } from './hexagons.component';
import { HexBeforeAfterBorderArrowComponent } from './hex-before-after-border-arrow/hex-before-after-border-arrow.component';
import { HexLinearGradientComponent } from './hex-linear-gradient/hex-linear-gradient.component';
import { HexBeforeAfterBorderComponent } from './hex-before-after-border-transform/hex-before-after-border.component';
import { HexScewedComponent } from './hex-scewed/hex-scewed.component';
import { HexSvgComponent } from './hex-svg/hex-svg.component';
import { HexTransformComponent } from './hex-transform/hex-transform.component';
import { HexUniCodeComponent } from './hex-uni-code/hex-uni-code.component';
import { MatTabsModule, MatCardModule, MatDividerModule, MatSliderModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    MatTabsModule, MatCardModule, MatDividerModule, MatSliderModule,
    RouterModule.forRoot([
      {
        path: 'hexagon',
        component: HexagonsComponent
      }
    ])
  ],
  exports: [],
  declarations: [
    HexagonsComponent, HexBeforeAfterBorderArrowComponent, HexLinearGradientComponent, HexBeforeAfterBorderComponent,
    HexScewedComponent, HexSvgComponent, HexTransformComponent, HexUniCodeComponent
  ]
})
export class HexagonsModule { }
