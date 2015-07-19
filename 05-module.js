export default class Math {
  constructor() {
    this.PI    = 3.141592;
    this._sqrt = (s, x, last) => {
      return x != last ? this._sqrt(s, (x + s / x) / 2.0, x) : x;
    };
  }


  sqrt(s) {
    return this._sqrt(s, s/2.0, 0.0);
  }

  square(x) {
    return x * x;
  }
};
