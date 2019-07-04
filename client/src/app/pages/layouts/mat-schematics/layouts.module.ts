import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatTreeModule, MatIconModule, MatButtonModule, MatGridListModule, MatCardModule, MatMenuModule, MatTableModule, MatPaginatorModule,
  MatSortModule, MatToolbarModule, MatSidenavModule, MatListModule, MatInputModule, MatSelectModule, MatRadioModule, MatTabsModule, MatDividerModule, MatSliderModule
} from '@angular/material';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragdropComponent } from './dragdrop/dragdrop.component';

import { ReactiveFormsModule } from '@angular/forms';
import { AddressFormComponent } from './address-form/address-form.component';

import { LayoutModule } from '@angular/cdk/layout';
import { TreeComponent } from './tree/tree.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { NavigationComponent } from './navigation/navigation.component';

import { MatLayoutsComponent } from "./layouts.component";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AddressFormComponent,
    DashboardComponent,
    DragdropComponent,
    NavigationComponent,
    TableComponent,
    TreeComponent,
    MatLayoutsComponent
  ],
  exports: [
    MatLayoutsComponent
  ],
  imports: [
    CommonModule,

    DragDropModule, LayoutModule,
    
    MatTabsModule, MatCardModule, MatDividerModule, MatSliderModule,
    MatTreeModule, MatIconModule, MatButtonModule, MatGridListModule, MatCardModule, 
    MatMenuModule, MatTableModule, MatRadioModule, MatPaginatorModule, MatSortModule,
    MatToolbarModule, MatSidenavModule, MatListModule, MatInputModule, MatSelectModule,

    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'mat-layouts',
        component: MatLayoutsComponent
      }
    ]),
  ]
})
export class MatSchematicLayoutsModule { }
