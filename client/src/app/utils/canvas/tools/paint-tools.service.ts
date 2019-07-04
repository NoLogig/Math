import { Injectable } from '@angular/core';
import { IPoint, IRectParticle, ICircleParticle, IRGBA } from 'src/app/services/math/interfaces/imath';
import maths from 'src/app/services/math/utils.service';

@Injectable({
  providedIn: 'root'
})
export class CanvasPaintToolsService {

  public grid = {
    startMove: () => {},
    stopMove: () => {}
  };

  constructor() { }

  drawLine(ctx: CanvasRenderingContext2D, p1: IPoint, p2: IPoint): void {

    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.closePath();
    ctx.stroke();
    return;
  }

  drawRect(ctx: CanvasRenderingContext2D, shape: IRectParticle): void {

    ctx.fillRect(shape.x, shape.y, shape.w, shape.h);
    ctx.fill();
    return;
  }

  drawCircle(ctx: CanvasRenderingContext2D, shape: ICircleParticle): void {

    ctx.beginPath();
    ctx.arc(shape.x, shape.y, shape.r, 0, 6.29);
    ctx.closePath();
    ctx.fill();
    return;
  }

  drawHexagon(ctx: CanvasRenderingContext2D, x: number, y: number, size: number): void {

    let slice = Math.PI * 2 / 6;
    x = x + Math.cos(0) * size;
    y = y + Math.sin(0) * size;
    
    ctx.beginPath();
    ctx.moveTo(x, y);

    for (let i = 1; i < 6; i++) {
        let r = i * slice;
        x = x + Math.cos(r) * size;
        y = y + Math.sin(r) * size;
        ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
  }

  drawCanvasCenter(ctx: CanvasRenderingContext2D, strokeStyle = '#f3f') {
    ctx.strokeStyle = strokeStyle;
    ctx.beginPath();
    ctx.moveTo(ctx.canvas.width / 2, 0);
    ctx.lineTo(ctx.canvas.width / 2, ctx.canvas.height);
    ctx.moveTo(0, ctx.canvas.height / 2);
    ctx.lineTo(ctx.canvas.width, ctx.canvas.height / 2);
    ctx.closePath();
    ctx.stroke();
  }

  drawCanvasGrid(ctx: CanvasRenderingContext2D, width: number, height: number, gridSize: number, strokeStyle = '#0ff7'): void {
    ctx.strokeStyle = strokeStyle;
    gridSize--;
    ctx.beginPath();
    for (let x = gridSize - 1, y = gridSize; x <= width || y <= height; x += gridSize, y += gridSize) {
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);

      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
    }
    ctx.closePath();
    ctx.stroke();
    return;
  }
  
  gridMove(ctx: CanvasRenderingContext2D, event: MouseEvent, gridSize: number) {

    let x = maths.roundNearest(event.clientX, gridSize),
        y = maths.roundNearest(event.clientY, gridSize);

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }

  attachEvent(ele: HTMLElement, event: string, fn: (e: KeyboardEvent | MouseEvent) => void) {
    ele.addEventListener(event, fn);
  }
  detachEvent(ele: HTMLElement, event: string, fn: (e: KeyboardEvent | MouseEvent) => void) {
    ele.removeEventListener(event, fn);
  }

  /**
   * Get RGBA of pixel at x/y coordinates
   * @param imgData
   *+  `data`:`number[]` imgData in RGBA order as 0 to 255 ints
   *+  `height`:`number` Height dimension of `data` in pixels
   *+  `width`:`number` Width dimension of `data` in pixels
   *
   * @returns Object containing RGBA integers of pixel at x/y coordinate
   * @example One Pixel = 4 Elements [R, G, B, A];
   *              index = ( y * width + x ) * 4;
   *
   *   red   = index;
   *   green = index + 1;
   *   blue  = index + 2;
   *   alpha = index + 3;
   *
   */
  getPixel(x: number, y: number, imgData: ImageData): IRGBA {

    let index = (y * imgData.width + x) * 4,
      r = imgData.data[index++],
      g = imgData.data[index++],
      b = imgData.data[index++],
      a = imgData.data[index] / 255;

    return { r, g, b, a };
  }

}
