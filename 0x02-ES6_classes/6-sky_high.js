import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
    this._sqft = sqft;
  }

  // ======> Getter method for the _sqft property
  get sqft() {
    return this._sqft;
  }

  // ======> Getter method for the _floors property
  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
