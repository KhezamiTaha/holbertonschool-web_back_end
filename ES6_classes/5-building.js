export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building
      && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }

    if (typeof (sqft) !== 'number') {
      throw new TypeError('sqft must be a Number');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // Setter for name
  set sqft(newsqft) {
    if (typeof (newsqft) !== 'number') {
      throw new TypeError('sqft must be a Number');
    }
    this._sqft = newsqft;
  }
}
