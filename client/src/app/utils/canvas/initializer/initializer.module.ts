import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CanvasInitComponent } from './initializer.component';


@NgModule({

  declarations: [
    CanvasInitComponent
  ],
  exports: [
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: 'canvas-init',
        component: CanvasInitComponent
      }
    ])
  ]
})
export class CanvasModule { }
