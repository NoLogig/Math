import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import maths from 'src/app/services/math/utils.service';
import { ICircleParticle, IPoint } from 'src/app/services/math/interfaces/imath';

@Component({
  selector: 'nlg-node-garden',
  templateUrl: './node-garden.component.html',
  styleUrls: ['./node-garden.component.scss'],
  providers: []
})
export class NodeGardenComponent implements OnInit {

  @ViewChild('nodeGarden') canvasNodeGarden: ElementRef;

  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  cWidth: number;
  cHeight: number;

  nodeCounter: number;
  nodes: ICircleParticle[];
  maxConnectDist: number;

  constructor(public ngZone: NgZone) { }

  ngOnInit(): void {

    this.canvas = this.canvasNodeGarden.nativeElement;
    this.ctx = this.canvasNodeGarden.nativeElement.getContext('2d');

    this.cWidth = this.canvas.width = window.innerWidth;
    this.cHeight = this.canvas.height = window.innerHeight;

    this.ctx.strokeStyle = 'rgba(0, 255, 255, .9)';
    this.ctx.fillStyle = 'rgba(0, 0, 0, .8)';

    this.maxConnectDist = 100;
    this.nodeCounter = 100;

    this.nodes = this.createRndCircleShapes(this.nodeCounter, this.cWidth, this.cHeight);

    // Prevent cd memory leak
    this.ngZone.runOutsideAngular(this.render);
  }

  render = (): void => {

    this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);

    this.updateNodes(this.nodes);

    requestAnimationFrame(this.render);
  }

  createRndCircleShapes(n: number, x_Max = 50, y_Max = 50, r_Max = 8, vx_Max = 2, vy_Max = 2): ICircleParticle[] {

    let _shapes: ICircleParticle[] = [];

    for (let i = 0, len = n - 1; i < len; i++) {

      _shapes.push({
        x: Math.random() * x_Max,
        y: Math.random() * y_Max,
        r: Math.random() * r_Max + 2,
        vx: Math.random() * vx_Max - vx_Max * .5,
        vy: Math.random() * vy_Max - vy_Max * .5,
      });
    }

    return _shapes;
  }
  // Draw circle
  drawCircle(ctx: CanvasRenderingContext2D, shape: ICircleParticle): void {

    ctx.beginPath();
    ctx.arc(shape.x, shape.y, shape.r, 0, 6.29);
    ctx.fill();
    return;
  }
  // Draw line
  drawLine(ctx: CanvasRenderingContext2D, p1: IPoint, p2: IPoint): void {

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
    return;
  }
  // Update & draw shapes
  updateNodes(nodes: ICircleParticle[]): void {

    for (let i = 0, limit = nodes.length; i < limit; i++) {

      let node = nodes[i];

      node.x = maths.lock(node.x + node.vx, 0, this.cWidth);
      node.y = maths.lock(node.y + node.vy, 0, this.cHeight);

      this.drawCircle(this.ctx, node);

      this.connectAllNodes(this.nodes, i, this.maxConnectDist);
    }
    return;
  }
  // Draw lines between nodes if in range
  connectAllNodes(nodes: ICircleParticle[], currentIndex: number, maxDist: number): void {

    let node = nodes[currentIndex];

    for (let i = currentIndex + 1, limit = nodes.length; i < limit; i++) {

      let _node = nodes[i],
        dx = _node.x - node.x,
        dy = _node.y - node.y,
        dist = Math.sqrt((dx ** 2) + (dy ** 2));

      if (dist < maxDist) {

        this.ctx.lineWidth = 1 - dist / maxDist;
        this.drawLine(this.ctx, node, _node);
      }
    }
    return;
  }
}
