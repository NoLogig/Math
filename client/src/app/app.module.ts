import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '../environments/environment.prod';
import { ServiceWorkerModule } from '@angular/service-worker';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BusinessCardModule } from './utils/business-card/business-card.module';
import { CanvasModule } from './utils/canvas/initializer/initializer.module';
import { Gn8PlayerModule } from './pages/gn8-player/gn8-player.module';
import { GoldenModule } from './pages/math/theorems/golden-ratio/golden-ratio.module';
import { HexagonsModule } from './pages/layouts/hexagons/hexagons.module';
import { MatSchematicLayoutsModule } from './pages/layouts/mat-schematics/layouts.module';
import { HomeModule } from './pages/home/home.module';
import { NodeGardenModule } from './pages/math/node-garden/node-garden.module';
import { ParallaxModule } from './pages/layouts/parallax/parallax.module';
import { SplitScreensModule } from './pages/layouts/split-screens/split-screens.module';
import { MatVerticalTabsModule } from './pages/layouts/mat-vertical-tabs/mat-vertical-tabs.module';

import { ActiveDirective } from './utils/directives/active.directive';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent,
    ActiveDirective
  ],
  imports: [
    AppRoutingModule, BrowserModule, BrowserAnimationsModule,

    BusinessCardModule, CanvasModule, Gn8PlayerModule, GoldenModule, HexagonsModule, MatSchematicLayoutsModule, 
    HomeModule, NodeGardenModule, ParallaxModule, SplitScreensModule, MatVerticalTabsModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ ]
})
export class AppModule { }
