//complete this code
class Rectangle {

	construct(width,height)
	{
		this.width=width;
		this.height=height;
	}

	getWidth()
	{
		return this.width;
	}

	getHeight()
	{
		return this.height;
	}

	getArea()
	{
		return this.width*this.height;
	}
}

class Square extends Animal {

	construct(side)
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
