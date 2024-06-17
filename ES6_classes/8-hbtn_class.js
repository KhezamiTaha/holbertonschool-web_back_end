export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Custom type conversion to Number
  valueOf() {
    return this._size;
  }

  // Custom type conversion to String
  toString() {
    return this._location;
  }
}
