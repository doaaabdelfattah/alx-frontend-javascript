export default class Building {
  constructor(sqft) {
    /* Check if the current constructor is not Building
    and if the evacuationWarningMessage method is not defined
    */
    if (
      this.constructor !== Building
      && typeof this.evacuationWarningMessage !== 'function'
    ) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }

    // Initialize the _sqft property with the given value or default to 0
    this._sqft = sqft;
  }

  // ======> Getter method for the _sqft property
  get sqft() {
    return this._sqft;
  }
}
