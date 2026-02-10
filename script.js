//complete this code
class Rectangle {

	constructor(width,height)
	{
		this._width=width;
		this._height=height;
	}

	getWidth()
	{
		return this._width;
	}

	getHeight()
	{
		return this._height;
	}

	getArea()
	{
		return this.width*this.height;
	}
}

class Square extends Animal {

	constructor(side)
	{
		super(side,side);
	}

	getPerimenter()
	{
		return 4*this.width; 
	}

	
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
