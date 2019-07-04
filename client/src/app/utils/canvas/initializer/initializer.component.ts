
import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { CanvasPaintToolsService } from '../tools/paint-tools.service';
import { Particle } from 'src/app/services/math/particle.service';

export interface ICanvas {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
}

@Component({
  selector: 'nlg-canvas-init',
  templateUrl: './initializer.component.html',
  styleUrls: ['./initializer.component.scss']
})
export class CanvasInitComponent implements OnInit {

  @ViewChild('base') baseCanvas: ElementRef;
  @ViewChild('overlay') overlayCanvas: ElementRef;

  cbase: ICanvas;

  // Circle arrange
  c: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  width: number;
  height: number;
  // Center
  radius = 200;
  centerX: number;
  centerY: number;
  // Setup
  angle = 0;
  numObjects = 6;
  slice: number;
  speed: .01;
  // Point tmp
  x: number;
  y: number;

  particles: Particle[];
  numParticles = 100;

  constructor(public canu: CanvasPaintToolsService, public ngZone: NgZone) { }

  ngOnInit(): void {

    this.initBase();
    // this.initOverlay();

    let par = []

    for (let i = 0; i < this.numParticles; i += 1) {
      par.push(new Particle(
        this.width / 2,
        this.height / 2,
        Math.random() * 4 + 1,
        Math.random() * Math.PI * 2)
      );
    }
    this.particles = par;

    console.log(this.particles);

    this.canvasAnimate();
  }

  initBase = (): void => {

    this.c = this.baseCanvas.nativeElement;
    this.ctx = this.c.getContext('2d');

    this.width = this.c.width = window.innerWidth;
    this.height = this.c.height = window.innerHeight;

    this.ctx.strokeStyle = 'rgba(0, 255, 255, .9)';
    this.ctx.fillStyle = 'rgba(0, 0, 0, .8)';
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.fill();

    this.centerX = this.width / 2;
    this.centerY = this.height / 2;
    this.slice = Math.PI * 2 / this.numObjects;
  }

  initOverlay = (): void => {

    this.canu.drawCanvasGrid(this.ctx, this.width, this.height, 39);
    this.canu.drawCanvasCenter(this.ctx);
  }

  canvasAnimate = (): void => {
    // Prevent memory leak
    this.ngZone.runOutsideAngular(this.render);
  }

  render = (): void => {

    this.ctx.clearRect(0, 0, this.width, this.height);

    // updates
      for (let i = 0; i < this.numParticles; i += 1) {
      let p = this.particles[i];
      p.update();

      this.ctx.beginPath();
      this.ctx.arc(p.position.x, p.position.y, 10, 0, Math.PI * 2, false);
      this.ctx.fill();
    }
    
    requestAnimationFrame(this.render);
  }

  circleRanger() {

    for (let i = 0; i < this.numObjects; i += 1) {
      
      this.angle = i * this.slice;
      this.x = this.centerX + Math.cos(this.angle) * this.radius;
      this.y = this.centerY + Math.sin(this.angle) * this.radius;
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);
      this.ctx.fill();
    }
  }

}
