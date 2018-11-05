
export class VectorsService {

    private _x = 1;
    private _y = 0;

    v;

    constructor(x: number, y: number) {

        this.v.getX = () => this.v.x;
        this.v.setX = (n) => this.v.x = n;

        this.setX(x);
        this.setY(y);
    }

    getX = () => this._x;
    setX(value) { this._x = value; }

    getY() { return this._y; }
    setY(value) { this._y = value; }


    getAngle() { return Math.atan2(this._y, this._x); }
    setAngle(angle) {
        let length = this.getLength();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    }

    getLength() { return Math.sqrt(this._x * this._x + this._y * this._y); }
    setLength(length) {
        let angle = this.getAngle();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    }

    // add(v2) { return this.create(this._x + v2.getX(), this._y + v2.getY()); }
    // subtract(v2) { return this.create(this._x - v2.getX(), this._y - v2.getY()); }
    // multiply(val) { return this.create(this._x * val, this._y * val); }
    // divide(val) { return this.create(this._x / val, this._y / val); }

    addTo(v2) {
        this._x += v2.getX();
        this._y += v2.getY();
    }

    subtractFrom(v2) {
        this._x -= v2.getX();
        this._y -= v2.getY();
    }

    multiplyBy(val) {
        this._x *= val;
        this._y *= val;
    }

    divideBy(val) {
        this._x /= val;
        this._y /= val;
    }
}
