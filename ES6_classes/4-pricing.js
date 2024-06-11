import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('amount must be a Number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  // Setter for name
  set amount(newamount) {
    if (typeof (newamount) !== 'number') {
      throw new TypeError('amount must be a Number');
    }
    this._amount = newamount;
  }

  get currency() {
    return this._currency;
  }

  // Setter for name
  set currency(newcurrency) {
    if (!(newcurrency instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._currency = newcurrency;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
