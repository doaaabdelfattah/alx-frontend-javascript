import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // ======> Getters

  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // ======> Setters

  set amount(value) {
    this._amount = value;
  }

  set currency(value) {
    this._currency = value;
  }
  // ======> Methods

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
