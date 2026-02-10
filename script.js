//complete this code
class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // Use the 'get' keyword to create getter methods
  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  getArea() {
    return this._width * this._height;
  }
}

// Square inherits from Rectangle
class Square extends Rectangle {
  constructor(side) {
    // Call the parent constructor with side for both width and height
    super(side, side);
  }

  getPerimeter() {
    // You can use this.width (the getter) or this._width
    return 4 * this.width;
  }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;