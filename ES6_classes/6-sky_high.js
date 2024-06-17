import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof (floors) !== 'number') {
      throw new TypeError('floors must be a Number');
    }
    this._floors = floors;
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

  get floors() {
    return this._floors;
  }

  // Setter for floors
  set floors(newfloors) {
    if (typeof (newfloors) !== 'number') {
      throw new TypeError('floors must be a Number');
    }
    this._floors = newfloors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
