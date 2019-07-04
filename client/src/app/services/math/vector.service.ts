import { IPoint } from 'src/app/services/math/interfaces/imath';

export class Vector {

  public x = 1;
  public y = 0;
  public angle: number;
  public length: number;

  /* 
    public get getX(): number {
      return this.x;
    }
    public set setX(v: number) {
      this.x = v;
    }
    public get  getY(): number {
      return this.y;
    }
    public set setY(v: number) {
      this.y = v;
  } */

  public get getAngle(): number { return Math.atan2(this.y, this.x); }
  public set setAngle(angle: number) {
    this.angle = angle;    // instead getAng
    this.x = Math.cos(angle) * this.length;
    this.y = Math.sin(angle) * this.length;
  }
  public get getLength(): number { return Math.sqrt(this.x ** 2 + this.y ** 2); }
  public set setLength(length: number) {
    this.length = length;  // instead getLen
    this.x = Math.cos(this.angle) * length;
    this.y = Math.sin(this.angle) * length;
  }

  public set addTo(v: IPoint) {
    this.x += v.x;
    this.y += v.y;
  }
  public set subtractFrom(v: IPoint) {
    this.x -= v.x;
    this.y -= v.y;
  }
  public set multiplyBy(n: number) {
    this.x *= n;
    this.y *= n;
  }
  public set divideBy(n: number) {
    this.x /= n;
    this.y /= n;
  }

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.angle = this.getAngle;
    this.length = this.getLength;
  }

}