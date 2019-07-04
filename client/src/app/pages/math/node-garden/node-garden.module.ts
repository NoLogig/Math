import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { NodeGardenComponent } from './node-garden.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: 'node-garden',
        component: NodeGardenComponent
      }
    ])
  ],
  exports: [ NodeGardenComponent ],
  declarations: [ NodeGardenComponent ]
})
export class NodeGardenModule {}
