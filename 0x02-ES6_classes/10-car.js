export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }
  /* Car defines a static getter for Symbol.species that returns this. This means by default, Car methods that use Symbol.species will use Car for creating new instances.
  The cloneCar method uses this.constructor[Symbol.species] to determine the constructor to use for creating a new instance.
  this.constructor refers to the constructor of the current instance. If this is an instance of a subclass of Car, this.constructor will be the subclass constructor.
  this.constructor[Symbol.species] accesses the Symbol.species property of the constructor, which by default is Car, but can be overridden in subclasses.
  
  */

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species];
  }
}
