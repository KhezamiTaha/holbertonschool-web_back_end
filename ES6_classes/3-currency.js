export default class Currency {
  constructor(code, name) {
    if (typeof (code) !== 'string') {
      throw new TypeError('Code must be a string');
    }
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  // Setter for name
  set code(newcode) {
    if (typeof newcode !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._code = newcode;
  }

  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
