class HolbertonCourse {
  constructor(name, length, students) {
    // verify the type of attributes during object creation

    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }
    if (typeof length !== "number") {
      throw new TypeError("Length must be a number");
    }
    if (!Array.isArray(students)) {
      throw new TypeError("Students must be a an array of strings");
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }
  // Getter Methods
  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students;
  }
  // Setter Methods

  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = name;
  }
  set length(length) {
    if (typeof length !== "number") {
      throw new TypeError("Length must be a number");
    }
    this._length = length;
  }
  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError("Students must be a an array of strings");
    }
    this._students = students;
  }

}