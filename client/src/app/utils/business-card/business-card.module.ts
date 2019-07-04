import { NgModule } from '@angular/core';

import { MatCardModule, MatDividerModule, MatButtonModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BusinessCardComponent } from './business-card.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule, CommonModule, HttpClientModule,
    MatCardModule, MatDividerModule, MatButtonModule, MatIconModule
  ],
  exports: [BusinessCardComponent],
  declarations: [
    BusinessCardComponent
  ]
})
export class BusinessCardModule { }
