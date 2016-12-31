

/**
 * Namespace where live all classes and function related to Math.
 *
 * @namespace
 */
var ALMath = {
	version : "0.2 {Angel Luis Math Library}",
	license: "The MIT License (MIT) \
		\
		Copyright (c) <year> <copyright holders> \
		\
		Permission is hereby granted, free of charge, to any person obtaining a copy \
		of this software and associated documentation files (the 'Software'), to deal \
		in the Software without restriction, including without limitation the rights \
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell \
		copies of the Software, and to permit persons to whom the Software is \
		furnished to do so, subject to the following conditions: \
		\
		The above copyright notice and this permission notice shall be included in \
		all copies or substantial portions of the Software. \
		\
		THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR \
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, \
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE \
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER \
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, \
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN \
		THE SOFTWARE.",
	degToRad : function (deg){
		return deg * (Math.PI/180);
	},
	radToDeg : function(rad){
		return rad * (180/Math.PI);
	}
}

/**
 * Class that represent a 2 dimensional vector.
 *
 * @class
 * @author Ángel Luis Perales Gómez

 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 */
ALMath.Vector2 = function(x,y){
	this.x = x || 0;
	this.y = y || 0;
}

ALMath.Vector2.prototype = {
	/**
   	 * Function to add vector v.
   	 *
   	 * @param {ALMath.Vector2} v - Vector to add.
   	 *
   	 * @returns {ALMath.Vector2} - A new vector which is the sum between this and v.
   	 */
	add : function(v){
		return new ALMath.Vector2(this.x+v.x, this.y+v.y);
	},

	/**
   	 * Function to add scalar n.
   	 *
   	 * @param {number} n - Scalar to add.
   	 *
   	 * @returns {ALMath.Vector2} - A new vector which is the sum between each component of this and scalar n.
   	 */
	addScalar : function(n){
		return new ALMath.Vector2(this.x+n, this.y+n);
	},

	/**
   	 * Function to substract vector v.
   	 *
   	 * @param {ALMath.Vector2} v - Vector to substract.
   	 *
   	 * @returns {ALMath.Vector2} - A new vector which is the substract between this and v.
   	 */
	sub : function(v){
		return new ALMath.Vector2(this.x-v.x, this.y-v.y);
	},

	/**
   	 * Function to substract scalar n.
   	 *
   	 * @param {number} v - Scalar to substract.
   	 *
   	 * @returns {ALMath.Vector2} - A new vector which is the substract between each component of this and scalar n.
   	 */
	subScalar : function(n){
		return new ALMath.Vector2(this.x-n, this.y-n);
	},

	/**
   	 * Function to multipy by vector v.
   	 *
   	 * @param {ALMath.Vector2} v - Vector to multiply.
   	 *
   	 * @returns {ALMath.Vector2} - A new vector which is the multiplication between this and v.
   	 */
	multiply : function(v){
		return new ALMath.Vector2(this.x*v.x, this.y*v.y);
	},

	/**
   	 * Function to multiply by scalar n.
   	 *
   	 * @param {number} n - Scalar to multiply.
   	 *
   	 * @returns {ALMath.Vector2} - A new vector which is the multiplication between each component of this and scalar n.
   	 */
	multiplyByScalar : function(n){
		return new ALMath.Vector2(this.x*n, this.y*n);
	},

	/**
   	 * Function to divide by vector v.
   	 *
   	 * @param {ALMath.Vector2} v - Vector to divide.
   	 *
   	 * @throws Division by zero.
   	 *
   	 * @returns {ALMath.Vector2} - A new vector which is the divison between this and v.
   	 */
	divide : function(v){
		if (v.x === 0 || v.y === 0){
			throw new Error("ALMath.Vector2.divide(v): Division by zero.")
		}
		return new ALMath.Vector2(this.x/v.x, this.y/v.y);
	},

	/**
   	 * Function to divide by scalar n.
   	 *
   	 * @param {number} n - Scalar to divide.
   	 *
   	 * @throws Division by zero.
   	 *
   	 * @returns {ALMath.Vector2} - A new vector which is the division between each component of this and scalar n.
   	 */
	divideByScalar : function(n){
		if (n === 0){
			throw new Error("ALMath.Vector2.divideByScalar(n): Division by zero.")
		}
		return new ALMath.Vector2(this.x/n, this.y/n);
	},

	/**
   	 * Function to clamp between min and max.
   	 *
   	 * @param {number} min - Min value.
   	 * @param {number} max - Max value.
   	 *
   	 * @returns {ALMath.Vector2} - A new vector clamped between min and max.
   	 */
	clamp : function(min, max){
		var x=this.x,y=this.y;
		if ( this.x < min.x ) {
			x = min.x;
		} else if ( this.x > max.x ) {
			x = max.x;
		}

		if ( this.y < min.y ) {
			y = min.y;
		} else if ( this.y > max.y ) {
			y = max.y;
		}

		return new ALMath.Vector2(x,y);
	},

	/**
   	 * Function to floor vector.
   	 *
   	 * @returns {ALMath.Vector2} - A new vector floored.
   	 */
	floor: function () {
		var x = Math.floor( this.x );
		var y = Math.floor( this.y );

		return ALMath.Vector2(this.x,this.y);
	},

	/**
   	 * Function to ceil vector.
   	 *
   	 * @returns {ALMath.Vector2} - A new vector ceiled.
   	 */
	ceil: function () {
		var x = Math.ceil( this.x );
		var y = Math.ceil( this.y );

		return ALMath.Vector2(this.x,this.y);
	},

	/**
   	 * Function to round between min and max.
   	 *
   	 * @returns {ALMath.Vector2} - A new vector rounded.
   	 */
	round: function () {
		var x = Math.round( this.x );
		var x = Math.round( this.y );

		return ALMath.Vector2(this.x,this.y);
	},

	/**
   	 * Function to negate vector.
   	 *
   	 * @returns {ALMath.Vector2} - A new vector with each component negate.
   	 */
	negate: function () {
		return ALMath.Vector2(-this.x,-this.y);
	},

	/**
   	 * Function to compute dot product.
   	 *
   	 * @param {ALMath.Vector2} v - Vector to do the dot product.
   	 *
   	 * @returns {number} - Dot product between this and v.
   	 */
	dot: function ( v ) {
		return this.x * v.x + this.y * v.y;
	},

	/**
   	 * Function to compute length of the vector.
   	 *
   	 * @returns {number} - Vector length.
   	 */
	length: function () {
		return Math.sqrt( this.x * this.x + this.y * this.y );
	},

	/**
   	 * Function to normalize vector.
   	 *
   	 * @returns {number} - A new vector normalized.
   	 */
	normalize: function () {
		return this.divideByScalar( this.length() );
	},

	/**
   	 * Function to compute distance between vectors.
   	 *
   	 * @param {ALMath.Vector2} v - Vector to compute the distance.
   	 *
   	 * @returns {number} - Distance between this and v.
   	 */
	distanceTo: function ( v ) {
		return Math.sqrt( (this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y) );
	},

	/**
   	 * Function to set the vector components.
   	 *
   	 * @param {number} x - X component.
   	 * @param {number} y - Y component.
   	 *
   	 * @returns {ALMath.Vector2} - this.
   	 */
	set : function(x, y){
		this.x = x;
		this.y = y;

		return this;
	},

	/**
   	 * Function to clone vectors.
   	 *
   	 * @returns {ALMath.Vector2} - A copy of this.
   	 */
	clone : function(){
		return new ALMath.Vector2(this.x, this.y);
	},

	/**
   	 * Function to compare vectors.
   	 *
   	 * @param {ALMath.Vector2} v - Vector to compare.
   	 *
   	 * @returns {boolean} - True if this and v are equals, false otherwise.
   	 */
	equals : function (v){
		if ((!v instanceof ALMath.Vector2)){
			return false;
		}
		return (this.x === v.x) && (this.y === v.y);
	}
}

/**
 * Class that represent a 3 dimensional vector.
 *
 * @class
 * @author Ángel Luis Perales Gómez

 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} z - Z coordinate.
 */
ALMath.Vector3 = function(x,y,z){
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
}

ALMath.Vector3.prototype = {

	/**
   	 * Function to add vector v.
   	 *
   	 * @param {ALMath.Vector3} v - Vector to add.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector which is the sum between this and v.
   	 */
	add : function(v){
		return new ALMath.Vector3(this.x+v.x, this.y+v.y, this.z+v.z);
	},

	/**
   	 * Function to add scalar n.
   	 *
   	 * @param {number} n - Scalar to add.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector which is the sum between each component of this and scalar n.
   	 */
	addScalar : function(n){
		return new ALMath.Vector3(this.x+n, this.y+n, this.z+n);
	},

	/**
   	 * Function to substract vector v.
   	 *
   	 * @param {ALMath.Vector3} v - Vector to substract.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector which is the substract between this and v.
   	 */
	sub : function(v){
		return new ALMath.Vector3(this.x-v.x, this.y-v.y, this.z-v.z);
	},

	/**
   	 * Function to substract scalar n.
   	 *
   	 * @param {number} n - Scalar to substract.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector which is the substract between each component of this and scalar n.
   	 */
	subScalar : function(n){
		return new ALMath.Vector3(this.x-n, this.y-n, this.z-n);
	},

	/**
   	 * Function to multipy by vector v.
   	 *
   	 * @param {ALMath.Vector3} v - Vector to multiply.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector which is the multiplication between this and v.
   	 */
	multiply : function(v){
		return new ALMath.Vector3(this.x*v.x, this.y*v.y, this.z*v.z);
	},

	/**
   	 * Function to multiply by scalar n.
   	 *
   	 * @param {number} n - Scalar to multiply.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector which is the multiplication between each component of this and scalar n.
   	 */
	multiplyByScalar : function(n){
		return new ALMath.Vector3(this.x*n, this.y*n, this.z*n);
	},

	/**
   	 * Function to divide by vector v.
   	 *
   	 * @param {ALMath.Vector3} v - Vector to divide.
   	 *
   	 * @throws Division by zero.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector which is the divison between this and v.
   	 */
	divide : function(v){
		if (v.x === 0 || v.y === 0 || v.z === 0){
			throw new Error("ALMath.Vector3.divide(v): Division by zero.")
		}
		return new ALMath.Vector3(this.x/v.x, this.y/v.y, this.z/v.z);
	},

	/**
   	 * Function to divide by scalar n.
   	 *
   	 * @param {number} n - Scalar to divide.
   	 *
   	 * @throws Division by zero.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector which is the division between each component of this and scalar n.
   	 */
	divideByScalar : function(n){
		if (n === 0){
			throw new Error("ALMath.Vector3.divideByScalar(n): Division by zero.")
		}
		return new ALMath.Vector3(this.x/n, this.y/n, this.z/n);
	},

	/**
   	 * Function to clamp between min and max.
   	 *
   	 * @param {number} min - Min value.
   	 * @param {number} max - Max value.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector clamped between min and max.
   	 */
	clamp : function(min, max){
		var x = this.x;
		var y = this.y;
		var z = this.z;
		if ( this.x < min.x ) {
			x = min.x;
		} else if ( this.x > max.x ) {
			x = max.x;
		}

		if ( this.y < min.y ) {
			y = min.y;
		} else if ( this.y > max.y ) {
			y = max.y;
		}

		if ( this.z < min.z ) {
			z = min.z;
		} else if ( this.z > max.z ) {
			z = max.z;
		}

		return new ALMath.Vector3(x,y,z);
	},

	/**
   	 * Function to floor vector.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector floored.
   	 */
	floor : function () {
		var x = Math.floor( this.x );
		var y = Math.floor( this.y );
		var z = Math.floor( this.z );

		return new ALMath.Vector3(x,y,z);
	},

	/**
   	 * Function to ceil vector.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector ceiled.
   	 */
	ceil : function () {
		var x = Math.ceil( this.x );
		var y = Math.ceil( this.y );
		var z = Math.ceil( this.z );

		return new ALMath.Vector3(x,y,z);
	},

	/**
   	 * Function to round between min and max.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector rounded.
   	 */
	round : function () {
		var x = Math.round( this.x );
		var y = Math.round( this.y );
		var z = Math.round( this.z );

		return new ALMath.Vector3(x,y,z);
	},

	/**
   	 * Function to negate vector.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector with each component negate.
   	 */
	negate : function () {
		return new ALMath.Vector3(-this.x, -this.y, -this.z);
	},

	/**
   	 * Function to compute dot product.
   	 *
   	 * @param {ALMath.Vector3} v - Vector to do the dot product.
   	 *
   	 * @returns {number} - Dot product between this and v.
   	 */
	dot : function ( v ) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	},

	/**
   	 * Function to compute cross product.
   	 *
   	 * @param {ALMath.Vector3} v - Vector to do the cross product.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector with the cross product between this and v.
   	 */
	cross : function(v){
		var x = this.x, y = this.y, z = this.z;

		var nx = y * v.z - z * v.y;
		var ny = z * v.x - x * v.z;
		var nz = x * v.y - y * v.x;

		return new ALMath.Vector3(nx,ny,nz);
	},

	/**
   	 * Function to compute length of the vector.
   	 *
   	 * @returns {number} - Vector length.
   	 */
	length : function () {
		// Maybe it could be : return Math.sqrt( this.dot(this) );
		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );
	},

	/**
   	 * Function to compute square length of the vector.
   	 *
   	 * @returns {number} - Vector square length.
   	 */
	squareLength : function () {
		// Maybe it could be : return this.dot(this);
		return this.x * this.x + this.y * this.y + this.z * this.z;
	},

	/**
   	 * Function to normalize vector.
   	 *
   	 * @returns {number} - A new vector normalized.
   	 */
	normalize : function () {
		return this.divideByScalar( this.length() );
	},

	/**
   	 * Function to compute distance between vectors.
   	 *
   	 * @param {ALMath.Vector3} v - Vector to compute the distance.
   	 *
   	 * @returns {number} - Distance between this and v.
   	 */
	distanceTo : function ( v ) {
		return Math.sqrt( (this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y) + (this.z - v.z) * (this.z - v.z ));
	},

	/**
   	 * Function to set the vector components.
   	 *
   	 * @param {number} x - X component.
   	 * @param {number} y - Y component.
   	 * @param {number} z - Z component.
   	 *
   	 * @returns {ALMath.Vector3} - this.
   	 */
	set : function(x, y, z){
		this.x = x;
		this.y = y;
		this.z = z;
	},

	/**
   	 * Function to get the vector in format that WebGL understands.
   	 *
   	 * @returns {Float32Array} - A Float32Array with x, y and z.
   	 */
	getForGL : function (){
		return new Float32Array([this.x, this.y, this.z]);
	},

	/**
   	 * Function to clone vectors.
   	 *
   	 * @returns {ALMath.Vector3} - A copy of this.
   	 */
	clone : function(){
		return new ALMath.Vector3(this.x, this.y, this.z);
	},

	/**
   	 * Function to compare vectors.
   	 *
   	 * @param {ALMath.Vector3} v - Vector to compare.
   	 *
   	 * @returns {boolean} - true if this and v are equals, false otherwise.
   	 */
	equals : function (v){
		if (!(v instanceof ALMath.Vector3)){
			return false;
		}
		return (this.x === v.x) && (this.y === v.y) && (this.z === v.z);
	}
}


/**
 * Class that represent a 4 dimensional vector.
 *
 * @class
 * @author Ángel Luis Perales Gómez

 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} z - Z coordinate.
 * @param {number} w - W coordinate.
 */
ALMath.Vector4 = function(x,y,z,w){
	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
	this.w = w===undefined?1:w;
}

ALMath.Vector4.prototype = {

	/**
   	 * Function to add vector v.
   	 *
   	 * @param {ALMath.Vector4} v - vector to add.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector which is the sum between this and v.
   	 */
	add : function(v){
		return new ALMath.Vector4(this.x+v.x,this.y+v.y,this.z+v.z,this.w+v.w);
	},

	/**
   	 * Function to add scalar n.
   	 *
   	 * @param {number} n - Scalar to add.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector which is the sum between each component of this and scalar n.
   	 */
	addScalar : function(n){
		return new ALMath.Vector4(this.x+n,this.y+n,this.z+n,this.w+n);
	},

	/**
   	 * Function to substract vector v.
   	 *
   	 * @param {ALMath.Vector4} v - Vector to substract.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector which is the substract between this and v.
   	 */
	sub : function(v){
		return new ALMath.Vector4(this.x-v.x,this.y-v.y,this.z-v.z,this.w-v.w);
	},

	/**
   	 * Function to substract scalar n.
   	 *
   	 * @param {number} n - Scalar to substract.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector which is the substract between each component of this and scalar n.
   	 */
	subScalar : function(n){
		return new ALMath.Vector4(this.x-n,this.y-n,this.z-n,this.w-n);
	},

	/**
   	 * Function to multipy by vector v.
   	 *
   	 * @param {ALMath.Vector4} v - Vector to multiply.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector which is the multiplication between this and v.
   	 */
	multiply : function(v){
		return new ALMath.Vector4(this.x*v.x,this.y*v.y,this.z*v.z,this.w*v.w);
	},

	/**
   	 * Function to multiply by scalar n.
   	 *
   	 * @param {number} n - Scalar to multiply.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector which is the multiplication between each component of this and scalar n.
   	 */
	multiplyByScalar : function(n){
		return new ALMath.Vector4(this.x*n,this.y*n,this.z*n,this.w*n);
	},

	/**
   	 * Function to divide by vector v.
   	 *
   	 * @param {ALMath.Vector4} v - Vector to divide.
   	 *
   	 * @throws Division by zero.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector which is the divison between this and v.
   	 */
	divide : function(v){
		if (v.x === 0 || v.y === 0 || v.z === 0 || v.w === 0){
			throw new Error("ALMath.Vector4.divide(v): Division by zero.")
		}
		return new ALMath.Vector4(this.x/v.x,this.y/v.y,this.z/v.z,this.w/v.w);
	},

	/**
   	 * Function to divide by scalar n.
   	 *
   	 * @param {number} n - Scalar to divide.
   	 *
   	 * @throws Division by zero.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector which is the division between each component of this and scalar n.
   	 */
	divideByScalar : function(n){
		if (n === 0){
			throw new Error("ALMath.Vector4.divideByScalar(n): Division by zero.")
		}
		return new ALMath.Vector4(this.x/n,this.y/n,this.z/n,this.w/n);
	},

	/**
   	 * Function to clamp between min and max.
   	 *
   	 * @param {number} min - Min value.
   	 * @param {number} max - Max value.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector clamped between min and max.
   	 */
	clamp : function(min, max){
		var x = this.x;
		var y = this.y;
		var z = this.z;
		var w = this.w;
		if ( this.x < min.x ) {
			x = min.x;
		} else if ( this.x > max.x ) {
			x = max.x;
		}

		if ( this.y < min.y ) {
			y = min.y;
		} else if ( this.y > max.y ) {
			y = max.y;
		}

		if ( this.z < min.z ) {
			z = min.z;
		} else if ( this.z > max.z ) {
			z = max.z;
		}

		if ( this.w < min.w ) {
			w = min.w;
		} else if ( this.w > max.w ) {
			w = max.w;
		}

		return new ALMath.Vector4(x,y,z,w);
	},

	/**
   	 * Function to floor vector.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector floored.
   	 */
	floor : function () {
		var x = Math.floor( this.x );
		var y = Math.floor( this.y );
		var z = Math.floor( this.z );
		var w = Math.floor( this.w );

		return new ALMath.Vector4(x,y,z,w);
	},

	/**
   	 * Function to ceil vector.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector ceiled.
   	 */
	ceil : function () {
		var x = Math.ceil( this.x );
		var y = Math.ceil( this.y );
		var z = Math.ceil( this.z );
		var w = Math.ceil( this.w );

		return new ALMath.Vector4(x,y,z,w);
	},

	/**
   	 * Function to round between min and max.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector rounded.
   	 */
	round : function () {
		var x = Math.round( this.x );
		var y = Math.round( this.y );
		var z = Math.round( this.z );
		var w = Math.round( this.w );

		return new ALMath.Vector4(x,y,z,w);
	},

	/**
   	 * Function to negate vector.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector with each component negate.
   	 */
	negate : function () {
		return new ALMath.Vector4(-this.x,-this.y,-this.z,-this.w);
	},

	/**
   	 * Function to compute dot product.
   	 *
   	 * @param {ALMath.Vector4} v - Vector to do the dot product.
   	 *
   	 * @returns {number} - Dot product between this and v.
   	 */
	dot : function ( v ) {
		return this.x * v.x + this.y * v.y + this.z * v.z + this.w * v.w;
	},

	/**
   	 * Function to compute length of the vector.
   	 *
   	 * @returns {number} - Vector length.
   	 */
	length : function () {
		// Maybe it could be : return Math.sqrt( this.dot(this) );
		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );
	},

	/**
   	 * Function to normalize vector.
   	 *
   	 * @returns {number} - A new vector normalized.
   	 */
	normalize : function () {
		return this.divideByScalar( this.length() );
	},

	/**
   	 * Function to compute distance between vectors.
   	 *
   	 * @param {ALMath.Vector4} v - Vector to compute the distance.
   	 *
   	 * @returns {number} - Distance between this and v.
   	 */
	distanceTo : function ( v ) {
		return Math.sqrt( (this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y) + (this.z - v.z) * (this.z - v.z ) + (this.w - v.w) * (this.w - v.w ));
	},

	/**
   	 * Function to set the vector components.
   	 *
   	 * @param {number} x - X component.
   	 * @param {number} y - Y component.
   	 * @param {number} z - Z component.
   	 * @param {number} w - W component.
   	 *
   	 * @returns {ALMath.Vector3} - this.
   	 */
	set : function(x, y, z, w){
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	},

	/**
   	 * Function to get the vector in format that WebGL understands.
   	 *
   	 * @returns {Float32Array} - A Float32Array with x, y, z and w.
   	 */
	getForGL : function(){
		return new Float32Array([this.x, this.y, this.z, this.w]);
	},

	/**
   	 * Function to clone vectors.
   	 *
   	 * @returns {ALMath.Vector4} - A copy of this.
   	 */
	clone : function(){
		return new ALMath.Vector3(this.x, this.y, this.z, this.w);
	},

	/**
   	 * Function to compare vectors.
   	 *
   	 * @param {ALMath.Vector4} v - Vector to compare.
   	 *
   	 * @returns {boolean} - true if this and v are equals, false otherwise.
   	 */
	equals : function (v){
		if (!(v instanceof ALMath.Vector4)){
			return false;
		}
		return (this.x === v.x) && (this.y === v.y) && (this.z === v.z) && (this.w === v.w);
	}
}

/**
 * Class that represent a quaternion.
 *
 * @class
 * @author Ángel Luis Perales Gómez

 * @param {number} x - X coordinate.
 * @param {number} y - Y coordinate.
 * @param {number} z - Z coordinate.
 * @param {number} w - W coordinate.
 */
ALMath.Quaternion = function ( x, y, z, w ) {

	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;
	this.w = ( w !== undefined ) ? w : 1;

};

ALMath.Quaternion.prototype = {

	/**
	 * Function to compute the length of the quaternion.
	 *
	 *	@returns {number} - Lenght of the quaternion.
	 */
	lenght : function(){
		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w );
	},

	/**
   	 * Function to normalize quaternion.
   	 *
   	 * @returns {number} - A new quaternion normalized.
   	 */
	normalize : function(){
		var d = this.length();
		var x,y,z,w;
		if ( d === 0 ) {
			x = 0;
			y = 0;
			z = 0;
			w = 1;
		} else {
			d = 1 / d;
			x = this.x * d;
			y = this.y * d;
			z = this.z * d;
			w = this.w * d;
		}
		return new ALMath.Quaternion(x,y,z,w);
	},

	/*
	 * Function to multiply two quaternions.
	 *
	 * @param {ALMath.Quaternion} q - Quaternion to multiply.
	 *
	 * @returns {ALMath.Quaternion} - A new quaternion result of multiply this by q.
	 */
	multiply : function(q){
		var nx,ny,nz,nw;
		nw = this.w*q.w - this.x*q.x - this.y*q.y - this.z*q.z;
		nx = this.w*q.x + this.x*q.w + this.y*q.z - this.z*q.y;
		ny = this.w*q.y + this.y*q.w + this.z*q.x - this.x*q.z;
		nz = this.w*q.z + this.z*q.w + this.x*q.y - this.y*q.x;

		return new ALMath.Quaternion(nx,ny,nz,nw);
	},

	/**
	 * Function to conjugate the quaternion.
	 *
	 * @returns {ALMath.Quaternion} - A new quaternion conjugated.
	 */
	conjugate : function (){
		return new ALMath.Quaternion(-this.x, -this.y, -this.z, this.w);
	},

	/**
	 * Function to get the inverse of quaternion.
	 *
	 * @returns {ALMath.Quaternion} - A new quaternion conjugated.
	 */
	inverse : function (){
		return this.conjugate().normalize();
	},

	/**
	 * Function to get matrix rotation from quaternion.
	 *
	 * @returns {ALMath.Matrix4} - A 4x4 rotation matrix.
	 */
	getMatrix : function (){
		var n11 = 1-2*this.y*this.y-2*this.z*this.z,
			n12 = 2*this.x*this.y + 2*this.w*this.z,
			n13 = 2*this.x*this.z - 2*this.w*this.x,
			n21 = 2*this.x*this.y - 2*this.w*this.z,
			n22 = 1-2*this.x*this.x-2*this.z*this.z,
			n23 = 2*this.y*this.z - 2*this.w*this.x,
			n31 = 2*this.x*this.z + 2*this.w*this.y,
			n32 = 2*this.y*this.z - 2*this.w*this.x,
			n33 = 1-2*this.x*this.x-2*this.y*this.y;
		var matrix = new ALMath.Matrix4();
		matrix.set(
			n11, n21, n31, 0,
			n12, n22, n32, 0,
			n13, n23, n33, 0,
			0,   0,   0,   1
		);
		return matrix;
	},

	/**
	 * Function to create a quaternion from Euler's angles.
	 *
	 * @param {ALMath.Vector3} v - Vector with the Euler's angles rotation in degrees.
	 *
	 * @returns {ALMath.Quaternion} - A quaternion seted from the Euler's angles
	 */
	setFromEuler : function(v){
		var c = new ALMath.Vector3();
		c.x = ALMath.degToRad(v.x);
		c.y = ALMath.degToRad(v.y);
		c.z = ALMath.degToRad(v.z);
		var q1 = new ALMath.Quaternion(0,Math.sin(c.y/2),0,Math.cos(c.y/2)),
			q2 = new ALMath.Quaternion(Math.sin(c.x/2),0,0,Math.cos(c.x/2)),
			q3 = new ALMath.Quaternion(0,0,Math.sin(c.z/2),Math.cos(c.z/2));
		var result = q1.multiply(q2);
		result = result.multiply(q3);

		this.x = result.x;
		this.y = result.y;
		this.z = result.z;
		this.w = result.w;
		return this;
	},

	/**
	 * Function to get the Euler's angles from the quaternion.
	 *
	 * @returns {ALMath.Vector3} - A vector with the Euler's angles.
	 */
	getEuler : function (){
		p = -2*(this.y*this.z - this.w*this.x);
		if (Math.abs(p)>0.9999){
			p = 1.570796*p;
			h = Math.atan2(-this.x*this.z + this.w*this.y, 0.5 - this.y*this.y - this.z*this.z);
			b = 0;
		}else{
			p = Math.asin(p);
			h = Math.atan2(this.x*this.z + this.w*this.y, 0.5 - this.x*this.x - this.y*this.y);
			b = Math.atan2(this.x*this.y + this.w*this.z, 0.5 - this.x*this.x - this.z*this.z);
		}
		return new ALMath.Vector3(ALMath.radToDeg(p),ALMath.radToDeg(h),ALMath.radToDeg(b));
	}
}

/**
 * Class that represent a 3x3 matrix.
 *
 * @class
 * @author Ángel Luis Perales Gómez
 */
ALMath.Matrix3 = function(){
	this.components = new Float32Array([
		1,0,0,
		0,1,0,
		0,0,1
	]);
}

ALMath.Matrix3.prototype = {

	/**
   	 * Function to set each component.
   	 * 
   	 * Set the component in row major order.
   	 *
   	 * @param {number} n11 - component for row 1 column 1.
   	 * @param {number} n12 - component for row 1 column 2.
   	 * @param {number} n13 - component for row 1 column 3.
   	 * @param {number} n21 - component for row 2 column 1.
   	 * @param {number} n22 - component for row 2 column 2.
   	 * @param {number} n23 - component for row 2 column 3.
   	 * @param {number} n31 - component for row 3 column 1.
   	 * @param {number} n32 - component for row 3 column 2.
   	 * @param {number} n33 - component for row 3 column 3.
   	 */
	set : function(n11,n12,n13,n21,n22,n23,n31,n32,n33){
		var c = this.components;
		c[0] = n11;
		c[1] = n21;
		c[2] = n31;
		c[3] = n12;
		c[4] = n22;
		c[5] = n32;
		c[6] = n13;
		c[7] = n23;
		c[8] = n33;
	},

	/**
   	 * Function to set this matrix to the identity matrix.
   	 */
	identity : function(){
		this.set(
			1, 0, 0,
			0, 1, 0,
			0, 0, 1
		);
	},

	/**
   	 * Function to multiply by vector v.
   	 *
   	 * @param {ALMath.Vector3} v - Vector to multiply.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector which is the multiplication between the matrix this and the vector v.
   	 */
	multiplyByVector : function(v){
		var c = this.components;
		return new ALMath.Vector3(c[0]*v.x+c[1]*v.y+c[2]*v.z, c[3]*v.x+c[4]*v.y+c[5]*v.z, c[6]*v.x+c[7]*v.y+c[8]*v.z);
	},

	/**
   	 * Function to multiply by scalar n.
   	 *
   	 * @param {number} n - Scalar to multiply.
   	 *
   	 * @returns {ALMath.Matrix3} - this that is the multiplication between this and scalar n.
   	 */
	multiplyByScalar : function(n){
		var c = this.components;

		c[0] *= n;
		c[1] *= n;
		c[2] *= n;
		c[3] *= n;
		c[4] *= n;
		c[5] *= n;
		c[6] *= n;
		c[7] *= n;
		c[8] *= n;

		return this;
	},

	/**
   	 * Function to divide by scalar n.
   	 *
   	 * @param {number} n - Scalar to divide.
   	 *
   	 * @throws Division by zero.
   	 *
   	 * @returns {ALMath.Matrix3} - this that is the division between this and scalar n.
   	 */
	divideByScalar : function (n){
		if (n === 0){
			throw new Error("ALMath.Matrix3.divideByScalar(n): Division by zero.")
		}
		var c = this.components;
		c[0] /= n;
		c[1] /= n;
		c[2] /= n;
		c[3] /= n;
		c[4] /= n;
		c[5] /= n;
		c[6] /= n;
		c[7] /= n;
		c[8] /= n;

		return this;
	},

	/**
   	 * Function to compute the matrix determinant.
   	 *
   	 * @returns {number} - The determinant of this.
   	 */
	determinant : function(){
		var c = this.components;
		return c[0]*c[4]*c[8]-c[0]*c[5]*c[7]-c[1]*c[3]*c[8]+c[1]*c[5]*c[6]+c[1]*c[3]*c[7]-c[2]*c[4]*c[6];
	},

	/**
   	 * Function to transpose matrix.
   	 *
   	 * @returns {ALMath.Matrix3} - this that is the transpose matrix.
   	 */
	transpose : function () {
		var t, c = this.components;

		t = c[1];
		c[1] = c[3];
		c[3] = t;

		t = c[2];
		c[2] = c[6];
		c[6] = t;

		t = c[5];
		c[5] = c[7];
		c[7] = t;

		return this;
	},

	/**
   	 * Function to compute matrix inverse.
   	 *
   	 * @throws Singular matrix. The matrix hasn't inverse.
   	 *
   	 * @returns {ALMath.Matrix3} - this that is the invert matrix.
   	 */
	inverse: function () {
		var c = this.components;
		var n11 = c[4]*c[8] - c[5]*c[7],
			n12 = -1*(c[1]*c[8] - c[2]*c[7]),
			n13 = c[1]*c[5] - c[2]*c[4],

			n21 = -1*(c[3]*c[8] - c[5]*c[6]),
			n22 = c[0]*c[8] - c[2]*c[6],
			n23 = -1*(c[0]*c[5] - c[2]*c[3]),

			n31 = c[3]*c[7] - c[4]*c[6],
			n32 = -1*(c[0]*c[7] - c[1]*c[6]),
			n33 = c[0]*c[4] - c[1]*c[3];

		this.set(
			n11, n12, n13,
			n21, n22, n23,
			n31, n32, n33
		);

		var determinant = this.determinant();
		if (determinant === 0){
			throw new Error("ALMath.Matrix3.inverse(): Matrix not reversible");
		}
		this.multiplyByScalar(1/determinant);
		return this;
	},
	
	/**
   	 * Function clone a matrix.
   	 *
   	 * @returns {ALMath.Matrix3} - A copy of this.
   	 */
	clone : function(){
		c = this.components;
		cloned = new ALMath.Matrix3();
		cloned.set(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8]);
		return cloned;
	},

	/**
   	 * Function compare two matrices.
   	 *
   	 * @returns {boolean} - true if this and v are equals, false otherwise.
   	 */
	equals : function (m){
		if (!(m instanceof ALMath.Matrix3)){
			return false;
		}

		for (var i = 0; i < this.components.length; i++){
			if (this.components[i] !== m.components[i]){
				return false;
			}
		}
		return true;
	}
}

/**
 * Class that represent a 4x4 matrix.
 *
 * @class
 * @author Ángel Luis Perales Gómez
 */
ALMath.Matrix4 = function(){
	this.components = new Float32Array([
		1,0,0,0,
		0,1,0,0,
		0,0,1,0,
		0,0,0,1
	]);
}

ALMath.Matrix4.prototype = {

	/**
   	 * Function to set each component.
   	 * 
   	 * Set the component in row major order.
   	 *
   	 * @param {number} n11 - component for row 1 column 1.
   	 * @param {number} n12 - component for row 1 column 2.
   	 * @param {number} n13 - component for row 1 column 3.
   	 * @param {number} n14 - component for row 1 column 4.
   	 * @param {number} n21 - component for row 2 column 1.
   	 * @param {number} n22 - component for row 2 column 2.
   	 * @param {number} n23 - component for row 2 column 3.
   	 * @param {number} n24 - component for row 2 column 4.
   	 * @param {number} n31 - component for row 3 column 1.
   	 * @param {number} n32 - component for row 3 column 2.
   	 * @param {number} n33 - component for row 3 column 3.
   	 * @param {number} n34 - component for row 3 column 4.
   	 * @param {number} n41 - component for row 4 column 1.
   	 * @param {number} n42 - component for row 4 column 2.
   	 * @param {number} n43 - component for row 4 column 3.
   	 * @param {number} n44 - component for row 4 column 4.
   	 */
	set : function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {
		var c = this.components;

		c[0] = n11;
		c[1] = n21;
		c[2] = n31;
		c[3] = n41;
		c[4] = n12;
		c[5] = n22;
		c[6] = n32;
		c[7] = n42;
		c[8] = n13;
		c[9] = n23;
		c[10] = n33;
		c[11] = n43;
		c[12] = n14;		
		c[13] = n24;
		c[14] = n34;
		c[15] = n44;
	},
	/**
   	 * Function to set this matrix to the identity matrix.
   	 *
   	 * @returns {ALMath.Matrix4} Identity Matrix.
   	 */
	identity : function () {
		this.set(
			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1
		);
		return this;
	},

	
	multiply: function ( m ) {

		var o = m.components;
		var c = this.components;
		result = new ALMath.Matrix4();
		var r = result.components;

		var o11 = o[0], o12 = o[4], o13 = o[8], o14 = o[12];
		var o21 = o[1], o22 = o[5], o23 = o[9], o24 = o[13];
		var o31 = o[2], o32 = o[6], o33 = o[10], o34 = o[14];
		var o41 = o[3], o42 = o[7], o43 = o[11], o44 = o[15];

		r[0] = c[0] * o11 + c[4] * o21 + c[8] * o31 + c[12] * o41;
		r[4] = c[0] * o12 + c[4] * o22 + c[8] * o32 + c[12] * o42;
		r[8] = c[0] * o13 + c[4] * o23 + c[8] * o33 + c[12] * o43;
		r[12] = c[0] * o14 + c[4] * o24 + c[8] * o34 + c[12] * o44;

		r[1] = c[1] * o11 + c[5] * o21 + c[9] * o31 + c[13] * o41;
		r[5] = c[1] * o12 + c[5] * o22 + c[9] * o32 + c[13] * o42;
		r[9] = c[1] * o13 + c[5] * o23 + c[9] * o33 + c[13] * o43;
		r[13] = c[1] * o14 + c[5] * o24 + c[9] * o34 + c[13] * o44;

		r[2] = c[2] * o11 + c[6] * o21 + c[10] * o31 + c[14] * o41;
		r[6] = c[2] * o12 + c[6] * o22 + c[10] * o32 + c[14] * o42;
		r[10] = c[2] * o13 + c[6] * o23 + c[10] * o33 + c[14] * o43;
		r[14] = c[2] * o14 + c[6] * o24 + c[10] * o34 + c[14] * o44;

		r[3] = c[3] * o11 + c[7] * o21 + c[11] * o31 + c[15] * o41;
		r[7] = c[3] * o12 + c[7] * o22 + c[11] * o32 + c[15] * o42;
		r[11] = c[3] * o13 + c[7] * o23 + c[11] * o33 + c[15] * o43;
		r[15] = c[3] * o14 + c[7] * o24 + c[11] * o34 + c[15] * o44;

		return result;
	},

	/**
   	 * Function to multiply by scalar n.
   	 *
   	 * @param {number} n - Scalar to multiply.
   	 *
   	 * @returns {ALMath.Matrix4} - this that is the multiplication between this and scalar n.
   	 */
	multiplyByScalar : function ( n ) {
		var c = this.components;

		c[0] *= n;
		c[1] *= n;
		c[2] *= n;
		c[3] *= n;
		c[4] *= n;
		c[5] *= n;
		c[6] *= n;
		c[7] *= n;
		c[8] *= n;
		c[9] *= n;
		c[10] *= n;
		c[11] *= n;
		c[12] *= n;
		c[13] *= n;
		c[14] *= n;
		c[15] *= n;

		return this;
	},

	/**
   	 * Function to multiply by vector v.
   	 *
   	 * @param {ALMath.Vector3} v - Vector to multiply.
   	 *
   	 * @returns {ALMath.Vector3} - A new vector which is the multiplication between the matrix this and the vector v.
   	 */
	multiplyByVector : function (v){
		var result,nx,ny,nz;
		var c = this.components;
		nx = c[0]*v.x+c[4]*v.y+c[8]*v.z+c[12];
		ny = c[1]*v.x+c[5]*v.y+c[9]*v.z+c[13];
		nz = c[2]*v.x+c[6]*v.y+c[10]*v.z+c[14];
		return new ALMath.Vector3(nx,ny,nz);
	},

	/**
   	 * Function to multiply by vector v.
   	 *
   	 * @param {ALMath.Vector4} v - Vector to multiply.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector which is the multiplication between the matrix this and the vector v.
   	 */
	multiplyByVector4 : function (v){
		var vector = v;
		if (v instanceof ALMath.Vector3){
			vector = new ALMath.Vector4(v.x,v.y,v.z,0);
		}
		var result,nx,ny,nz,nw;
		var c = this.components;
		nx = c[0]*v.x+c[4]*v.y+c[8]*v.z+c[12]*v.w;
		ny = c[1]*v.x+c[5]*v.y+c[9]*v.z+c[13]*v.w;
		nz = c[2]*v.x+c[6]*v.y+c[10]*v.z+c[14]*v.w;
		nw = c[3]*v.x+c[7]*v.y+c[11]*v.z+c[15]*v.w;
		return new ALMath.Vector4(nx,ny,nz,nw);
	},

	/**
   	 * Function to transform a vector v by matrix this.
   	 *
   	 * The difference between transformPoint and multiplyByVector is that transformPoint do the perspective division
   	 *
   	 * @param {ALMath.Vector4} v - Vector to multiply.
   	 *
   	 * @returns {ALMath.Vector4} - A new vector which is the multiplication between the matrix this and the vector v.
   	 */
	transformPoint : function(v){
		var m = this.components;

		var dst = new ALMath.Vector3();
	    var v0 = v.x;
	    var v1 = v.y;
	    var v2 = v.z;
	    var d = v0 * m[0 * 4 + 3] + v1 * m[1 * 4 + 3] + v2 * m[2 * 4 + 3] + m[3 * 4 + 3];

	    dst.x = (v0 * m[0 * 4 + 0] + v1 * m[1 * 4 + 0] + v2 * m[2 * 4 + 0] + m[3 * 4 + 0]) / d;
	    dst.y = (v0 * m[0 * 4 + 1] + v1 * m[1 * 4 + 1] + v2 * m[2 * 4 + 1] + m[3 * 4 + 1]) / d;
	    dst.z = (v0 * m[0 * 4 + 2] + v1 * m[1 * 4 + 2] + v2 * m[2 * 4 + 2] + m[3 * 4 + 2]) / d;

	    return dst;

	},

	/**
   	 * Function to divide by scalar n.
   	 *
   	 * @param {number} n - Scalar to divide.
   	 *
   	 * @throws Division by zero.
   	 *
   	 * @returns {ALMath.Vector4} - this that is the division between this and scalar n.
   	 */
	divideByScalar : function ( n ) {
		if (n === 0){
			throw new Error("ALMath.Matrix4.divideByScalar(n): Division by zero.")
		}
		var c = this.components;

		c[0] /= n;
		c[1] /= n;
		c[2] /= n;
		c[3] /= n;
		c[4] /= n;
		c[5] /= n;
		c[6] /= n;
		c[7] /= n;
		c[8] /= n;
		c[9] /= n;
		c[10] /= n;
		c[11] /= n;
		c[12] /= n;
		c[13] /= n;
		c[14] /= n;
		c[15] /= n;

		return this;
	},

	/**
   	 * Function to transpose matrix.
   	 *
   	 * @returns {ALMath.Matrix4} - this that is the transpose matrix.
   	 */
	transpose : function () {
		var c = this.components;
		var t;

		t = c[1];
		c[1] = c[4];
		c[4] = t;

		t = c[2];
		c[2] = c[8];
		c[8] = t;

		t = c[6];
		c[6] = c[9];
		c[9] = t;

		t = c[3];
		c[3] = c[12];
		c[12] = t;

		t = c[7];
		c[7] = c[13];
		c[13] = t;

		t = c[11];
		c[11] = c[14];
		c[14] = t;

		return this;
	},

	/**
	 * Function to create a translation matrix.
	 *
	 * @param {number} x - X component of translation matrix.
	 * @param {number} y - Y component of translation matrix.
	 * @param {number} z - Z component of translation matrix.
	 *
	 * @returns {ALMath.Matrix4} - A translation matrix.
	 */
	translate : function ( x, y, z ) {
		this.set(
			1, 0, 0, x,
			0, 1, 0, y,
			0, 0, 1, z,
			0, 0, 0, 1
		);

		return this;
	},

	/**
	 * Function to create a rotation matrix on X axis.
	 *
	 * @param {number} theta - rotation angle in degrees  on X axis.
	 *
	 * @returns {ALMath.Matrix4} - A rotation matrix on X axis.
	 */
	rotateX : function ( theta ) {
		var c = Math.cos( theta ), s = Math.sin( theta );
		this.set(
			1, 0,  0, 0,
			0, c, - s, 0,
			0, s,  c, 0,
			0, 0,  0, 1
		);

		return this;
	},

	/**
	 * Function to create a rotation matrix on Y axis.
	 *
	 * @param {number} theta - rotation angle in degrees  on Y axis.
	 *
	 * @returns {ALMath.Matrix4} - A rotation matrix on Y axis.
	 */
	rotateY : function ( theta ) {
		var c = Math.cos( theta ), s = Math.sin( theta );
		this.set(
			 c, 0, s, 0,
			 0, 1, 0, 0,
			- s, 0, c, 0,
			 0, 0, 0, 1
		);

		return this;
	},

	/**
	 * Function to create a rotation matrix on Z axis.
	 *
	 * @param {number} theta - rotation angle in degrees  on Z axis.
	 *
	 * @returns {ALMath.Matrix4} - A rotation matrix on Z axis.
	 */
	rotateZ : function ( theta ) {
		var c = Math.cos( theta ), s = Math.sin( theta );
		this.set(
			c, - s, 0, 0,
			s,  c, 0, 0,
			0,  0, 1, 0,
			0,  0, 0, 1
		);

		return this;
	},

	/**
	 * Function to create a rotation matrix on (X,Y,Z) axis.
	 *
	 * @param {number} x - rotation angle in degrees on X axis.
	 * @param {number} y - rotation angle in degrees  on Y axis.
	 * @param {number} z - rotation angle in degrees  on Z axis.
	 *
	 * @returns {ALMath.Matrix4} - A rotation matrix on (X,Y,Z) axis.
	 */
	rotate : function ( x, y, z ) {
		var rx, ry, rz, r;
		rx = new ALMath.Matrix4();
		ry = new ALMath.Matrix4();
		rz = new ALMath.Matrix4();
		rx.rotateX(x);
		ry.rotateY(y);
		rz.rotateZ(z);
		r = rz.multiply(ry);
		r = r.multiply(rx);
		return r;
	},

	/**
	 * Function to create a scale matrix.
	 *
	 * @param {number} x - scale factor on X axis.
	 * @param {number} y - scale factor on Y axis.
	 * @param {number} z - scale factor on Z axis.
	 *
	 * @returns {ALMath.Matrix4} - A scale matrix.
	 */
	scale : function ( x, y, z ) {
		this.set(
			x, 0, 0, 0,
			0, y, 0, 0,
			0, 0, z, 0,
			0, 0, 0, 1
		);

		return this;
	},

	/**
	 * Function to create a orthographic projection matrix.
	 *
	 * @params {number} left - Frustum left.
	 * @params {number} right - Frustum right.
	 * @params {number} top - Frustum top.
	 * @params {number} bottom - Frustum bottom.
	 * @params {number} near - Frustum near.
	 * @params {number} far - Frustum far.
	 *
	 * @returns {ALMath.Matrix4} - A orthographic projection matrix.
	 */
	orthographicProjection : function(left, right, top, bottom, near, far){
		var a = 2/(right-left);
		var b = 2/(top-bottom);
		var c = -2/(far-near);
		var d = -((right+left)/(right-left));
		var e = -((top+bottom)/(top-bottom));
		var f = -((far+near)/(far-near));

		var te = this.components;

		te[ 0 ] = a;		te[ 4 ] = 0;		te[ 8 ] = 0;		te[ 12 ] = 0;
		te[ 1 ] = 0;		te[ 5 ] = b;		te[ 9 ] = 0;		te[ 13 ] = 0;
		te[ 2 ] = 0;		te[ 6 ] = 0;		te[ 10 ] = c;		te[ 14 ] = 0;
		te[ 3 ] = d;		te[ 7 ] = e;		te[ 11 ] = f;		te[ 15 ] = 1;

		return this;
	},

	/**
	 * Function to create a perspective projection matrix.
	 *
	 * @params {number} fov - Angle of the frustum in degrees.
	 * @params {number} aspect - Aspect ratio.
	 * @params {number} zNear - Frustum near.
	 * @params {number} zFar - Frustum far.
	 *
	 * @returns {ALMath.Matrix4} - A perspective projection matrix.
	 */
	perspectiveProjection : function ( fov, aspect, zNear, zFar ) {
		var a = aspect;

		var tan=Math.tan(ALMath.degToRad(0.5*fov)),
        	A=-(zFar+zNear)/(zFar-zNear),
        	B=(-2*zFar*zNear)/(zFar-zNear);

    	var c = this.components;

    	c[ 0 ] = 0.5/tan;		c[ 4 ] = 0;				c[ 8 ] = 0;			c[ 12 ] = 0;
		c[ 1 ] = 0;				c[ 5 ] = (0.5*a/tan);	c[ 9 ] = 0;			c[ 13 ] = 0;
		c[ 2 ] = 0;				c[ 6 ] = 0;				c[ 10 ] = A;		c[ 14 ] = B;
		c[ 3 ] = 0;				c[ 7 ] = 0;				c[ 11 ] =-1;		c[ 15 ] = 0;

		return this;
	},

	/**
	 * Function to get a matrix that can be used to transform normals on the shaders.
	 *
	 * @params {boolean} scale - If true or undefined, the matrix has a scale component so to get Matrix that transform normal is necessary transpose the matrix and then invert it. If it is false the transpose is enough.
	 *
	 * @returns {ALMath.Matrix4} - Matrix that can be used in the shader to transform normals.
	 */
	getNormalMatrix : function (scale){
		var m3 = new ALMath.Matrix3();
		var c = this.components;

		if (scale === undefined || scale === true){
			m3.set(
				c[0], c[1], c[2],
				c[4], c[5], c[6],
				c[8], c[9], c[10]
			);
			m3 = m3.inverse().transpose();
		}else{
			m3.set(
				c[0], c[4], c[8],
				c[1], c[5], c[9],
				c[2], c[6], c[10]
			);
		}
		return m3;
	},

	/**
   	 * Function to compute matrix inverse.
   	 *
   	 * @returns {ALMath.Matrix4} - this that is the invert matrix.
   	 */
	getInverse : function (){
		var inv = new ALMath.Matrix4();
		var tc = this.components;
		var oc = inv.components;



		var n11 = tc[ 0 ], n21 = tc[ 1 ], n31 = tc[ 2 ], n41 = tc[ 3 ],
		n12 = tc[ 4 ], n22 = tc[ 5 ], n32 = tc[ 6 ], n42 = tc[ 7 ],
		n13 = tc[ 8 ], n23 = tc[ 9 ], n33 = tc[ 10 ], n43 = tc[ 11 ],
		n14 = tc[ 12 ], n24 = tc[ 13 ], n34 = tc[ 14 ], n44 = tc[ 15 ],

		t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
		t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
		t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
		t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

		var det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;


		var detInv = 1 / det;

		oc[ 0 ] = t11 * detInv;
		oc[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
		oc[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
		oc[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

		oc[ 4 ] = t12 * detInv;
		oc[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
		oc[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
		oc[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

		oc[ 8 ] = t13 * detInv;
		oc[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
		oc[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
		oc[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

		oc[ 12 ] = t14 * detInv;
		oc[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
		oc[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
		oc[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;


		return inv;

	},

	/**
	 * Function to create a lookAt matrix.
	 *
	 * @params {ALMath.Vector3} eye - Camera's position.
	 * @params {ALMath.Vector3} target - Where camera is looking.
	 * @params {ALMath.Vector3} up - Camera's up vector.
	 *
	 * @returns {ALMath.Matrix4} - A lookAt matrix.
	 */
	lookAt : function(eye, target, up){
		var eye = eye || new ALMath.Vector3();
		var up = up || new ALMath.Vector3();
		var target = target || new ALMath.Vector3();

		var c = this.components;

		var z = target.sub(eye);
		z = z.normalize();

		var x = z.cross(up);
		x = x.normalize();

		var y = x.cross(z);
		y = y.normalize();

		c[0] = x.x; c[1] = x.y; c[2] = x.z; c[3] = 0;
		c[4] = y.x; c[5] = y.y; c[6] = y.z; c[7] = 0;
		c[8] = -z.x; c[9] = -z.y; c[10] = -z.z; c[11] = 0;
		c[12] = eye.x; c[13] = eye.y; c[14] = eye.z; c[15] = 1;

		return this;
	},

	/**
   	 * Function clone a matrix.
   	 *
   	 * @returns {ALMath.Matrix4} - A copy of this.
   	 */
	clone : function(){
		c = this.components;
		cloned = new ALMath.Matrix4();
		cloned.set(c[0],c[1],c[2],c[3],c[4],c[5],c[6],c[7],c[8],c[9],c[10],c[11],c[12],c[13],c[14],c[15]);
		return cloned;
	},

	/**
   	 * Function compare two matrices.
   	 *
   	 * @returns {boolean} - true if this and v are equals, false otherwise.
   	 */
	equals : function (m){
		if (!(m instanceof ALMath.Matrix4)){
			return false;
		}

		for (var i = 0; i < this.components.length; i++){
			if (this.components[i] !== m.components[i]){
				return false;
			}
		}
		return true;
	}
}

/**
 * Namespace where live all classes and function to manipulate 3D world.
 *
 * @namespace
 */
var AL3D = {
  version : "0.3 {Angel Luis 3D Library}",
  license: "The MIT License (MIT) \
    \
    Copyright (c) <year> <copyright holders> \
    \
    Permission is hereby granted, free of charge, to any person obtaining a copy \
    of this software and associated documentation files (the 'Software'), to deal \
    in the Software without restriction, including without limitation the rights \
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell \
    copies of the Software, and to permit persons to whom the Software is \
    furnished to do so, subject to the following conditions: \
    \
    The above copyright notice and this permission notice shall be included in \
    all copies or substantial portions of the Software. \
    \
    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR \
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, \
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE \
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER \
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, \
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN \
    THE SOFTWARE."
}

/**
 * Class that render the scene.
 *
 * @class
 * @author Ángel Luis Perales Gómez
 *
 * @param {number} width - The width of the viewport.
 * @param {number} height - The height of the viewport.
 */

AL3D.Renderer = function(width, height){
  AL3D.height = this.height = height;
  AL3D.width = this.width = width;
  this.canvas = document.createElement('canvas');
  this.canvas.id     = "3DCanvas";
  this.canvas.width  = width;
  this.canvas.height = height;
  try{
    AL3D.gl = AL3D.Renderer.gl = this.gl = this.canvas.getContext("experimental-webgl" , {preserveDrawingBuffer: true});
  }catch(e){
    return false;
  }
  this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
  this.gl.enable(this.gl.DEPTH_TEST);
  this.gl.depthFunc(this.gl.LEQUAL);
  this.needUpdate = true;

  AL3D.LINEAR = this.gl.LINEAR;
  AL3D.NEAREST = this.gl.NEAREST;
  AL3D.LINEAR_MIPMAP_LINEAR = this.gl.LINEAR_MIPMAP_LINEAR;
  AL3D.NEAREST_MIPMAP_NEAREST = this.gl.NEAREST_MIPMAP_NEAREST;
  AL3D.NEAREST_MIPMAP_LINEAR = this.gl.NEAREST_MIPMAP_LINEAR;
  AL3D.LINEAR_MIPMAP_NEAREST = this.gl.LINEAR_MIPMAP_NEAREST;
  AL3D.CLAMP_TO_EDGE = this.gl.CLAMP_TO_EDGE;
  AL3D.REPEAT = this.gl.REPEAT;
  AL3D.MIRRORED_REPEAT =this.gl.MIRRORED_REPEAT;

  AL3D.TEXTURE_MAG_FILTER = this.gl.TEXTURE_MAG_FILTER;
  AL3D.TEXTURE_MIN_FILTER = this.gl.TEXTURE_MIN_FILTER;

  AL3D.RGBA = this.gl.RGBA;
  AL3D.RGB = this.gl.RGB;
  AL3D.UNSIGNED_BYTE = this.gl.UNSIGNED_BYTE;

  AL3D.TEXTURE_2D = this.gl.TEXTURE_2D;

  AL3D.FlatInterpolation = 0;
  AL3D.PhongInterpolation = 2;
  AL3D.GouraudInterpolation = 1;
  AL3D.ONE_SIDE = 0;
  AL3D.TWO_SIDE = 1;

  this.gl.getExtension("OES_standard_derivatives");
  this.gl.clearDepth(1.0);
  this.gl.viewport(0.0, 0.0, this.canvas.width, this.canvas.height);

  this.postprocessingEffects = [];

  return true;
}

AL3D.Renderer.prototype.constructor = AL3D.Renderer;

AL3D.Renderer.prototype = {
/**
 * Function to add postprocessing effect to the render.
 *
 * @param {number} effect - The effect to add.
 *
 * @see {@link AL3D.SepiaEffect}
 * @see {@link AL3D.GreyScaleEffect}
 * @see {@link AL3D.NegativeEffect}
 * @see {@link AL3D.RadialBlurEffect}
 * @see {@link AL3D.EyeFishEffect}
 * @see {@link AL3D.DreamVisionEffect}
 * @see {@link AL3D.PixelationEffect}
 * @see {@link AL3D.LenEffect}
 * @see {@link AL3D.PosterizationEffect}
 * @see {@link AL3D.NightEffect}
 * @see {@link AL3D.AcidMetalEffect}
 * @see {@link AL3D.ChristmasEffect}
 * @see {@link AL3D.CoolEffect}
 * @see {@link AL3D.FireEffect}
 * @see {@link AL3D.Fire2Effect}
 * @see {@link AL3D.SunsetEffect}
 * @see {@link AL3D.EdgeDetectionEffect}
 * @see {@link AL3D.SharpenEffect}
 * @see {@link AL3D.GaussianBlurEffect}
 */
  addEffect : function(effect){
    if (this.postprocessingEffects.length > 0){
      this.postprocessingEffects[0] = effect;
    }else{
      this.postprocessingEffects.push(effect);
    }
    if (this.postprocessingEffects.length > 0){
      // create an empty texture
      this.textureToRender = this.gl.createTexture();
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureToRender);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
      this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
      this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.width, this.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
      this.depthToRender = this.gl.createRenderbuffer();
      this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthToRender);
      this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this.width, this.height);

      // Create a framebuffer and attach the texture.
      this.fb = this.gl.createFramebuffer();
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fb);
      this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textureToRender, 0);
      this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthToRender);
      this.gl.bindTexture(this.gl.TEXTURE_2D, null);
      this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);


      this.renderToTexturePlaneVertex = [
            // First triangle:
             1.0,  1.0,
            -1.0,  1.0,
            -1.0, -1.0,
            // Second triangle:
            -1.0, -1.0,
             1.0, -1.0,
             1.0,  1.0
      ];   
      this.renderToTexturePlaneBuffer = this.gl.createBuffer();
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.renderToTexturePlaneBuffer);
      this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array(this.renderToTexturePlaneVertex), this.gl.STATIC_DRAW);
      this.gl.enableVertexAttribArray(this.postprocessingEffects[0].shaderProgram._position);

      this.postprocessingEffects[0].width = this.width;
      this.postprocessingEffects[0].height = this.height;
    }
  },
/**
 * Function to clear the effects in the render.
 */
  clearEffects : function(){
    this.postprocessingEffects = [];
  },
  /**
   * Return the canvas that render the scene.
   */
  getDomElement : function (){
    return this.canvas;
  },
  /**
   * Function to order the Mesh to renders for blending mode.
   *
   * @param {Object} scene - The scene to render.
   * @param {Object} camera - The camera uses to render the scene.
   */
  orderForBlending : function (scene, camera){
    alphaMeshes = [];
    opaqueMeshes = [];
    noMeshes = [];

    for (var i = 0; i < scene.getChilds().length; i++){
      var mesh = scene.getChild(i);
      if (mesh instanceof AL3D.Mesh){
        var color = AL3D.Utils.hexIntToRgbNormalized(mesh.material.diffuse);
        if (color.a !== 1.0){
          alphaMeshes.push(mesh);
        }else{
          opaqueMeshes.push(mesh);
        }
      }else{
        noMeshes.push(mesh);
      }
    }
    alphaMeshes.sort(function (meshA, meshB){
      var distA = camera.position.distanceTo(meshA.position);
      var distB = camera.position.distanceTo(meshB.position);
      return distB - distA;
    });
    newOrder = noMeshes.concat(opaqueMeshes.concat(alphaMeshes));
    scene.setChilds(newOrder);
    return opaqueMeshes.length;
  },

  /**
   * Function to render the scene.
   *
   * @param {Object} scene - The scene to render.
   * @param {Object} camera - The camera uses to render the scene.
   */
  render : function(scene, camera){
    if (this.postprocessingEffects.length > 0){
      
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fb);

    } 
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    if (this.needUpdate){
      var lights = [];

      for (var i = 0; i < scene.getChilds().length; i++){
        if (scene.getChild(i) instanceof AL3D.AmbientLight ||
          scene.getChild(i) instanceof AL3D.DirectionalLight ||
          scene.getChild(i) instanceof AL3D.PointLight ||
          scene.getChild(i) instanceof AL3D.SpotLight){
          lights.push(scene.getChild(i));
        }
      }
      scene.ambientLights = [];
      scene.pointLights = [];
      scene.spotLights = [];
      scene.directionalLights = [];
      for (var i = 0; i< lights.length; i++){
        if (lights[i] instanceof AL3D.AmbientLight){
          scene.ambientLights.push(lights[i]);
        }else if (lights[i] instanceof AL3D.DirectionalLight){
          scene.directionalLights.push(lights[i]);
        }else if (lights[i] instanceof AL3D.PointLight){
          scene.pointLights.push(lights[i]);
        }else if (lights[i] instanceof AL3D.SpotLight){
          scene.spotLights.push(lights[i]);
        }
      }
      for (var i = 0; i < scene.getChilds().length; i++){
        if (scene.getChild(i) instanceof AL3D.Mesh){
          if (scene.fog !== undefined){
            scene.getChild(i).fog = scene.fog;
          }
          AL3D.shaderManager.getShader(scene.getChild(i), lights);
        }
      }
      this.needUpdate = false;
    }
    var numbersOfOpaqueMeshes = this.orderForBlending(scene, camera);
    
    if (scene.picker !== undefined){
      if (scene.picker.picking == true){
        scene.picker.doPick(scene.getChilds(), camera, this.width, this.height);
      }
    }
    
    AL3D.gl.enable(AL3D.gl.BLEND);
    AL3D.gl.blendFunc(AL3D.gl.SRC_ALPHA, AL3D.gl.ONE_MINUS_SRC_ALPHA);
    AL3D.gl.enable(AL3D.gl.DEPTH_TEST);
    var meshNumber = -1;
    for (var oi = 0; oi < scene.getChilds().length; oi++){
      var o = scene.getChild(oi);
      
      if (o instanceof AL3D.SkyBox){
        this.gl.useProgram(o.shaderProgram);

        var transform = o.transform;
        var viewMatrix = camera.viewMatrix;
        var projectionMatrix = camera.projectionMatrix;

        var mv = transform.multiply(viewMatrix);
        var mvp = projectionMatrix.multiply(mv);

        this.gl.uniformMatrix4fv(o.shaderProgram._MVP, false,mvp.components);

        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, o.mesh.vertexBuffer);
        this.gl.vertexAttribPointer(o.shaderProgram._position, 3, this.gl.FLOAT, false, 4*3, 0);
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_CUBE_MAP, o.texture);
        this.gl.uniform1i(o.shaderProgram._sampler, 0);
        o.mesh.prepareToRender();
        if (o.mesh.getIndexes().length != 0){
          this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, o.mesh.indexBuffer);
          this.gl.drawElements(this.gl.TRIANGLES, o.mesh.getIndexes().length, this.gl.UNSIGNED_SHORT, 0);
        }else{
          var l = o.mesh.getVertex().length/3;
          this.gl.drawArrays(this.gl.TRIANGLES, 0, l); 
        }
      }

      // We only render mesh objects
      if (!(o instanceof AL3D.Mesh)){
        continue;
      }
      meshNumber += 1;
      if (meshNumber == numbersOfOpaqueMeshes){
        AL3D.gl.disable(AL3D.gl.DEPTH_TEST);
      }

      this.gl.useProgram(o.shaderProgram);

      // NORMALS BUFFER
      if (o.hasNormals && o.normalBuffer !== undefined){
        AL3D.gl.enableVertexAttribArray(o.shaderProgram._vNormal);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, o.normalBuffer);
        this.gl.vertexAttribPointer(o.shaderProgram._vNormal, 3, this.gl.FLOAT, false, 4*3, 0);
        
      }

      o.prepareToRender();

      // VERTEX BUFFER
      AL3D.gl.enableVertexAttribArray(o.shaderProgram._position);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, o.vertexBuffer);
      this.gl.vertexAttribPointer(o.shaderProgram._position, 3, this.gl.FLOAT, false, 4*3, 0);
      // TEXTURE BUFFER
      if (o.material.video !== undefined){
        this.gl.activeTexture(this.gl.TEXTURE0);
        o.material.texture.updateVideoTexture();
        this.gl.uniform1i(o.shaderProgram._sampler, 0);
        if (o.uvBuffer !== undefined){
          AL3D.gl.enableVertexAttribArray(o.shaderProgram._uv);
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, o.uvBuffer);
          this.gl.vertexAttribPointer(o.shaderProgram._uv, 2, this.gl.FLOAT, false,4*2,0) ;
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
        }
      }else if (o.material.texture !== undefined){

        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, o.material.texture.texture);
        this.gl.uniform1i(o.shaderProgram._sampler, 0);

        if (o.uvBuffer !== undefined){
          AL3D.gl.enableVertexAttribArray(o.shaderProgram._uv);
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, o.uvBuffer);
          this.gl.vertexAttribPointer(o.shaderProgram._uv, 2, this.gl.FLOAT, false,4*2,0) ;
          this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
        }
      }

      if (o.material.specularMap !== undefined){
        this.gl.activeTexture(this.gl.TEXTURE1);
        this.gl.bindTexture(this.gl.TEXTURE_2D, o.material.specularMap.texture);
        this.gl.uniform1i(o.shaderProgram._uSpecularMapSampler, 1);
      }

      if (o.material.normalMap !== undefined){
        this.gl.activeTexture(this.gl.TEXTURE2);
        this.gl.bindTexture(this.gl.TEXTURE_2D, o.material.normalMap.texture);
        this.gl.uniform1i(o.shaderProgram._uNormalMapSampler, 2);
      }

      var transform = o.transform;
      var viewMatrix = camera.viewMatrix;
      var projectionMatrix = camera.projectionMatrix;

      var mv = transform.multiply(viewMatrix);

      var mvp = projectionMatrix.multiply(mv);

      if (o.fog !== undefined){
        this.gl.uniformMatrix4fv(o.shaderProgram._viewModelMatrix, false,mv.components);
        if (o.fog instanceof AL3D.LinearFog){
          this.gl.uniform1f(o.shaderProgram._uStartFog,o.fog.start);
          this.gl.uniform1f(o.shaderProgram._uEndFog,o.fog.end);
        }else if (o.fog instanceof AL3D.ExpFog || o.fog instanceof AL3D.Exp2Fog){
          this.gl.uniform1f(o.shaderProgram._uFogDensity,o.fog.density);
        }
        var c = AL3D.Utils.hexIntToRgbNormalized(o.fog.color);
        AL3D.gl.uniform3fv(o.shaderProgram._uFogColor, new Float32Array([c.r, c.g, c.b]));
      }

      if (o.hasNormals){

        this.gl.uniformMatrix4fv(o.shaderProgram._viewModelMatrix, false,mv.components);
        var normalMatrix = mv.getNormalMatrix(o.scale.equals(new ALMath.Vector3(1,1,1)));
        
        this.gl.uniformMatrix3fv(o.shaderProgram._normalMatrix, false,normalMatrix.components);
      }

      this.gl.uniformMatrix4fv(o.shaderProgram._MVP, false,mvp.components);

      //Uniforms for lights
      // ambient lights
      for (var i = 0; i< scene.ambientLights.length; i++){
        var c = AL3D.Utils.hexIntToRgbNormalized(scene.ambientLights[i].color);
        AL3D.gl.uniform4fv(o.shaderProgram._ambientLights[i].color, new Float32Array([c.r, c.g, c.b, c.a]));
              AL3D.gl.uniform1f(o.shaderProgram._ambientLights[i].intensity, scene.ambientLights[i].intensity );
      }
      // Directional Lights
      for (var i = 0; i< scene.directionalLights.length; i++){
        var c = AL3D.Utils.hexIntToRgbNormalized(scene.directionalLights[i].color);
        AL3D.gl.uniform4fv(o.shaderProgram._directionalLights[i].color, new Float32Array([c.r, c.g, c.b, c.a]));
        AL3D.gl.uniform1f(o.shaderProgram._directionalLights[i].intensity, scene.directionalLights[i].intensity);
        AL3D.gl.uniform3fv(o.shaderProgram._directionalLights[i].position, scene.directionalLights[i].position.getForGL());
              
      }
      // Point Lights
      for (var i = 0; i< scene.pointLights.length; i++){
        var c = AL3D.Utils.hexIntToRgbNormalized(scene.pointLights[i].color);
        AL3D.gl.uniform4fv(o.shaderProgram._pointLights[i].color, new Float32Array([c.r, c.g, c.b, c.a]));
        AL3D.gl.uniform3fv(o.shaderProgram._pointLights[i].position, scene.pointLights[i].position.getForGL());
              AL3D.gl.uniform1f(o.shaderProgram._pointLights[i].intensity, scene.pointLights[i].intensity);
              AL3D.gl.uniform1f(o.shaderProgram._pointLights[i].linearAttenuation, scene.pointLights[i].linearAttenuation);
              AL3D.gl.uniform1f(o.shaderProgram._pointLights[i].quadraticAttenuation, scene.pointLights[i].quadraticAttenuation);
              AL3D.gl.uniform1f(o.shaderProgram._pointLights[i].constantAttenuation, scene.pointLights[i].constantAttenuation);
      }

      for (var i = 0; i< scene.spotLights.length; i++){
        var c = AL3D.Utils.hexIntToRgbNormalized(scene.spotLights[i].color);
        AL3D.gl.uniform4fv(o.shaderProgram._spotLights[i].color, new Float32Array([c.r, c.g, c.b, c.a]));
        AL3D.gl.uniform3fv(o.shaderProgram._spotLights[i].position, scene.spotLights[i].position.getForGL());
              AL3D.gl.uniform1f(o.shaderProgram._spotLights[i].intensity, scene.spotLights[i].intensity);
              AL3D.gl.uniform1f(o.shaderProgram._spotLights[i].linearAttenuation, scene.spotLights[i].linearAttenuation);
              AL3D.gl.uniform1f(o.shaderProgram._spotLights[i].quadraticAttenuation, scene.spotLights[i].quadraticAttenuation);
              AL3D.gl.uniform1f(o.shaderProgram._spotLights[i].constantAttenuation, scene.spotLights[i].constantAttenuation);
              AL3D.gl.uniform3fv(o.shaderProgram._spotLights[i].coneDirection, scene.spotLights[i].direction.getForGL());
              AL3D.gl.uniform1f(o.shaderProgram._spotLights[i].spotCosCutOff, scene.spotLights[i].spotCosCutOff);
              AL3D.gl.uniform1f(o.shaderProgram._spotLights[i].spotExponent, scene.spotLights[i].spotExponent);
      }

      if (o.material instanceof AL3D.LambertMaterial){
        var color = AL3D.Utils.hexIntToRgbNormalized(o.material.diffuse);
        AL3D.gl.uniform4fv(o.shaderProgram._material.diffuseColor, new Float32Array([color.r, color.g, color.b, color.a]));
      }else if (o.material instanceof AL3D.PhongMaterial || o.material instanceof AL3D.BlinnMaterial){
        var color = AL3D.Utils.hexIntToRgbNormalized(o.material.diffuse);
        AL3D.gl.uniform4fv(o.shaderProgram._material.diffuseColor, new Float32Array([color.r, color.g, color.b, color.a]));
        color = AL3D.Utils.hexIntToRgbNormalized(o.material.specular);
        AL3D.gl.uniform4fv(o.shaderProgram._material.specularColor, new Float32Array([color.r, color.g, color.b, color.a]));
        AL3D.gl.uniform1f(o.shaderProgram._material.shininess, o.material.shininess);
      }else if (o.material instanceof AL3D.ToonMaterial){
        this.gl.activeTexture(this.gl.TEXTURE1);
        this.gl.bindTexture(this.gl.TEXTURE_2D, o.material.textureToon.texture);
        this.gl.uniform1i(o.shaderProgram._uSamplerToon, 1);
      }

      if (o.hasOwnProperty("render")){
        o.render();
      }else{

        if (o.getIndexes().length != 0){
          this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, o.indexBuffer);
          this.gl.drawElements(this.gl.TRIANGLES, o.getIndexes().length, this.gl.UNSIGNED_SHORT, 0);
        }else{
          var l = o.getVertex().length/3;
          this.gl.drawArrays(this.gl.TRIANGLES, 0, l); 
        }
      }
    }

    if (this.postprocessingEffects.length > 0){
      this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

      this.gl.useProgram(this.postprocessingEffects[0].shaderProgram);
      
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.renderToTexturePlaneBuffer);
      this.gl.vertexAttribPointer(this.postprocessingEffects[0].shaderProgram._position, 2, this.gl.FLOAT, false, 0, 0);
      this.gl.activeTexture(this.gl.TEXTURE0);
      this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureToRender);
        
        if (typeof this.postprocessingEffects[0].process === 'function'){
          this.postprocessingEffects[0].process();
      }

      this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    }
  },

  /**
   * Function to set the scene to render.
   *
   * @param {Object} scene - The scene to render.
   */
  setScene : function(scene){
    this.scene = scene;
  }
}

/**
 * Abstract class that represents a postprocessing effect based on convolution operation and uses a kernel.
 * Subclass must implement a process function where pass the kernel and other variables to the shader.
 *
 * @class
 * @author Ángel Luis Perales Gómez
 */

AL3D.EffectBasedOnKernel = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
              uniform vec2 uTextureSize;
              uniform float uKernel[9];
                void main() {
                vec2 distanceBetweenPixeles = vec2(1.0, 1.0) / uTextureSize;
                vec4 colorSum =
                texture2D(uSampler, vTexCoord + distanceBetweenPixeles * vec2(-1, -1)) * uKernel[0] +
                texture2D(uSampler, vTexCoord + distanceBetweenPixeles * vec2( 0, -1)) * uKernel[1] +
                texture2D(uSampler, vTexCoord + distanceBetweenPixeles * vec2( 1, -1)) * uKernel[2] +
                texture2D(uSampler, vTexCoord + distanceBetweenPixeles * vec2(-1,  0)) * uKernel[3] +
                texture2D(uSampler, vTexCoord + distanceBetweenPixeles * vec2( 0,  0)) * uKernel[4] +
                texture2D(uSampler, vTexCoord + distanceBetweenPixeles * vec2( 1,  0)) * uKernel[5] +
                texture2D(uSampler, vTexCoord + distanceBetweenPixeles * vec2(-1,  1)) * uKernel[6] +
                texture2D(uSampler, vTexCoord + distanceBetweenPixeles * vec2( 0,  1)) * uKernel[7] +
                texture2D(uSampler, vTexCoord + distanceBetweenPixeles * vec2( 1,  1)) * uKernel[8] ;
                gl_FragColor = vec4((colorSum).rgb, 1.0);
                }`;

    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
  this.shaderProgram._kernel =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uKernel[0]");
  this.shaderProgram._texutreSize =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uTextureSize");

}

/**
 * Class that adds Sepia postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.SepiaEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
                void main() {
                float grey = dot(texture2D(uSampler, vTexCoord).rgb, vec3(0.299, 0.587, 0.114));
                gl_FragColor = vec4(grey * vec3(1.2, 1.0, 0.8), 1.0);
                }`;

    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");

}

/**
 * Class that adds Grey Scale postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.GreyScaleEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
                void main() {
                float grey = dot(texture2D(uSampler, vTexCoord).rgb, vec3(0.299, 0.587, 0.114));
                gl_FragColor = vec4(grey,grey,grey, 1.0);
                }`;

    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");

}

/**
 * Class that adds Negative postprocessing effect (invert the colors) to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.NegativeEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
                void main() {
                vec4 color = texture2D(uSampler, vTexCoord);
                gl_FragColor = vec4(1.0-color.rgb, 1.0);
                }`;

    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");

}

/**
 * Class that adds Radial Blur postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.RadialBlurEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
              const float sampleDist = 1.0;
              const float sampleStrength = 2.2;
                void main() {
                float samples[10];
                samples[0] = -0.08;
                samples[1] = -0.05;
                samples[2] = -0.03;
                samples[3] = -0.02;
                samples[4] = -0.01;
                samples[5] = 0.01;
                samples[6] = 0.02;
                samples[7] = 0.03;
                samples[8] = 0.04;
                samples[9] = 0.08;
                vec2 dir = 0.5 - vTexCoord; 
                float dist = sqrt(dir.x*dir.x + dir.y*dir.y); 
                dir = dir/dist; 
                vec4 color = texture2D(uSampler,vTexCoord); 
                vec4 sum = color;
                for (int i = 0; i < 10; i++)
                sum += texture2D( uSampler, vTexCoord + dir * samples[i] * sampleDist );
                sum *= 1.0/11.0;
                float t = dist * sampleStrength;
                t = clamp( t ,0.0,1.0);
                gl_FragColor = mix( color, sum, t );
                }`;

    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");;

}

/**
 * Class that adds Eye Fish postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.EyeFishEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
              const float PI = 3.1415926535;
                void main() {
                float aperture = 178.0;
                float apertureHalf = 0.5 * aperture * (PI / 180.0);
                float maxFactor = sin(apertureHalf);
                vec2 uv;
                vec2 xy = 2.0 * vTexCoord.xy - 1.0;
                float d = length(xy);
                if (d < (2.0-maxFactor)){
                d = length(xy * maxFactor);
                float z = sqrt(1.0 - d * d);
                float r = atan(d, z) / PI;
                float phi = atan(xy.y, xy.x);
                uv.x = r * cos(phi) + 0.5;
                uv.y = r * sin(phi) + 0.5;
                }else{
                uv = vTexCoord.xy;}
                vec4 c = texture2D(uSampler, uv);
                gl_FragColor = c;
                }`;

    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
}

/**
 * Class that adds Dream Vision postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.DreamVisionEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
            void main ()
            {
              vec4 c = texture2D(uSampler, vTexCoord);
              c += texture2D(uSampler, vTexCoord+0.001);
              c += texture2D(uSampler, vTexCoord+0.003);
              c += texture2D(uSampler, vTexCoord+0.005);
              c += texture2D(uSampler, vTexCoord+0.007);
              c += texture2D(uSampler, vTexCoord+0.009);
              c += texture2D(uSampler, vTexCoord+0.011);

              c += texture2D(uSampler, vTexCoord-0.001);
              c += texture2D(uSampler, vTexCoord-0.003);
              c += texture2D(uSampler, vTexCoord-0.005);
              c += texture2D(uSampler, vTexCoord-0.007);
              c += texture2D(uSampler, vTexCoord-0.009);
              c += texture2D(uSampler, vTexCoord-0.011);

              c.rgb = vec3((c.r+c.g+c.b)/3.0);
              c = c / 9.5;
              gl_FragColor = c;   
                }`;

    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
}

/**
 * Class that adds Pixelation postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.PixelationEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
              void main()
            {
             float dx = 2.5*(1./512.);
             float dy = 2.5*(1./512.);
             vec2 coord = vec2(dx*floor(vTexCoord.x/dx),
                               dy*floor(vTexCoord.y/dy));
             gl_FragColor = texture2D(uSampler, coord);
            }`;


    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
}

/**
 * Class that adds Lens postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.LenEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
              const vec2 lenRadius = vec2(0.30,0.20);
            void main() 
            { 
              vec4 Color = texture2D(uSampler, vTexCoord.xy);
              float dist = distance(vTexCoord.xy, vec2(0.5,0.5));
              Color.rgb *= smoothstep(lenRadius.x, lenRadius.y, dist);
              gl_FragColor = Color;
            }`;


    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
}

/**
 * Class that adds Posterization postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.PosterizationEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
              const float gamma = 0.6;
            const float numColors = 8.0;
            void main() 
            { 
              vec3 c = texture2D(uSampler, vTexCoord.xy).rgb;
              c = pow(c, vec3(gamma, gamma, gamma));
              c = c * numColors;
              c = floor(c);
              c = c / numColors;
              c = pow(c, vec3(1.0/gamma));
              gl_FragColor = vec4(c, 1.0);
            }`;


    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
}

/**
 * Class that adds Night postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.NightEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
              void main()
              {
                vec4 c0 = texture2D(uSampler, vTexCoord.xy);
                float green = c0.g;

                if (c0.g < 0.50)
                  green = c0.r + c0.b;

                gl_FragColor = vec4(0.0, green, 0.0, 1.0);
              }`;


    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
}

/**
 * Class that adds Acid Metal postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.AcidMetalEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
              void main()
              {
                vec4 c0 = texture2D(uSampler, vTexCoord.xy);
                float red = 0.0;
                float blue  = 0.0;

                if (c0.r > 0.15 && c0.b > 0.15)
                {
                  blue = 0.5;
                  red = 0.5;
                }

                float green = max(c0.r + c0.b, c0.g);

                gl_FragColor = vec4(red, green, blue, 1.0);
              }`;


    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
}

/**
 * Class that adds Christmas postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.ChristmasEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
              void main()
              {
                vec4 c0 = texture2D(uSampler, vTexCoord.xy);
                float red = 0.0;
                float green = 0.0;

                if (c0.r < 0.35 || c0.b > 0.35)
                  green = c0.g + (c0.b / 2.0);
                else
                  red = c0.r + 0.4;

                gl_FragColor = vec4(red, green, 0.0, 1.0);
              }`;


    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
}

/**
 * Class that adds Cool postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.CoolEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
              void main()
              {
                vec4 c0 = texture2D(uSampler, vTexCoord.xy);
                float red = 0.0;
                float green = 0.0;
                float blue  = 0.0;

                if (c0.r < 0.50 || c0.b > 0.5)
                {
                  blue = c0.r;
                  red = c0.g;
                }
                else
                {
                  blue = c0.r;
                  green = c0.r;
                }

                gl_FragColor = vec4(red, green, blue, 1.0);
              }`;


    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
}

/**
 * Class that adds Fire postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.FireEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
              void main()
              {
                vec4 c0 = texture2D(uSampler, vTexCoord.xy);
                float red = 0.0;
                float green = 0.0;
                float blue  = 0.0;

                red = c0.r;

                if (c0.r > 0.0 && c0.g > c0.r)
                  green = (c0.g - (c0.g - c0.r)) / 3.0;

                if (c0.b > 0.0 && c0.r < 0.25)
                {
                  red = c0.b;
                  green = c0.b / 3.0;
                }

                if (c0.g > 0.0 && c0.r < 0.25)
                {
                  red = c0.g;
                  green = c0.g / 3.0;
                }

                if (((c0.r + c0.g + c0.b) / 3.0) > 0.9)
                  green = c0.r / 3.0;

                gl_FragColor = vec4(red, green, blue, 1.0);
              }`;


    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
}

/**
 * Class that adds Fire postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.Fire2Effect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
              void main()
              {
                vec4 c0 = texture2D(uSampler, vTexCoord.xy);
                float red = 0.0;
                float green = 0.0;
                float blue  = 0.0;
                float avg = (c0.r + c0.g + c0.b) / 3.0;

                red = c0.r + (c0.g / 2.0) + (c0.b / 3.0);
                green = c0.r / 3.0;

                gl_FragColor = vec4(red, green, blue, 1.0);
              }`;


    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
}

/**
 * Class that adds Sunset postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.SunsetEffect = function(){
    this.vertexShader = `precision lowp float;
              attribute vec2 aPosition;
              varying vec2 vTexCoord;
              void main() {
                vTexCoord = aPosition.xy * 0.5 + 0.5;
                gl_Position = vec4(aPosition,0.0,1.0);}`;

    this.fragmentShader = `precision mediump float;
              varying vec2 vTexCoord;
              uniform sampler2D uSampler;
              void main()
              {
                vec4 c0 = texture2D(uSampler, vTexCoord.xy);
                gl_FragColor = vec4(c0.r * 1.5, c0.g, c0.b * 0.5, c0.a);
              }`;


    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
}

/**
 * Class that adds Edge Detection postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.EdgeDetectionEffect = function(){
  AL3D.EffectBasedOnKernel.call(this);
}

/**
 * Class that adds Sharpen postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.SharpenEffect = function(){
  AL3D.EffectBasedOnKernel.call(this);
}

/**
 * Class that adds Gaussian Blur postprocessing effect to the render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.GaussianBlurEffect = function(){
  AL3D.EffectBasedOnKernel.call(this);
}

AL3D.EdgeDetectionEffect.prototype = {
  /**
   * Function uses to pass kernel an other variables to shader.
   */
  process : function(){
    AL3D.gl.uniform2f(this.shaderProgram._texutreSize, this.width, this.height);
    var kernel = [
         -1, -1, -1,
         -1,  8, -1,
         -1, -1, -1
     ];
     AL3D.gl.uniform1fv(this.shaderProgram._kernel, kernel);
  }
}

AL3D.SharpenEffect.prototype = {
  /**
   * Function uses to pass kernel an other variables to shader.
   */
  process : function(){
    AL3D.gl.uniform2f(this.shaderProgram._texutreSize, this.width, this.height);
    var kernel = [
         0, -1, 0,
         -1,  5, -1,
         0, -1, 0
     ];
     AL3D.gl.uniform1fv(this.shaderProgram._kernel, kernel);
  }
}

AL3D.GaussianBlurEffect.prototype = {
  /**
   * Function uses to pass kernel an other variables to shader.
   */
  process : function(){
    AL3D.gl.uniform2f(this.shaderProgram._texutreSize, this.width, this.height);

     var kernel = [
         1/16, 1/8, 1/16,
         1/8 ,  1/4, 1/8,
         1/16, 1/8, 1/16
     ];
     AL3D.gl.uniform1fv(this.shaderProgram._kernel, kernel);
  }
}

/**
 * Class that represents a scene to render.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */

AL3D.Scene = function(){
  this.renderObjects = [];
  this.directionalLights=[];
  this.pointLights=[]
  this.ambientLights=[];
  this.spotLights=[];
}

AL3D.Scene.prototype = {
  /**
   * Function to add an Object3D to the scene.
   *
   * @param {AL3D.Object3D} m - Object3D to add.
   */
  add : function(m){
    if (m instanceof AL3D.SkyBox){
      m.load();
    }
    this.renderObjects.push(m);
  },

  /**
   * Function to get the Object3D's in the scene.
   *
   * @return {AL3D.Object3D[]} The Object3D's in the scene.
   */
  getChilds : function(){
    return this.renderObjects;
  },

  /**
   * Function to get the ith Object3D in the scene.
   *
   * @param {number} i - The ith Object3D to get.
   */
  getChild : function(i){
    return this.renderObjects[i];
  },

  /**
   * Function to set the Object3D's childs in the scene.
   *
   * @param {AL3D.Object3D[]} childs - Array of Object3D to set as scene's childs.
   */
  setChilds : function(childs){
    this.renderObjects = childs;
  },

  /**
   * Function to set the picker object to the scene.
   *
   * @param {AL3D.Picker} picker - Picker object.
   */
  setPicker : function(picker){
    this.picker = picker;
  }
}

/**
 * Class that represents Linar Fog effect.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 *
 * @param {Object} p - Object that represents a Linear Fog.
 * @param {number} p.start - Where start the fog.
 * @param {number} p.end - Where end the fog.
 */

AL3D.LinearFog = function(p){
  this.color = p===undefined?0xFFFFFFFF:p.color || 0xFFFFFFFF;
  this.start = p===undefined?1:p.start || 1;
  this.end = p===undefined?10:p.end || 10;
}

/**
 * Class that represents Exponential Fog effect.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 *
 * @param {Object} p - Object that represents a ExpFog.
 * @param {number} p.color - Fog color.
 * @param {number} p.density - Fog density.
 */

AL3D.ExpFog = function(p){
  this.color = p===undefined?0xFFFFFFFF:p.color || 0xFFFFFFFF;
  this.density = p===undefined?1:p.density || 1;
}

/**
 * Class that represents Exponential Fog 2 effect.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 *
 * @param {Object} p - Object that represents a Exp2Fog.
 * @param {number} p.color - Fog color.
 * @param {number} p.density - Fog density.
 */

AL3D.Exp2Fog = function(p){
  this.color = p===undefined?0xFFFFFFFF:p.color || 0xFFFFFFFF;
  this.density = p===undefined?1:p.density || 1;
}

/**
 * Class that represents an Object in 3D world that can adds to Scene.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 * @abstract
 *
 * @param {number} x - The x coordenate in the 3D world.
 * @param {number} y - The y coordenate in the 3D world.
 * @param {number} z - The z coordenate in the 3D world.
 */
AL3D.Object3D = function(x, y, z){
  this._position = new ALMath.Vector3(x||0, y||0, z||0);
  this._orientation = new ALMath.Vector3();
  this.scale = new ALMath.Vector3(0.5,0.5,0.5);
  this.transform = new ALMath.Matrix4();
}

AL3D.Object3D.prototype.constructor = AL3D.Object3D;

AL3D.Object3D.prototype = {
  
  /**
   * Return the Object3D position.
   *
   * @returns {ALMath.Vector3} - The Object3D position
   */
  get position (){
    return this._position;
  },

  /**
   * Set the Object3D position.
   *
   * @param {ALMath.Vector3} value - The Object3D position
   */
  set position (value){
    this._position.x = value.x;
    this._position.y = value.y;
    this._position.z = value.z;
  },

  /**
   * Set the Object3D rotation.
   *
   * @param {ALMath.Vector3} value - The Object3D rotation
   */
  set rotation (value){
    this._orientation.setFromEuler(value.x,value.y,value.z);
  },

  /**
   * Set the Object3D orientation.
   *
   * @param {ALMath.Vector3} value - The Object3D orientation
   */
  set orientation (value){
    this._orientation.x = value.x;
    this._orientation.y = value.y;
    this._orientation.z = value.z;
  },

  /**
   * Return the Object3D orientation.
   *
   * @returns {ALMath.Vector3} - The Object3D orientation
   */
  get orientation (){
    return this._orientation;
  },

  /**
   * Return the Object3D rotation.
   *
   * @returns {ALMath.Vector3} - The Object3D rotation
   */
  get rotation () {
    this._orientation.getEuler();
  },

  /**
   * Prepare Object3D to render.
   *
   * This method update the position, orientation and scale
   */
  prepareToRender : function(){
    this.transform = new ALMath.Matrix4();
    var qOrientation = new ALMath.Quaternion().setFromEuler(this.orientation).getMatrix();
    var scaleM = new ALMath.Matrix4();
    var orientationM = new ALMath.Matrix4();
    orientationM = orientationM.rotate(this.orientation.x, this.orientation.y, this.orientation.z);
    scaleM = scaleM.scale(this.scale.x,this.scale.y,this.scale.z);
    this.transform = this.transform.multiply(orientationM).multiply(scaleM);
    // We could do
    // var matrixT = new ALMath.Matrix4();
    // matrixT.translate(this.position.x,this.position.y,this.position.z);
    // and then multiply the transform but this take more calcules than simply put position in the correct positions.
    this.transform.components[12] = this.position.x;
    this.transform.components[13] = this.position.y;
    this.transform.components[14] = this.position.z;
  }
}

/**
 * Class that represents a SkyBox.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 *
 * @param {Object} p - Object that represent a SkyBox.
 * @param {string[]} p.urls - The sixth textures for the SkyBox (posx,negx,posy,negy,posz,negz).
 */
AL3D.SkyBox = function(p){
  AL3D.Object3D.call(this);
  this.urls = p.urls;
  this.vertexShader = `attribute vec3 aPosition;
              varying vec3 vTexCoord;
              uniform mat4 uMVP;
              void main() {
                vTexCoord = aPosition;
                vec4 pos = uMVP * vec4(aPosition,1.0);
                gl_Position = pos.xyww;}`;

    this.fragmentShader = `precision mediump float;
              varying vec3 vTexCoord;
              uniform samplerCube uSamplerCube;
                void main() {
                gl_FragColor = textureCube(uSamplerCube, vTexCoord);
                }`;

    this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSamplerCube");
  this.shaderProgram._MVP =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uMVP");
}

AL3D.SkyBox.prototype = {

  /**
   * Function that load the sixth textures for the SkyBox.
   */
  load : function(){
    var imagesLoaded = 0;
    this.imgs = [];
    var texObject = this;
    for (var i = 0; i < 6; i++) {
      texObject.imgs[i] = new Image();
      texObject.imgs[i].onload = function() {
        imagesLoaded++;
        if (imagesLoaded == 6) {
          AL3D.gl.pixelStorei(AL3D.gl.UNPACK_FLIP_Y_WEBGL, false);
          texObject.texture = AL3D.gl.createTexture();
          AL3D.gl.bindTexture(AL3D.gl.TEXTURE_CUBE_MAP, texObject.texture);
          var targets = [
            AL3D.gl.TEXTURE_CUBE_MAP_POSITIVE_X, AL3D.gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 
            AL3D.gl.TEXTURE_CUBE_MAP_POSITIVE_Y, AL3D.gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 
            AL3D.gl.TEXTURE_CUBE_MAP_POSITIVE_Z, AL3D.gl.TEXTURE_CUBE_MAP_NEGATIVE_Z 
          ];

          for (var j = 0; j < 6; j++) {

            AL3D.gl.texImage2D(targets[j], 0,AL3D.gl.RGBA, AL3D.gl.RGBA, AL3D.gl.UNSIGNED_BYTE, texObject.imgs[j]);

            AL3D.gl.texParameteri(AL3D.gl.TEXTURE_CUBE_MAP, AL3D.gl.TEXTURE_WRAP_S, AL3D.gl.CLAMP_TO_EDGE);
            AL3D.gl.texParameteri(AL3D.gl.TEXTURE_CUBE_MAP, AL3D.gl.TEXTURE_WRAP_T, AL3D.gl.CLAMP_TO_EDGE);
          }
          AL3D.gl.generateMipmap(AL3D.gl.TEXTURE_CUBE_MAP);

        }
      }
      texObject.imgs[i].src = texObject.urls[i];
    }
    this.mesh = new AL3D.Mesh.createCube({size: 2, height : 2});
  }
}

/**
 * Class that represents a Mesh.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 * @augments AL3D.Object3D
 *
 * @param {Object} p - Object that represent a Mesh.
 * @param {number[]} p.vertices - An array with the mesh's vertices.
 * @param {number[]} p.indices - An array with the mesh's indices.
 * @param {number[]} p.normals - An array with the mesh's normals.
 * @param {number[]} p.uv - An array with the mesh's uv coordinates.
 * @param {AL3D.Material} p.material - The mesh's material, if not present the material would be BasicMaterial.
 */
AL3D.Mesh = function(p){
  AL3D.Object3D.call(this);
  this.vertices = p===undefined?[]:p.vertices || [];
  this.indices = p===undefined?[]:p.indices || [];
  this.normals = p===undefined?[]:p.normals || [];
  this.uv = p===undefined?[]:p.uv || [];
  this.material = p===undefined?new AL3D.BasicMaterial():p.material || new AL3D.BasicMaterial();

  this.gl = AL3D.Renderer.gl;

    if (p!==undefined && p.uv !== undefined && p.material !== undefined){
    this.uv = p.uv;
    this.setUVBuffer();
    if (p.material.texture !== undefined){
      this.setTexture(this.material.texture, this.uv);
    }else if (p.material.video !== undefined){
      //loadVideoTexture(this.material.video);
    }
  }

  if (p!==undefined && p.vertices !== undefined){
    this.setVertexBuffer();
  }
  if (p!==undefined && p.indices !== undefined){
    this.setIndexBuffer();
  }

  if (p!==undefined && p.normals !== undefined){
    this.setNormalBuffer();
    this.hasNormals = true;
  }
}

AL3D.Mesh.prototype = AL3D.Object3D.prototype;

/**
 * Get the mesh's vertices.
 *
 * @returns {number[]} - The mesh's vertices.
*/
AL3D.Mesh.prototype.getVertex = function (){
  var vertexArray = [];
  for (var i = 0; i < this.vertices.length; i++){
    v = this.vertices[i];
    if (v instanceof ALMath.Vector2){
      vertexArray.push(v.x);
      vertexArray.push(v.y);
    }else if (v instanceof ALMath.Vector3){
      vertexArray.push(v.x);
      vertexArray.push(v.y);
      vertexArray.push(v.z);
    }
  }
  if (vertexArray.length === 0){
    return this.vertices;
  }
  return vertexArray;
}

/**
 * Get the mesh's normals.
 *
 * @returns {number[]} - The mesh's normals.
*/
AL3D.Mesh.prototype.getNormals = function (data){
  var normalArray = [];
  var source = data || this.normals;
  for (var i = 0; i < source.length; i++){
    v = source[i];
    if (v instanceof ALMath.Vector3){
      normalArray.push(v.x);
      normalArray.push(v.y);
      normalArray.push(v.z);
    }
  }
  if (normalArray.length === 0){
    return source;
  }
  return normalArray;
}

/**
 * Get the mesh's indices.
 *
 * @returns {number[]} - The mesh's indices.
*/
AL3D.Mesh.prototype.getIndexes = function(){
  return this.indices;
}

/**
 * Add a vertex.
 *
 * @param {Object} v - Vertex to add.
*/
AL3D.Mesh.prototype.addVertex = function(v){
  if (v instanceof ALMath.Vector2){
    v = ALMath.Vector3(v.x, v.y, 0);
  }
  this.vertices.push(v);
}

/**
 * Add a index.
 *
 * @param {number} i - Index to add.
*/
AL3D.Mesh.prototype.addIndex = function(i){
  this.indices.push(i);
}

/**
 * Create a Sphere mesh.
 *
 * @param {Object} p - Object that represent a sphere.
 * @param {number} p.radius - Sphere's radius.
 * @param {Al3D.Material} p.material - sphere's material. If material is not defined, the Basic Material will set.
 *
 * @returns {AL3D.Mesh} - A sphere's mesh.
*/
AL3D.Mesh.createSphere = function (p){
  var mesh = new AL3D.Mesh();
  var radius = p.radius || 1;
  
  mesh.material = p.material || new AL3D.BasicMaterial();
  var urlTexture = mesh.material.texture;
    
    var sphereScale = 1;
    var latitudeOfNorthPole = Math.PI / 2.0;
    var degreeInRadian = (Math.PI / 180) * 10;
    var circleLength = Math.PI * 2.0;
    var verticesInOneStrip = circleLength / degreeInRadian;
    
    var lats = 50;
    var longs = 50;
    var latNumber, longNumber, theta, phi, sinTheta, sinPhi, cosTheta, cosPhi;
    var x, y, z;
    var first, second;

    // vertices
    for (latNumber = 0; latNumber <= lats; latNumber += 1) {
        for (longNumber = 0; longNumber <= longs; longNumber += 1) {
            theta = latNumber * Math.PI / lats;
            phi = longNumber * 2 * Math.PI / longs;
            sinTheta = Math.sin(theta);
            sinPhi = Math.sin(phi);
            cosTheta = Math.cos(theta);
            cosPhi = Math.cos(phi);

            x = cosPhi * sinTheta;
            y = cosTheta;
            z = sinPhi * sinTheta;
            var u = 1 - (longNumber / longs);
            var v = 1 - (latNumber / lats);

            mesh.vertices.push(new ALMath.Vector3(radius * x, radius * y, radius * z));
            mesh.normals.push(new ALMath.Vector3(x, y, z));
            mesh.uv.push(u);
            mesh.uv.push(v);
        }
    }

    // indices
    for (latNumber = 0; latNumber < lats; latNumber += 1) {
        for (longNumber = 0; longNumber < longs; longNumber += 1) {
            first = latNumber * (longs + 1) + longNumber;
            second = first + longs + 1;
            mesh.indices.push(first, second, first + 1);
            
            
            mesh.indices.push(second, second + 1, first + 1);
        }
    }

    mesh.setUVBuffer();

    if (urlTexture !== undefined && mesh.uv !== undefined && !mesh.material.init && mesh.material.texture.texture === undefined){
      mesh.setTexture(urlTexture, mesh.uv);
  }
  mesh.material.init = true;
  mesh.type = "sphere";
  mesh.hasNormals = true;
  mesh.setVertexBuffer();
  mesh.setIndexBuffer();
  mesh.setNormalBuffer();
  return mesh;
}

/**
 * Create a Cylinder mesh.
 *
 * @param {Object} p - Object that represent a cylinder.
 * @param {number} p.radius - Cylinder's radius.
 * @param {number} p.height - Cylinder's height.
 * @param {AL3D.Material} p.material - Cylinder's material. If material is not defined, the Basic Material will set.
 *
 * @returns {AL3D.Mesh} - A cylinder's mesh.
*/
AL3D.Mesh.createCylinder = function (p){
  var mesh = new AL3D.Mesh();
  var radius = p.radius || 1;
  var height = p.height || 1;
  mesh.material = p.material || new AL3D.BasicMaterial();
  var urlTexture = mesh.material.texture;

  var a1=[],a2=[],a3=[],a4=[],index=[],vertex=[],topCapNormal =[],bottomCapNormal = [],topBottomCapNormal = [],sideCapNormal = [],polygons = 50;
    a1.push(new ALMath.Vector3(0,-height/2,0));
    a2 = AL3D.Utils.createCircle(polygons,0,-height/2,radius);
    a3 = AL3D.Utils.createCircle(polygons,0,height/2,radius);
    //a3 = a3.reverse(); // This NOT fix the problem with light TWO_SIDE and TRIANGLE_FAN
    a4.push(new ALMath.Vector3(0,height/2,0));

    // Initialize normals for side surface
    for (var i = 0; i < polygons*2+2; i++){
        sideCapNormal.push(new ALMath.Vector3(0,0,0));
    }

    for (var i = 0; i < a2.length-1; i++){
        index.push(2+i);
        index.push(1+i);
        index.push(2+polygons+ i);

        index.push(2+polygons+i);
        index.push(2+i);
        index.push(2+polygons+1+i);
    }

    //uv coordinates for side surface
    var dA = Math.PI*2/(a2.length-1);
    var t = [];
    t.push(0.0);
    t.push(0.0);
    for (var i = 0; i < a2.length; i++){
      
      t.push(1 - i/polygons);
      t.push(0.0);
    }
    t.push(0.0); // Estas coordenadas corresponden al centro de uno de los extremos, no van a ser usadas para el calculo del lateral, pero
    t.push(0.0); // es necesario indicarlas porque a la hora de hacer bind de los atributos tiene que haber una correspondencia, si estas 
    // coordenadas no se ponen entonces resulta que vamos a tener 4 coordenadas menos para los uv que número de vertices y dará error a la hora de renderizar
    for (var i = 0; i < a2.length; i++){
      
      t.push(1 - i/polygons);
      t.push(1.0);
    }
    var caps = [];
    caps.push(0.5);
    caps.push(0.5);
    var radian;
    
    for (var i = 0; i < a2.length; i++){
      caps.push(0.5 * Math.cos(dA*i) + 0.5);
      caps.push(0.5 * Math.sin(dA*i) + 0.5);
    }
    caps.push(0.5);
    caps.push(0.5);

    for (var i = 0; i < a3.length; i++){
      caps.push(0.5 * Math.cos(dA*i) + 0.5);
      caps.push(0.5 * Math.sin(dA*i) + 0.5);
    }
    mesh.uv = t;
    // Normals for side surface
    for (var i = 0; i < a2.length-1; i++){
        // Normals for the first triangle
        var n = (i+1)%a2.length;
        var normal1 = AL3D.Utils.computeNormal(a2[i],a2[n],a3[i]).normalize();
        sideCapNormal[2+i] = sideCapNormal[i+2].add(normal1);
        sideCapNormal[i+1] = sideCapNormal[i+1].add(normal1);
        sideCapNormal[2+polygons+ i] = sideCapNormal[i+2+polygons].add(normal1);

        // Normals for the second triangle
        var normal2 = AL3D.Utils.computeNormal(a2[n],a3[n],a3[i]).normalize();
        sideCapNormal[2+polygons+i] = sideCapNormal[2+polygons+i].add(normal2);
        sideCapNormal[2+i] = sideCapNormal[2+i].add(normal2);
        sideCapNormal[i+polygons+2 +1] = sideCapNormal[i+polygons+2 +1].add(normal2);
    }

    for (var i = 0; i < sideCapNormal.length; i++){
      if (sideCapNormal[i].equals(new ALMath.Vector3(0,0,0))){
        continue;
      }
        sideCapNormal[i] = sideCapNormal[i].normalize();
    }
    // Normals for top and bottom Cap
    for (var i = 0; i< polygons+1; i++){
        topBottomCapNormal.push(new ALMath.Vector3(0,-1,0));
    }
    for (var i = 0; i< polygons+1; i++){
        //topBottomCapNormal.push(new ALMath.Vector3(0,1,0)); // Correct, fix for winding triangle_fan
        topBottomCapNormal.push(new ALMath.Vector3(0,1,0));
    }
    mesh.hasNormals = true;

    vertex = a1.concat(a2);
    vertex = vertex.concat(a4);
    vertex = vertex.concat(a3);
    mesh.vertices = vertex;
    mesh.indices = index;

    mesh.setUVBuffer("capUVBuffer", caps);
    mesh.setUVBuffer("sideUVBuffer", mesh.uv);
    if (urlTexture !== undefined){
      mesh.setTexture(urlTexture, mesh.uv);
  }
  mesh.setVertexBuffer();
  mesh.setIndexBuffer();
  mesh.setNormalBuffer("sideNormalsBuffer", sideCapNormal);
  mesh.setNormalBuffer("capNormalsBuffer", topBottomCapNormal);

  mesh.type = "cylinder";
  

  mesh.render = function(){
    
    mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, mesh.capUVBuffer);
    this.gl.vertexAttribPointer(mesh.shaderProgram._uv, 2, this.gl.FLOAT, false,4*2,0) ;
    mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, this.capNormalsBuffer);
    this.gl.vertexAttribPointer(mesh.shaderProgram._vNormal, 3, this.gl.FLOAT, false, 4*3, 0);
    mesh.gl.drawArrays( mesh.gl.TRIANGLE_FAN, 0, polygons+1);

    
    mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, mesh.sideUVBuffer);
    this.gl.vertexAttribPointer(mesh.shaderProgram._uv, 2, this.gl.FLOAT, false,4*2,0) ;
    mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, mesh.sideNormalsBuffer);
    this.gl.vertexAttribPointer(mesh.shaderProgram._vNormal, 3, this.gl.FLOAT, false, 4*3, 0);
    mesh.gl.bindBuffer(mesh.gl.ELEMENT_ARRAY_BUFFER, mesh.indexBuffer);
    mesh.gl.drawElements(mesh.gl.TRIANGLE_STRIP, mesh.indices.length, mesh.gl.UNSIGNED_SHORT, 0);

    
    mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, mesh.capUVBuffer);
    this.gl.vertexAttribPointer(mesh.shaderProgram._uv, 2, this.gl.FLOAT, false,4*2,0) ;
    mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, mesh.capNormalsBuffer);
    this.gl.vertexAttribPointer(mesh.shaderProgram._vNormal, 3, this.gl.FLOAT, false, 4*3, 0);
    mesh.gl.drawArrays( mesh.gl.TRIANGLE_FAN, polygons+1, (polygons+1));
  }

  return mesh;
}

/**
 * Create a Cone mesh.
 *
 * @param {Object} p - Object that represent a cone.
 * @param {number} p.radius - Cone's radius.
 * @param {number} p.height - Cone's height.
 * @param {AL3D.Material} p.material - Cone's material. If material is not defined, the Basic Material will set.
 *
 * @returns {AL3D.Mesh} - A cone's mesh. 
*/
AL3D.Mesh.createCone = function (p){
  var mesh = new AL3D.Mesh();
  var radius = p.radius || 1;
  var height = p.height || 1;
  mesh.material = p.material || new AL3D.BasicMaterial();
  var urlTexture = mesh.material.texture;

  var a1=[],a2=[],a3=[],a4=[],index=[],vertex=[],topCapNormal =[],bottomCapNormal = [],topBottomCapNormal = [],sideCapNormal = [],polygons = 50;
    a1.push(new ALMath.Vector3(0,-height/2,0));
    a2 = AL3D.Utils.createCircle(polygons,0,-height/2,radius);
    a3 = AL3D.Utils.createCircle(polygons,0,height/2,0.0001);
    a4.push(new ALMath.Vector3(0,height/2,0));

    // Initialize normals for side surface
    for (var i = 0; i < polygons*2+2; i++){
        sideCapNormal.push(new ALMath.Vector3(0,0,0));
    }

    for (var i = 0; i < a2.length-1; i++){
        index.push(2+i);
        index.push(1+i);
        index.push(2+polygons+ i);

        index.push(2+polygons+i);
        index.push(2+i);
        index.push(2+polygons+1+i);
    }

    //uv coordinates for side surface
    var dA = Math.PI*2/(a2.length-1);
    var t = [];
    t.push(0.0);
    t.push(0.0);
    for (var i = 0; i < a2.length; i++){
      
      t.push(1 - i/polygons);
      t.push(0.0);
    }
    t.push(0.0); // Estas coordenadas corresponden al centro de uno de los extremos, no van a ser usadas para el calculo del lateral, pero
    t.push(0.0); // es necesario indicarlas porque a la hora de hacer bind de los atributos tiene que haber una correspondencia, si estas 
    // coordenadas no se ponen entonces resulta que vamos a tener 4 coordenadas menos para los uv que número de vertices y dará error a la hora de renderizar
    for (var i = 0; i < a2.length; i++){
      
      t.push(1 - i/polygons);
      t.push(1.0);
    }
    var caps = [];
    caps.push(0.5);
    caps.push(0.5);
    var radian;
    
    for (var i = 0; i < a2.length; i++){
      caps.push(0.5 * Math.cos(dA*i) + 0.5);
      caps.push(0.5 * Math.sin(dA*i) + 0.5);
      //caps.push(1 - i/polygons);
    }
    caps.push(0.5);
    caps.push(0.5);

    for (var i = 0; i < a3.length; i++){
      caps.push(0.5 * Math.cos(dA*i) + 0.5);
      caps.push(0.5 * Math.sin(dA*i) + 0.5);
    }
    mesh.uv = t;
    // Normals for side surface
    for (var i = 0; i < a2.length-1; i++){
        // Normals for the first triangle
        var n = (i+1)%a2.length;
        var normal1 = AL3D.Utils.computeNormal(a2[i],a2[n],a3[i]).normalize();
        sideCapNormal[i+1] = sideCapNormal[i+1].add(normal1);
        sideCapNormal[i+2] = sideCapNormal[i+2].add(normal1);
        sideCapNormal[i+2+polygons] = sideCapNormal[i+2+polygons].add(normal1);

        // Normals for the second triangle
        var normal2 = AL3D.Utils.computeNormal(a2[n],a3[n],a3[i]).normalize();
        sideCapNormal[i+2] = sideCapNormal[i+2].add(normal2);
        sideCapNormal[i+polygons+2 +1] = sideCapNormal[i+polygons+2 +1].add(normal2);
        sideCapNormal[i+2+polygons] = sideCapNormal[i+2+polygons].add(normal2);
    }

    for (var i = 0; i < sideCapNormal.length; i++){
      if (sideCapNormal[i].equals(new ALMath.Vector3(0,0,0))){
        continue;
      }
        sideCapNormal[i] = sideCapNormal[i].normalize();
    }
    // Normals for top and bottom Cap
    for (var i = 0; i< polygons+1; i++){
        topBottomCapNormal.push(new ALMath.Vector3(0,-1,0));
    }
    for (var i = 0; i< polygons+1; i++){
        topBottomCapNormal.push(new ALMath.Vector3(0,1,0));
    }
    mesh.hasNormals = true;

    vertex = a1.concat(a2);
    vertex = vertex.concat(a4);
    vertex = vertex.concat(a3);
    mesh.vertices = vertex;
    mesh.indices = index;


    mesh.setUVBuffer("capUVBuffer", caps);
    mesh.setUVBuffer("sideUVBuffer", mesh.uv);
    if (urlTexture !== undefined){
      mesh.setTexture(urlTexture, mesh.uv);
  }
  mesh.setVertexBuffer();
  mesh.setIndexBuffer();
  mesh.setNormalBuffer("sideNormalsBuffer", sideCapNormal);
  mesh.setNormalBuffer("capNormalsBuffer", topBottomCapNormal);

  mesh.type = "cone";

  mesh.render = function(){
    
    mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, mesh.capUVBuffer);
    this.gl.vertexAttribPointer(mesh.shaderProgram._uv, 2, this.gl.FLOAT, false,4*2,0) ;
    mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, this.capNormalsBuffer);
    this.gl.vertexAttribPointer(mesh.shaderProgram._vNormal, 3, this.gl.FLOAT, false, 4*3, 0);
    mesh.gl.drawArrays( mesh.gl.TRIANGLE_FAN, 0, polygons+1);

    
    mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, mesh.sideUVBuffer);
    this.gl.vertexAttribPointer(mesh.shaderProgram._uv, 2, this.gl.FLOAT, false,4*2,0) ;
    mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, mesh.sideNormalsBuffer);
    this.gl.vertexAttribPointer(mesh.shaderProgram._vNormal, 3, this.gl.FLOAT, false, 4*3, 0);
    mesh.gl.bindBuffer(mesh.gl.ELEMENT_ARRAY_BUFFER, mesh.indexBuffer);
    mesh.gl.drawElements(mesh.gl.TRIANGLE_STRIP, mesh.indices.length, mesh.gl.UNSIGNED_SHORT, 0);

    
    mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, mesh.capUVBuffer);
    this.gl.vertexAttribPointer(mesh.shaderProgram._uv, 2, this.gl.FLOAT, false,4*2,0) ;
    mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, mesh.capNormalsBuffer);
    this.gl.vertexAttribPointer(mesh.shaderProgram._vNormal, 3, this.gl.FLOAT, false, 4*3, 0);
    mesh.gl.drawArrays( mesh.gl.TRIANGLE_FAN, polygons+1, (polygons+1));
  }

  return mesh;
}

/**
 * Create a Circle mesh.
 *
 * @param {Object} p - Object that represent a circle.
 * @param {number} p.radius - Circle's radius.
 * @param {number} p.resolution - Circle's height.
 * @param {AL3D.Material} p.material - Circle's material. If material is not defined, the Basic Material will set.
 *
 * @returns {AL3D.Mesh} - A circle's mesh.
*/
AL3D.Mesh.createCircle = function(p){
  var mesh = new AL3D.Mesh();
  var r = p.radius || 1;
  var res = p.resolution || 20;
  mesh.material = p.material || new AL3D.BasicMaterial();
  var urlTexture = mesh.material.texture;

  var resolution = res || 20;
  var createCircle = function(n, startAngle, z, radius){
    var vertices = [],dA = Math.PI*2/(n-1),angle,r=0.9;
      if (arguments.length === 4){
          r = radius;
      }
      var index;
      for(var i = 0; i < n-1; i++){
          angle = startAngle + dA*i;
          vertices.push(new ALMath.Vector3(r*Math.cos(angle),z,r*Math.sin(angle)));
          index = i;
      }
      angle = startAngle + dA*(index+1);
      vertices.push(new ALMath.Vector3(r*Math.cos(angle),z,r*Math.sin(angle)));
      return vertices;
  };

  mesh.vertices.push(new ALMath.Vector3(0,0,0));
  mesh.vertices = mesh.vertices.concat(createCircle(resolution,0,0,r));


    var dA = Math.PI*2/(resolution-1);
    mesh.uv = [];
    mesh.uv.push(0.5);
    mesh.uv.push(0.5);
    var radian;
    
    for (var i = 0; i < resolution; i++){
      mesh.uv.push(0.5 * Math.cos(dA*i) + 0.5);
      mesh.uv.push(0.5 * Math.sin(dA*i) + 0.5);
    }
    mesh.uv.push(0.5);

    for (var i = 0; i< resolution+1; i++){
        mesh.normals.push(new ALMath.Vector3(0,-1,0));
    }
    mesh.hasNormals = true;

    mesh.type = "circle";

    mesh.setUVBuffer();
    if (urlTexture !== undefined ){
    mesh.setTexture(urlTexture, mesh.uv);
  }
  mesh.setVertexBuffer();
  mesh.setIndexBuffer();
  mesh.setNormalBuffer();
  mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, mesh.uvBuffer);
  mesh.gl.bufferData(mesh.gl.ARRAY_BUFFER, new Float32Array(mesh.uv),mesh.gl.STATIC_DRAW);
  mesh.gl.bindBuffer(mesh.gl.ARRAY_BUFFER, mesh.normalBuffer);
  mesh.gl.bufferData(mesh.gl.ARRAY_BUFFER, new Float32Array(mesh.getNormals()),mesh.gl.STATIC_DRAW);
  mesh.render = function(){
    this.gl.drawArrays( this.gl.TRIANGLE_FAN, 0, resolution+1);
  }
  return mesh;
}

/**
 * Create a Cube mesh.
 *
 * @param {Object} p - Object that represent a cube.
 * @param {number} p.size - Cube's side size.
 * @param {AL3D.Material} p.material - Cube's material. If material is not defined, the Basic Material will set.
 *
 * @returns {AL3D.Mesh} - A cube's mesh.
*/
AL3D.Mesh.createCube = function(p){
  var mesh = {};
  var l = p.size;
  mesh.material = p.material || new AL3D.BasicMaterial();
  var urlTexture = mesh.material.texture;
  l = l || 1;
  n = l/2;
  mesh.vertices = [
      // Front face
      -n, -n,  n,
       n, -n,  n,
       n,  n,  n,
      -n,  n,  n,
      
      // Back face
      -n, -n, -n,
      -n,  n, -n,
       n,  n, -n,
       n, -n, -n,
      
      // Top face
      -n,  n, -n,
      -n,  n,  n,
       n,  n,  n,
       n,  n, -n,
      
      // Bottom face
      -n, -n, -n,
       n, -n, -n,
       n, -n,  n,
      -n, -n,  n,
      
      // Right face
       n, -n, -n,
       n,  n, -n,
       n,  n,  n,
       n, -n,  n,
      
      // Left face
      -n, -n, -n,
      -n, -n,  n,
      -n,  n,  n,
      -n,  n, -n
    ];

    mesh.normals = [
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,

    0, 0, -1,
    0, 0, -1,
    0, 0, -1,
    0, 0, -1,

    0, 1, 0,
    0, 1, 0,
    0, 1, 0,
    0, 1, 0,

    0, -1, 0,
    0, -1, 0,
    0, -1, 0,
    0, -1, 0,

    1, 0, 0,
    1, 0, 0,
    1, 0, 0,
    1, 0, 0,

    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0,
    -1, 0, 0
  ];

  mesh.hasNormals = true;

  mesh.indices = [
    0,  1,  2,      0,  2,  3,    // front
      4,  5,  6,      4,  6,  7,    // back
      8,  9,  10,     8,  10, 11,   // top
      12, 13, 14,     12, 14, 15,   // bottom
      16, 17, 18,     16, 18, 19,   // right
      20, 21, 22,     20, 22, 23    // left
  ];

  mesh.uv = [
      // Front
      0.0,  0.0,
      1.0,  0.0,
      1.0,  1.0,
      0.0,  1.0,
      // Back
      
      1.0,0.0,
      1.0,1.0,
      0.0,1.0,
      0.0,0.0,
      
      // Top
      0.0,  1.0,
      0.0,  0.0,
      1.0,  0.0,
      1.0,  1.0,
      
      // Bottom
      0.0,  0.0,
      1.0,  0.0,
      1.0,  1.0,
      0.0,  1.0,
      // Right

      0.0,  0.0,
      
      
      0.0,  1.0,
      1.0,  1.0,
      1.0,  0.0,
      // Left
      0.0,  0.0,
      1.0,  0.0,
      1.0,  1.0,
      0.0,  1.0
  ];

  mesh.type = "cube";

  var realMesh = new AL3D.Mesh({vertices : mesh.vertices, indices : mesh.indices, normals : mesh.normals, uv : mesh.uv, material : mesh.material});
  return realMesh;
}

/**
 * Create a Plane mesh.
 *
 * @param {Object} p - Object that represent a plane.
 * @param {number} p.size - Plane's side size.
 * @param {AL3D.Material} p.material - Plane's material. If material is not defined, the Basic Material will set.
 *
 * @returns {AL3D.Mesh} - A plane's mesh.
*/
AL3D.Mesh.createPlane = function(p){
  var mesh = new AL3D.Mesh();
  mesh.material = p.material || new AL3D.BasicMaterial();

  var l = p.size;
  var urlTexture = mesh.material.texture;

  l = l || 1;
  n = l/2;

  mesh.vertices = [
      -n, -n,  0,
       n, -n,  0,
       n,  n,  0,
      -n,  n,  0
    ];

    mesh.indices = [
    0,  1,  2,      0,  2,  3
  ];

  mesh.uv = [
      0.0,  0.0,
      1.0,  0.0,
      1.0,  1.0,
      0.0,  1.0,
  ];

  mesh.normals = [
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1
  ];
  mesh.hasNormals = true;

  mesh.type = "plane";

  mesh.setUVBuffer();

  if (urlTexture !== undefined && mesh.uv !== undefined){
    mesh.setTexture(urlTexture, mesh.uv);
  }

  mesh.setVertexBuffer();
  mesh.setIndexBuffer();
  mesh.setNormalBuffer();
  return mesh;
}

/**
 * Set a color map.
 *
 * @param {string} urlTexture - Color map's url to set.
 * @param {number[]} uv - Array with the uv coordinates.
*/
AL3D.Mesh.prototype.setTexture = function(urlTexture, uv){
  this.material.texture = new AL3D.Texture({url:urlTexture});
  this.material.texture.loadTexture();
  this.texBuffer = this.gl.createBuffer();
}

/**
 * Set a material
 *
 * @param {AL3D.Material} material - Material to set, If material is not defined, the Basic Material will set.
*/
AL3D.Mesh.prototype.setMaterial = function(material){
  this.material = material || new AL3D.BasicMaterial();
  var urlTexture = this.material.texture;
  if (urlTexture !== undefined && this.uv !== undefined && !this.material.init && this.material.texture.texture === undefined){
      this.setTexture(urlTexture, this.uv);
  }
  this.material.init = true;
}

/**
 * Set a specular map
 *
 * @param {string} urlTexture - Specular map's url to set.
*/
AL3D.Mesh.prototype.setSpecularMap = function(urlTexture){
  this.material.texture = new AL3D.Texture({url:urlTexture});
  this.material.specularMap.loadTexture();
}

/**
 * Set a normal map
 *
 * @param {string} urlTexture - Normal map's url to set.
*/
AL3D.Mesh.prototype.setNormalMap = function(urlTexture){
  this.material.texture = new AL3D.Texture({url:urlTexture});
  this.material.normalMap.loadTexture();
}

/**
 * Set a shader for the mesh
 *
 * @param {string} vs - Vertex shader to use.
 * @param {string} fs - Fragment shader to use.
*/
AL3D.Mesh.prototype.setShader = function(vs, fs){
  var getShader = function (source, type, typeString){
    var shader = AL3D.Renderer.gl.createShader(type);
    AL3D.Renderer.gl.shaderSource(shader, source);
    AL3D.Renderer.gl.compileShader(shader);
    if (!AL3D.Renderer.gl.getShaderParameter(shader,AL3D.Renderer.gl.COMPILE_STATUS)){
      alert ("Error en "+typeString+ " Shader : " + AL3D.Renderer.gl.getShaderInfoLog(shader));
          return false;
    }
    return shader;
  }

  var vertexShader = getShader(vs, AL3D.Renderer.gl.VERTEX_SHADER, "VERTEX");
  var fragmentShader = getShader(fs, AL3D.Renderer.gl.FRAGMENT_SHADER, "FRAGMENT");
  this.shaderProgram = AL3D.Renderer.gl.createProgram();
  AL3D.Renderer.gl.attachShader(this.shaderProgram, vertexShader);
  AL3D.Renderer.gl.attachShader(this.shaderProgram, fragmentShader);

  AL3D.Renderer.gl.linkProgram(this.shaderProgram);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "vPosition");
  this.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._M = AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "vM");
  this.shaderProgram._V = AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "vV");
  this.shaderProgram._P = AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "vP");
  this.shaderProgram._MVP = AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "vMVP");
  this.shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uSampler");
  this.shaderProgram._uSpecularMapSampler =  AL3D.Renderer.gl.getUniformLocation(shaderProgram, "uSpecularMapSampler");
  this.shaderProgram._uNormalMapSampler =  AL3D.Renderer.gl.getUniformLocation(shaderProgram, "uNormalMapSampler");
  this.shaderProgram._uv = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aTextureCoord");
  this.gl.enableVertexAttribArray(this.shaderProgram._uv);
}

/**
 * Set the vertex buffer for the mesh
 */
AL3D.Mesh.prototype.setVertexBuffer = function(){
  this.vertexBuffer = this.gl.createBuffer();
  this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.vertexBuffer);
  var a = new Float32Array(this.getVertex());
  this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW);
}

/**
 * Set the normal buffer for the mesh
 */
AL3D.Mesh.prototype.setNormalBuffer = function(property, data){
  if (property === undefined && data === undefined){
    this.normalBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.normalBuffer);
    var a = new Float32Array(this.getNormals());
    this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW);
  }else{
    this[property] = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this[property]);
    var a = new Float32Array(this.getNormals(data));
    this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW);
  }
}

/**
 * Set the uv buffer for the mesh
 */
AL3D.Mesh.prototype.setUVBuffer = function(property, data){
  if (property === undefined && data === undefined){
    this.uvBuffer = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.uvBuffer);
    var a = new Float32Array(this.uv);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW);
  }else{
    this[property] = this.gl.createBuffer();
    this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this[property]);
    var a = new Float32Array(data);
    this.gl.bufferData(this.gl.ARRAY_BUFFER, a, this.gl.STATIC_DRAW);
  }
}

/**
 * Set the index buffer for the mesh
 */
AL3D.Mesh.prototype.setIndexBuffer = function(){
  this.indexBuffer = this.gl.createBuffer();
  this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
  var a = this.getIndexes();
  this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(this.getIndexes()), this.gl.STATIC_DRAW);
}

/**
 * Abstract class that represents a Camera.
 *
 * @class
 * @abstract
 * @author Ángel Luis Perales Gómez.
 * @augments AL3D.Object3D
 */
AL3D.Camera = function(){
  AL3D.Object3D.call(this);
  this.projectionMatrix = new ALMath.Matrix4();
  this.viewMatrix = new ALMath.Matrix4();
  this.target = new ALMath.Vector3();
  this.up = new ALMath.Vector3();
}

AL3D.Camera.prototype.constructor = AL3D.Camera;

AL3D.Camera.prototype = {
  /**
   * Set the camera parameters.
   *
   * @param {ALMath.Vector3} eye - Position of the camera.
   * @param {ALMath.Vector3} target - Where camera is looking.
   * @param {ALMath.Vector3} up - Up vector of the camera.
  */
  lookAt : function (eye, target, up){
    this.position = eye;
    this.target = target;
    this.up = up;
    this.update();
  },
  /**
   * Update matrices of the camera.
  */
  update : function (){
    this.viewMatrix = this.viewMatrix.lookAt(this.position,this.target,this.up);
  },

  /**
   * Project a vector.
   *
   * Project a 3D world vector to 2D screen vector.
   *
   * @param {ALMath.Vector3} vector - 3D world vector to map to screen coordinates.
  */
  project : function (vector){
    var viewMatrix = camera.viewMatrix;
    var projectionMatrix = camera.projectionMatrix;

    var mv = viewMatrix.multiply(projectionMatrix);
    var transformedVector = mv.transformPoint(vector);
    var x = (transformedVector.x *0.5 + 0.5)*AL3D.width + x;
    var y = (transformedVector.y *0.5 + 0.5)*AL3D.height + y;
    var z = (1 + transformedVector.z) * 0.5;

    var screenCoords = new ALMath.Vector3(x,y,z);
    return screenCoords;
  },

  /**
   * Unproject a vector.
   *
   * Unproject a 2D screen vector to 3D world vector.
   *
   * @param {ALMath.Vector3} vector - 2D screen vector to map to world coordinates.
  */
  unproject : function (vector){
    var viewMatrix = camera.viewMatrix;
    var projectionMatrix = camera.projectionMatrix;

    var mv = viewMatrix.multiply(projectionMatrix);
    var invMV = mv.getInverse();
    
    var x = ((vector.x -0) / (AL3D.width)) *2 -1;
    var y = ((vector.y -0) / (AL3D.height)) * 2 -1;
    var z = 2*vector.z-1;
    var w = 1;
    var vec4 = new ALMath.Vector4(x,y,z,w);
    var transformedVector = invMV.transformPoint(vec4);
    return transformedVector;
  }
}

/**
 * Class that represents a PerspectiveCamera.
 *
 * @class
 * @augments AL3D.Camera
 * @author Ángel Luis Perales Gómez.
 *
 * @param {number} fov - Field of view.
 * @param {number} aspect - Aspect ratio.
 * @param {number} near - Frustum's near.
 * @param {number} far - Frustum's far.
 */
AL3D.PerspectiveCamera = function(fov, aspect, near, far){
  AL3D.Camera.call(this);

  this.fov = fov !== undefined ? fov : 40;
  this.aspect = aspect !== undefined ? aspect : 1;
  this.near = near !== undefined ? near : 0.1;
  this.far = far !== undefined ? far : 1000;

  this.projectionMatrix.perspectiveProjection(this.fov, this.aspect, this.near, this.far);
}

AL3D.PerspectiveCamera.prototype.constructor = AL3D.PerspectiveCamera;
AL3D.PerspectiveCamera.prototype = Object.create( AL3D.Camera.prototype );

/**
 * Class that represents an OrthographicCamera.
 *
 * @class
 * @augments AL3D.Camera
 * @author Ángel Luis Perales Gómez.
 *
 * @param {number} left - Frustum's left.
 * @param {number} right - Frustum's right.
 * @param {number} top - Frustum's top.
 * @param {number} bottom - Frustum's bottom.
 * @param {number} near - Frustum's near.
 * @param {number} far - Frustum's far.
 */
AL3D.OrthographicCamera = function(left, right, top, bottom, near, far){
  AL3D.Camera.call(this);

  this.projectionMatrix.orthographicProjection(left, right, top, bottom, near, far);
}

AL3D.OrthographicCamera.prototype.constructor = AL3D.OrthographicCamera;
AL3D.OrthographicCamera.prototype = Object.create( AL3D.Camera.prototype );

/**
 * Class that can be use to select meshes in the scene.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 *
 * @param {Object} p - Object that represents the picker.
 * @param {function} p.callback - Callback to execute when mesh is picked.
 */
AL3D.Picker = function(p){
  this.callback = p!==undefined?p.callback:undefined;
  this.vertexShader = ` attribute vec4 aPosition;
                        uniform mat4 uMVP;
                         
                        void main() {
                           gl_Position = uMVP * aPosition;
                        }`;

  this.fragmentShader = ` precision mediump float;
                          uniform vec3 uCode;
                           
                          void main() {
                             gl_FragColor = vec4(uCode.x/255.0, uCode.y/255.0, uCode.z/255.0,1.0);
                          }`;

  this.shaderProgram = AL3D.Utils.compileAndLinkShader(this.vertexShader, this.fragmentShader);

  this.shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(this.shaderProgram, "aPosition");
  AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
  this.shaderProgram._uMVP =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uMVP");
  this.shaderProgram._uCode =  AL3D.Renderer.gl.getUniformLocation(this.shaderProgram, "uCode");
  this.gl = AL3D.gl;

  this.textureToRender = this.gl.createTexture();
  this.gl.bindTexture(this.gl.TEXTURE_2D, this.textureToRender);
  this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
  this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
  this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
      
  this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, AL3D.width, AL3D.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);

  this.depthToRender = this.gl.createRenderbuffer();
  this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthToRender);
  this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, AL3D.width, AL3D.height);



  // Create a framebuffer and attach the texture.
  this.fb = this.gl.createFramebuffer();
  this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fb);
  this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.textureToRender, 0);
  this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthToRender);
  this.gl.bindTexture(this.gl.TEXTURE_2D, null);
  this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
  this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null);

}

AL3D.Picker.prototype = {

  /**
   * Set the x and y coordenates and tell the system that must do the pick process.
   *
   * @param {number} x - screen x coordinate.
   * @param {number} y - screen y coordinate.
  */
  pick : function (x,y){
    this.x = x;
    this.y = y;
    this.picking = true;
  },

  /**
   * Do the pick process and call the mesh clickListener or the callback passed to picker constructor.
   *
   * @param {AL3D.Object3D[]} renderObjects - Objects in the scene.
   * @param {AL3D.Camera} camera - Camera to use to render the scene.
   * @param {number} width - Viewport width
   * @param {number} height - Viewport height.
  */
  doPick : function (renderObjects, camera, width, height){
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fb);
    this.gl.useProgram(this.shaderProgram);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    var code = 0;
    for (var i = 0; i < renderObjects.length; i++){
      mesh = renderObjects[i];
      if (!(mesh instanceof AL3D.Mesh)){
        continue;
      }

      if (mesh.pickable == undefined || mesh.pickable == true){
        code +=100;
        mesh.code = code;
        var c = AL3D.Utils.hexIntToRgb(code);
        AL3D.gl.uniform3fv(this.shaderProgram._uCode, new Float32Array([c.r, c.g, c.b]));
      }

      mesh.prepareToRender();

      // VERTEX BUFFER
      AL3D.gl.enableVertexAttribArray(this.shaderProgram._position);
      this.gl.bindBuffer(this.gl.ARRAY_BUFFER, mesh.vertexBuffer);
      this.gl.vertexAttribPointer(this.shaderProgram._position, 3, this.gl.FLOAT, false, 4*3, 0);



      var transform = mesh.transform;
      var viewMatrix = camera.viewMatrix;
      var projectionMatrix = camera.projectionMatrix;

      var mv = transform.multiply(viewMatrix);

      var mvp = projectionMatrix.multiply(mv);

      this.gl.uniformMatrix4fv(this.shaderProgram._uMVP, false,mvp.components);

      if (mesh.hasOwnProperty("render")){
        mesh.render();
      }else{

        if (mesh.getIndexes().length != 0){
          this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, mesh.indexBuffer);
          this.gl.drawElements(this.gl.TRIANGLES, mesh.getIndexes().length, this.gl.UNSIGNED_SHORT, 0);
        }else{
          var l = mesh.getVertex().length/3;
          this.gl.drawArrays(this.gl.TRIANGLES, 0, l); 
        }
      }
    }

    if (this.picking == true){
    var pixels = new Uint8Array(4);

    this.gl.readPixels(this.x, height - this.y, 1, 1, this.gl.RGBA, this.gl.UNSIGNED_BYTE, pixels);
    var color = pixels[0] << 16 | pixels[1] << 8 | pixels[2];
    for (var i=0; i < renderObjects.length; i++){
      mesh = renderObjects[i];
      if (!(mesh instanceof AL3D.Mesh)){
        continue;
      }
       if (mesh.pickable == false){
        continue
      }
      if (mesh.code == color){
        if (typeof this.callback == 'function') { 
          this.callback(mesh);
        } else if (typeof mesh.clickListener == 'function'){
          mesh.clickListener();
        }
      }
    }
  }
    this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    this.picking = false;

  }
}

/**
 * Abstract class that represents an light.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 * @augments AL3D.Object3D
 * @abstract
 *
 * @param {Object} p - Object that represents an light.
 * @param {number} p.color - Light color.
 */

AL3D.Light = function(p){
  AL3D.Object3D.call(this);
  this.type = "Light";
  this.color = p.color || 0xFFFFFFFF;
}

/**
 * Class that represents an Ambient light.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 * @augments AL3D.Light
 *
 * @param {Object} p - Object that represents an Ambient light.
 * @param {number} p.color - Light color.
 * @param {number} p.density - Light intensity.
 */

AL3D.AmbientLight = function(p){
  AL3D.Light.call(this, p);
  this.type = "AmbientLight";
  this.intensity = p.intensity || 1.0;
}

/**
 * Class that represents a Directional light.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 * @augments AL3D.Light
 *
 * @param {Object} p - Object that represents a Directional light.
 * @param {number} p.color - Light color.
 * @param {number} p.density - Light intensity.
 * @param {ALMath.Vector3} p.position - Light direction.
 */

AL3D.DirectionalLight = function(p){
  AL3D.Light.call(this, p);
  this.type = "DirectionalLight";
  this.intensity = p.intensity || 1.0;
  this.position = p.position || new ALMath.Vector3(0,1,0);
}

/**
 * Class that represent a Point light.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 * @augments AL3D.Light
 *
 * @param {Object} p - Object that represents a Point light.
 * @param {number} p.color - Light color.
 * @param {ALMath.Vector3} p.position - Light poistion.
 * @param {number} p.distance - Light distance.
 * @param {number} p.intensity - Light intensity.
 * @param {number} p.linearAttenuation - Light linear attenuation.
 * @param {number} p.quadraticAttenuation - Light cuadratic attenuation.
 * @param {number} p.constantAttenuation - Light constant attenuation.
 */

AL3D.PointLight = function (p){
  AL3D.Light.call(this, p);
  this.type = "PointLight";
  this.position = p.position || new ALMath.Vector3(0,1,0);
  this.distance = p.distance || 1.0;
  this.intensity = p.intensity || 1.0;
  this.linearAttenuation = p.linearAttenuation || 0.1;
  this.quadraticAttenuation = p.quadraticAttenuation || 0.01;
  this.constantAttenuation = p.constantAttenuation || 1.0;
}

/**
 * Class that represents a Point light.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 * @augments AL3D.Light
 *
 * @param {Object} p - Object that represents a Point light.
 * @param {number} p.color - Light color.
 * @param {ALMath.Vector3} p.position - Light poistion.
 * @param {number} p.distance - Light distance.
 * @param {number} p.intensity - Light intensity.
 * @param {number} p.linearAttenuation - Light linear attenuation.
 * @param {number} p.quadraticAttenuation - Light cuadratic attenuation.
 * @param {number} p.constantAttenuation - Light constant attenuation.
 * @param {ALMath.Vector3} p.direction - Light direction.
 * @param {number} p.spotCosCutOff - Light Spot cosine cut off.
 * @param {number} p.spotExponent - Light Spot Exponent.
 */

AL3D.SpotLight = function (p){
  AL3D.Light.call(this, color);
  this.type = "SpotLight";
  this.position = p.position || new ALMath.Vector3(0,1,0);
  this.distance = p.distance || 1.0;
  this.intensity = p.intensity || 1.0;
  this.linearAttenuation = p.linearAttenuation || 0.1;
  this.quadraticAttenuation = p.quadraticAttenuation || 0.01;
  this.constantAttenuation = p.constantAttenuation || 1.0;
  this.direction = p.direction || 1.0;
  this.spotCosCutOff = p.spotCosCutOff || 1.0;
  this.spotExponent = p.spotExponent || 1.0;
}

/**
 * Abstract class that represents a Material.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 * @abstract
 *
 * @param {Object} p - Object that represents a Material.
 * @param {string} p.video - video uses as video as a texture.
 * @param {string} p.texture - color map.
 * @param {string} p.specularMap - specular map.
 * @param {string} p.normalMap - normal map.
 */

AL3D.Material = function(p){
  this.texture = p===undefined?undefined:p.texture;
  this.video = p===undefined?undefined:p.video;
  this.specularMap = p===undefined?undefined:p.specularMap;
  if (this.specularMap !== undefined){
    this.specularMap = new AL3D.Texture({url:this.specularMap});
    this.specularMap.loadTexture();
  }
  this.normalMap = p===undefined?undefined:p.normalMap;
  if (this.normalMap !== undefined){
    this.normalMap = new AL3D.Texture({url:this.normalMap});
    this.normalMap.loadTexture();
  }
  if (this.video !== undefined){
    this.texture = new AL3D.Texture({});
    this.texture.loadVideoTexture(this.video);
  }
}

/**
 * Class that represents a Basic Material.
 *
 * @class
 * @augments AL3D.Material
 * @author Ángel Luis Perales Gómez.
 *
 * @param {Object} p - Object that represents a Material.
 * @param {string} p.video - video uses as video as a texture.
 * @param {string} p.texture - color map.
 * @param {string} p.specularMap - specular map.
 * @param {string} p.normalMap - normal map.
 * @param {number} p.diffuse - diffuse color.
 * @param {number} p.ambient - ambient color.
 */

AL3D.BasicMaterial = function (p){
  AL3D.Material.call(this, p);
  this.type = "BasicMaterial";
  
  this.diffuse = 0xFFCCCCCC;
  this.ambient = 0xFFFFFFFF;
  if (p !== undefined && p.diffuse !== undefined){
    this.diffuse = p.diffuse;
  }
  if (p !== undefined && p.ambient !== undefined){
    this.ambient = p.ambient;
  }
}

/**
 * Class that represents a Lambert Material.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 * @augments AL3D.Material
 *
 * @param {Object} p - Object that represents a Material.
 * @param {string} p.video - video uses as video as a texture.
 * @param {string} p.texture - color map.
 * @param {string} p.specularMap - specular map.
 * @param {string} p.normalMap - normal map.
 * @param {number} p.diffuse - diffuse color.
 * @param {number} p.ambient - ambient color.
 * @param {Object} p.shading - Shadding/interpolation technique (AL3D.GouraudInterpolation or AL3D.PĥongInterpolation).
 * @param {number} p.sideMode - AL3D.ONE_SIDE or AL3D.TWO_SIDE.
 */

AL3D.LambertMaterial = function (p){
  AL3D.Material.call(this, p);
  this.type = "LambertMaterial";
  this.shading =  p.shading || AL3D.GouraudInterpolation;
  this.sideMode = p.sideMode || AL3D.ONE_SIDE;
  this.diffuse = 0xFFFFFFFF;
  this.ambient = 0xFFFFFFFF;
  if (p !== undefined && p.diffuse !== undefined){
    this.diffuse = p.diffuse;
  }
  if (p !== undefined && p.ambient !== undefined){
    this.ambient = p.ambient;
  }
}

/**
 * Class that represents a Phong Material.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 * @augments AL3D.Material
 *
 * @param {Object} p - Object that represents a Material.
 * @param {string} p.video - video uses as video as a texture.
 * @param {string} p.texture - color map.
 * @param {string} p.specularMap - specular map.
 * @param {string} p.normalMap - normal map.
 * @param {number} p.diffuse - diffuse color.
 * @param {number} p.ambient - ambient color.
 * @param {number} p.specular - specular color.
 * @param {number} p.shininess - shininess.
 * @param {Object} p.shading - Shadding/interpolation technique (AL3D.GouraudInterpolation or AL3D.PĥongInterpolation).
 * @param {number} p.sideMode - AL3D.ONE_SIDE or AL3D.TWO_SIDE.
 */


AL3D.PhongMaterial = function (p){
  AL3D.Material.call(this, p);
  this.type = "PhongMaterial";
  this.shading =  p.shading || AL3D.GouraudInterpolation;
  this.sideMode = p.sideMode || AL3D.ONE_SIDE;
  this.diffuse = 0xFFFFFFFF;
  this.ambient = 0xFFFFFFFF;
  this.specular = 0xFFFFFFFF;
  this.shininess = 1.0;
  if (p !== undefined && p.diffuse !== undefined){
    this.diffuse = p.diffuse;
  }
  if (p !== undefined && p.ambient !== undefined){
    this.ambient = p.ambient;
  }
  if (p !== undefined && p.specular !== undefined){
    this.specular = p.specular;
  }
  if (p !== undefined && p.shininess !== undefined){
    this.shininess = p.shininess;
  }
}

/**
 * Class that represents a Blinn Material.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 * @augments AL3D.Material
 *
 * @param {Object} p - Object that represents a Material.
 * @param {string} p.video - video uses as video as a texture.
 * @param {string} p.texture - color map.
 * @param {string} p.specularMap - specular map.
 * @param {string} p.normalMap - normal map.
 * @param {number} p.diffuse - diffuse color.
 * @param {number} p.ambient - ambient color.
 * @param {number} p.specular - specular color.
 * @param {number} p.shininess - shininess.
 * @param {Object} p.shading - Shadding/interpolation technique (AL3D.GouraudInterpolation or AL3D.PĥongInterpolation).
 * @param {number} p.sideMode - AL3D.ONE_SIDE or AL3D.TWO_SIDE.
 */

AL3D.BlinnMaterial = function (p){
  AL3D.Material.call(this, p);
  this.type = "BlinnMaterial";
  this.shading = p.shading || AL3D.GouraudInterpolation;
  this.sideMode = p.sideMode || AL3D.ONE_SIDE;
  this.diffuse = 0xFFFFFFFF;
  this.ambient = 0xFFFFFFFF;
  this.specular = 0xFFFFFFFF;
  if (p !== undefined && p.diffuse !== undefined){
    this.diffuse = p.diffuse;
  }
  if (p !== undefined && p.ambient !== undefined){
    this.ambient = p.ambient;
  }
  if (p !== undefined && p.specular !== undefined){
    this.specular = p.specular;
  }
  if (p !== undefined && p.shininess !== undefined){
    this.shininess = p.shininess;
  }
}

/**
 * Class that represents a Toon Material.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 * @augments AL3D.Material
 *
 * @param {Object} p - Object that represents a Material.
 * @param {string} p.video - video uses as video as a texture.
 * @param {string} p.texture - color map.
 * @param {string} p.specularMap - specular map.
 * @param {string} p.normalMap - normal map.
 * @param {number} p.diffuse - diffuse color.
 * @param {number} p.ambient - ambient color.
 * @param {Object} p.shading - Shadding/interpolation technique (AL3D.GouraudInterpolation or AL3D.PĥongInterpolation).
 * @param {number} p.sideMode - AL3D.ONE_SIDE or AL3D.TWO_SIDE.
 */


AL3D.ToonMaterial = function (p){
  AL3D.Material.call(this, p);
  this.type = "ToonMaterial";
  this.shading = p.shading || AL3D.GouraudInterpolation;
  this.sideMode = p.sideMode || AL3D.ONE_SIDE;
  this.diffuse = 0xFFFFFFFF;
  this.ambient = 0xFFFFFFFF;
  if (p !== undefined && p.diffuse !== undefined){
    this.diffuse = p.diffuse;
  }
  if (p !== undefined && p.ambient !== undefined){
    this.ambient = p.ambient;
  }

  // Texture to map the new brightness level. Power of Two
  var l = [
    0x44, 0x44, 0x44, 0x44,
    0x88, 0x88, 0x88, 0x88,
    0xCC, 0xCC, 0xCC, 0xCC,
    0xFF, 0xFF, 0xFF, 0xFF
  ];
  if (p.levels !== undefined){
    for (var i = 0; i < p.levels.length; i++){
      var c = AL3D.Utils.hexIntToRgb(p.levels[i]);
      l.push(c.r);
      l.push(c.g);
      l.push(c.b);
      l.push(c.a);
    }
  }

  this.levels = new Uint8Array(l);

  var image = this.levels;
  this.textureToon = new AL3D.Texture({});
  this.textureToon.texture = AL3D.gl.createTexture();
    AL3D.gl.bindTexture(AL3D.TEXTURE_2D, this.textureToon.texture);
    AL3D.gl.pixelStorei(AL3D.gl.UNPACK_FLIP_Y_WEBGL, true);
    AL3D.gl.texImage2D(AL3D.gl.TEXTURE_2D, 0, AL3D.gl.RGBA, l.length/4, 1, 0, AL3D.gl.RGBA, AL3D.gl.UNSIGNED_BYTE, image);
    AL3D.gl.generateMipmap( AL3D.gl.TEXTURE_2D );
    AL3D.gl.texParameteri( AL3D.gl.TEXTURE_2D, AL3D.gl.TEXTURE_MIN_FILTER, AL3D.gl.NEAREST_MIPMAP_LINEAR );
    AL3D.gl.texParameteri( AL3D.gl.TEXTURE_2D, AL3D.gl.TEXTURE_MAG_FILTER, AL3D.gl.NEAREST );


}

/**
 * Class that represents a texture.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 *
 * @param {Object} p - Object that represents a texture.
 * @param {string} p.url - texture url.
 * @param {number} p.wrapS - TEXTURE_WRAP_S.
 * @param {number} p.wrapT - TEXTURE_WRAP_T
 * @param {number} p.magFilter - TEXTURE_MAG_FILTER.
 * @param {number} p.minFilter - TEXTURE_MIN_FILTER.
 * @param {number} p.format - texture format.
 * @param {number} p.type - texture type.
 * @param {boolean} p.flipY - if the texture must be flipped.
 */
AL3D.Texture = function(p){

  this.url = p.url || "";
  this.wrapS = p.wrapS !== undefined ? p.wrapS : AL3D.CLAMP_TO_EDGE;
  this.wrapT = p.wrapT !== undefined ? p.wrapT : AL3D.CLAMP_TO_EDGE;
  this.loaded = false;

  this.magFilter = p.magFilter !== undefined ? p.magFilter : AL3D.LINEAR;
  this.minFilter = p.minFilter !== undefined ? p.minFilter : AL3D.LINEAR_MIPMAP_LINEAR;

  this.format = p.format !== undefined ? p.format : AL3D.RGBA;
  this.type = p.type !== undefined ? p.type : AL3D.UNSIGNED_BYTE;

  this.flipY = p.flipY !== undefined ? p.flipY : true;

}

AL3D.Texture.prototype = {
  /**
   * Load the texture.
  */
  loadTexture : function (){
    var texObject = this;
    cache.loadTexture(this.url, function(img){
      texObject.texture=AL3D.gl.createTexture();
      texObject.image = img;
      AL3D.gl.pixelStorei(AL3D.gl.UNPACK_FLIP_Y_WEBGL, true);
      AL3D.gl.bindTexture(AL3D.TEXTURE_2D, texObject.texture);
      AL3D.gl.texImage2D(AL3D.TEXTURE_2D, 0, AL3D.gl.RGBA, AL3D.gl.RGBA, AL3D.gl.UNSIGNED_BYTE, img);
      AL3D.gl.texParameteri(AL3D.TEXTURE_2D, AL3D.TEXTURE_MAG_FILTER, texObject.magFilter);
      AL3D.gl.texParameteri(AL3D.TEXTURE_2D, AL3D.TEXTURE_MIN_FILTER, texObject.minFilter);
      AL3D.gl.generateMipmap(AL3D.TEXTURE_2D);
      AL3D.gl.bindTexture(AL3D.TEXTURE_2D, null);
      texObject.loaded = true;
    });
  },

  /**
   * Load the texture from video.
   *
   * @param {Object} video - video element dom to load.
  */
  loadVideoTexture : function (video){

    this.texture=AL3D.gl.createTexture();
    this.video = video;
    AL3D.gl.pixelStorei(AL3D.gl.UNPACK_FLIP_Y_WEBGL, true);
    AL3D.gl.bindTexture(AL3D.TEXTURE_2D, this.texture);
      
    AL3D.gl.texParameteri(AL3D.TEXTURE_2D, AL3D.TEXTURE_MAG_FILTER, AL3D.gl.LINEAR);
    AL3D.gl.texParameteri(AL3D.TEXTURE_2D, AL3D.TEXTURE_MIN_FILTER, AL3D.gl.LINEAR);
    AL3D.gl.texParameteri( AL3D.gl.TEXTURE_2D, AL3D.gl.TEXTURE_WRAP_S, AL3D.gl.CLAMP_TO_EDGE );
    AL3D.gl.texParameteri( AL3D.gl.TEXTURE_2D, AL3D.gl.TEXTURE_WRAP_T, AL3D.gl.CLAMP_TO_EDGE );
    AL3D.gl.bindTexture(AL3D.TEXTURE_2D, null);
  },

  /**
   * Update video texture.
  */
  updateVideoTexture : function (){
    AL3D.gl.bindTexture(AL3D.TEXTURE_2D, this.texture);
    AL3D.gl.texImage2D(AL3D.TEXTURE_2D, 0, AL3D.gl.RGBA, AL3D.gl.RGBA, AL3D.gl.UNSIGNED_BYTE, this.video);
  }
}

/**
 * Class that manager textures.
 *
 * @class
 * @author Ángel Luis Perales Gómez.
 */
AL3D.TextureManager = function(){
  this._cache = {};
}

AL3D.TextureManager.prototype = {
  /**
   * Store texture in the manager.
   *
   * @param {string} key - The url of texture
   * @param {Object} value - The texture stored
   */
  set : function(key, value){
    this._cache[key] = value;
  },

  /**
   * Get a texture stored in the manager.
   *
   * @param {string} key - The url of texture
   *
   * @returns {object} - return a texture.
   */
  get : function(key){
    return this._cache[key];
  },

  /**
   * Load a texture from the texture manager.
   *
   * @param {string} url - the url of texture
   * @param {function} callback - function to call when the texture is loaded
  */
  loadTexture : function (url, callback){
    if (this._cache[url]){
      callback(this._cache[url]);
    }else{
      var image=new Image();

      image.src=url;
      image.onload=function(e) {
        callback(this);
      };
      this._cache[url] = image;
    }
  }
}

AL3D.ShaderManager = function (){
  this._cache = {};
}

AL3D.ShaderManager.prototype = {
  getTangentComputationFunctions : function (mesh){
    var code = [];
    code.push("mat3 computeTangentSpace(vec3 N, vec3 p, vec2 uv){");
    code.push("vec3 dp1 = dFdx( p );");
    code.push("vec3 dp2 = dFdy( p );");
    code.push("vec2 duv1 = dFdx( uv );");
    code.push("vec2 duv2 = dFdy( uv );");
    code.push("vec3 dp2perp = cross( dp2, N );");
    code.push("vec3 dp1perp = cross( N, dp1 );");
    code.push("vec3 T = dp2perp * duv1.x + dp1perp * duv2.x;");
    code.push("vec3 B = dp2perp * duv1.y + dp1perp * duv2.y;");
    code.push("float invmax = inversesqrt( max( dot(T,T), dot(B,B) ) );");
    code.push("return mat3( T * invmax, B * invmax, N );");
    code.push("}");
    code.push("");
    code.push("vec3 transformNormalWithTangentSpace( vec3 N, vec3 V, vec2 texcoord ){");
    code.push("vec3 map = texture2D(uNormalMapSampler, texcoord ).xyz;");
    code.push("map = map * 255./127. - 128./127.;");
    code.push("mat3 TBN = computeTangentSpace(N, -V, texcoord);");
    code.push("return normalize(TBN * map);");
    code.push("}");
    return code.join("\n");
  },
  getPointLightFor : function (mesh){
    var code = [];
    code.push("vec4 calculePointLight(int index, PointLight light, vec3 N){");
    code.push("vec3 L;")
    code.push("vec4 diffuse;");
    code.push("float Kd, dist, att;");
    code.push("dist = distance(P, light.position);");
    code.push("att = 1.0/(light.constantAttenuation + light.linearAttenuation * dist + light.quadraticAttenuation * dist * dist);");
    code.push("L = normalize( light.position.xyz - P );");
    code.push("Kd = max( dot(L, N), 0.0 );");
    code.push("diffuse = Kd*light.color*light.intensity*material.diffuseColor;");
    if (mesh.material instanceof AL3D.LambertMaterial){
      code.push("return diffuse*att;");
    }else if (mesh.material instanceof AL3D.PhongMaterial || mesh.material instanceof AL3D.BlinnMaterial){
      code.push("float angle;");
      if (mesh.material instanceof AL3D.BlinnMaterial){
        code.push("H = normalize(L+E);");
        code.push("angle = max(dot(N,H),0.0);");
      }else{
        code.push("vec3 R = reflect(-L,N);");
        code.push("angle = max(dot(R,E),0.0);");
      }
      if (mesh.material.specularMap !== undefined){
        code.push("float shininess = texture2D(uSpecularMapSampler, vec2(vTextureCoord.s, vTextureCoord.t)).r*255.0;");
        code.push("float Ks = 0.0;");
        code.push("if (shininess > 5.0){");
        code.push("Ks = pow(angle, shininess);}");
      }else{
        code.push("float Ks = pow(angle, material.shininess);");
      }
      code.push("vec4 specular = Ks*light.color*light.intensity*material.specularColor;");
      code.push("if (dot(L,N) < 0.0){");
      code.push("specular = vec4(0.0,0.0,0.0,0.0);");
      code.push("}");
      code.push("vec4 result = min((diffuse+specular)*att,vec4(1));");
      code.push("result.a = material.diffuseColor.a;");
      code.push("return result;");
    }
    code.push("}");
    return code.join("\n");
  },
  getPointLightToonFor : function (mesh){
    var code = [];
    code.push("float calculePointLight(int index, PointLight light, vec3 N){");
    code.push("vec3 L;")
    code.push("vec4 diffuse;");
    code.push("float Kd, dist, att;");
    code.push("dist = distance(P, light.position);");
    code.push("att = 1.0/(light.constantAttenuation + light.linearAttenuation * dist + light.quadraticAttenuation * dist * dist);");
    code.push("L = normalize( light.position.xyz - P );");
    code.push("Kd = pow(max( dot(L, N), 0.0 ), 5.0);");
    code.push("return Kd*att;");
    code.push("}");
    return code.join("\n");
  },
  getDirectionalLightFor : function (mesh){
    var code = []
    code.push("vec4 calculeDirectionalLight(int index, DirectionalLight light, vec3 N){");
    code.push("vec4 diffuse;");
    code.push("vec3 L;");
    code.push("float Kd;");
    code.push("L = normalize(light.position.xyz);");
    code.push("Kd = max( dot(L, N), 0.0 );");
    code.push("diffuse = Kd*light.color*light.intensity*material.diffuseColor;");
    if (mesh.material instanceof AL3D.LambertMaterial){
      code.push("return diffuse;");
    }else if (mesh.material instanceof AL3D.PhongMaterial || mesh.material instanceof AL3D.BlinnMaterial){
      code.push("float angle;");
      if (mesh.material instanceof AL3D.BlinnMaterial){
        code.push("H = normalize(L+E);");
        code.push("angle = max(dot(N,H),0.0);");
      }else{
        code.push("vec3 R = reflect(-L,N);");
        code.push("angle = max(dot(R,E),0.0);");
      }
      if (mesh.material.specularMap !== undefined){
        code.push("float shininess = texture2D(uSpecularMapSampler, vec2(vTextureCoord.s, vTextureCoord.t)).r*255.0;");
        code.push("float Ks = 0.0;");
        code.push("if (shininess > 5.0){");
        code.push("Ks = pow(angle, shininess);}");
      }else{
        code.push("float Ks = pow(angle, material.shininess);");
      }
      code.push("vec4 specular = Ks*light.color*light.intensity*material.specularColor;");
      code.push("if (dot(L,N) < 0.0){");
      code.push("specular = vec4(0.0,0.0,0.0,1.0);");
      code.push("}");
      code.push("vec4 result = min((diffuse+specular),vec4(1));");
      code.push("result.a = material.diffuseColor.a;");
      code.push("return result;");
    }
    code.push("}");
    return code.join("\n");
  },
  getDirectionalLightToonFor : function (mesh){
    var code = []
    code.push("float calculeDirectionalLight(int index, DirectionalLight light, vec3 N){");
    code.push("vec3 L;")
    code.push("vec4 diffuse;");
    code.push("float Kd;");
    code.push("L = normalize( light.position.xyz - P );");
    code.push("Kd = pow(max( dot(L, N), 0.0 ), 5.0);");
    code.push("return Kd;");
    code.push("}");
    return code.join("\n");
  },
  getSpotLigthFor : function (mesh){
    var code = [];
    code.push("vec4 calculeSpotLight(int index, SpotLight light, vec3 N){");
    code.push("vec4 diffuse;");
    code.push("vec3 L;");
    code.push("float Kd, dist, att;");
    code.push("dist = distance(P, light.position);");
    code.push("att = 1.0/(light.constantAttenuation + light.linearAttenuation * dist + light.quadraticAttenuation * dist * dist);");
    code.push("float spotCos = dot(P, -light.coneDirection);");
    code.push("if (spotCos < light.spotCosCutOff){");
    code.push("att = 0.0;");
    code.push("}else{");
    code.push("att *= pow(spotCos, light.spotExponent);");
    code.push("}");
    code.push("L = normalize( light.position.xyz - P );");
    code.push("Kd = max( dot(L, N), 0.0 );");
    code.push("diffuse = (Kd*light.color*light.intensity*material.diffuseColor);");
    if (mesh.material instanceof AL3D.LambertMaterial){
      code.push("return diffuse*att;");
    }else if (mesh.material instanceof AL3D.PhongMaterial || mesh.material instanceof AL3D.BlinnMaterial){
      code.push("float angle;");
      if (mesh.material instanceof AL3D.BlinnMaterial){
        code.push("H = normalize(L+E);");
        code.push("angle = max(dot(N,H),0.0);");
      }else{
        code.push("vec3 R = reflect(-L,N);");
        code.push("angle = max(dot(R,E),0.0);");
      }
      if (mesh.material.specularMap !== undefined){
        code.push("float shininess = texture2D(uSpecularMapSampler, vec2(vTextureCoord.s, vTextureCoord.t)).r * 255.0;");
        code.push("float Ks = pow(angle, shininess);");
      }else{
        code.push("float Ks = pow(angle, material.shininess);");
      }
      code.push("vec4 specular = Ks*light.color*light.intensity*material.specularColor;");
      code.push("if (dot(L,N) < 0.0){");
      code.push("specular = vec4(0.0,0.0,0.0,1.0);");
      code.push("}");
      code.push("vec4 result = min((diffuse+specular)*att,vec4(1));");
      code.push("result.a = material.diffuseColor.a;");
      code.push("return result;");
    }
    code.push("}");
    return code.join("\n");
  },
  getSpotLigthToonFor : function (mesh){
    var code = [];
    code.push("float calculeSpotLight(int index, SpotLight light, vec3 N){");
    code.push("vec4 diffuse;");
    code.push("vec3 L;");
    code.push("float Kd, dist, att;");
    code.push("dist = distance(P, light.position);");
    code.push("att = 1.0/(light.constantAttenuation + light.linearAttenuation * dist + light.quadraticAttenuation * dist * dist);");
    code.push("float spotCos = dot(P, -light.coneDirection);");
    code.push("if (spotCos < light.spotCosCutOff){");
    code.push("att = 0.0;");
    code.push("}else{");
    code.push("att *= pow(spotCos, light.spotExponent);");
    code.push("}");
    code.push("L = normalize( light.position.xyz - P );");
    code.push("Kd = pow(max( dot(L, N), 0.0 ), 5.0);");
    code.push("return Kd;");
    code.push("}");
    return code.join("\n");
  },
  getLinearFogFactor : function(mesh){
    var code = [];
    code.push("float calculeLinearFogFactor(float start, float end, float dist){");
    code.push("float fogFactor = clamp((end - dist) / (end - start), 0.0, 1.0);");
    code.push("return fogFactor;");
    code.push("}");
    return code.join("\n");
  },
  getShader : function (mesh, lights){
    var vertexShader = [], fragmentShader = [], fragmentShaderStr, vertexShaderStr,id;
    var directionalLights=[], pointLights=[], ambientLights=[], spotLights=[];
    for (var i = 0; i< lights.length; i++){
      if (lights[i] instanceof AL3D.AmbientLight){
        ambientLights.push(lights[i]);
      }else if (lights[i] instanceof AL3D.DirectionalLight){
        directionalLights.push(lights[i]);
      }else if (lights[i] instanceof AL3D.PointLight){
        pointLights.push(lights[i]);
      }else if (lights[i] instanceof AL3D.SpotLight){
        spotLights.push(lights[i]);
      }
    }

    // Create id for this shader
    id = ""+mesh.material.type;
    id += mesh.material.shading;
    id += (mesh.material.texture ===undefined)?"NOTEXTURE":"TEXTURE";
    id += "AL"+ambientLights.length;
    id += "DL"+directionalLights.length;
    id += "PL"+pointLights.length;
    
    vertexShader.push("attribute vec3 vPosition;");
    fragmentShader.push("#extension GL_OES_standard_derivatives : enable");
    fragmentShader.push("precision mediump float;");

    if (mesh.material.texture !== undefined){
      vertexShader.push("attribute vec2 aTextureCoord;");
      fragmentShader.push("varying highp vec2 vTextureCoord;");
      fragmentShader.push("uniform sampler2D uSampler;");
    }
    if (mesh.material.specularMap !== undefined){
      fragmentShader.push("uniform sampler2D uSpecularMapSampler;");
    }
    if (mesh.material.normalMap !== undefined){
      fragmentShader.push("uniform sampler2D uNormalMapSampler;");
    }
    vertexShader.push("uniform mat4 vMVP;");
    if (mesh.material.texture !== undefined){
      vertexShader.push("varying highp vec2 vTextureCoord;");
    }

    if (mesh.fog !== undefined){
      if (mesh.fog instanceof AL3D.LinearFog){
        if (mesh.material instanceof AL3D.BasicMaterial){
          vertexShader.push("uniform mat4 viewModelMatrix;");
        }
        vertexShader.push("varying float vDist;");
        fragmentShader.push("uniform vec3 uFogColor;");
        fragmentShader.push("uniform float uStartFog;");
        fragmentShader.push("uniform float uEndFog;");
        fragmentShader.push("varying float vDist;");
        fragmentShader.push(this.getLinearFogFactor(mesh));
      } else if (mesh.fog instanceof AL3D.ExpFog || mesh.fog instanceof AL3D.Exp2Fog){
        if (mesh.material instanceof AL3D.BasicMaterial){
          vertexShader.push("uniform mat4 viewModelMatrix;");
        }
        vertexShader.push("varying float vDist;");
        fragmentShader.push("uniform vec3 uFogColor;");
        fragmentShader.push("uniform float uFogDensity;");
        fragmentShader.push("varying float vDist;");
        //fragmentShader.push(this.getLinearFogFactor(mesh));
      }
    }

    fragmentShader.push("vec4 finalColor;");

    /* HELPER FUNCTIONS (i.e compute light) */
    var compileWithNormals = false;

    if (mesh.material instanceof AL3D.ToonMaterial){
      if (mesh.material !== undefined){
        vertexShader.push("attribute vec3 vNormal;");
        vertexShader.push("uniform mat3 normalMatrix;");
        vertexShader.push("uniform mat4 viewModelMatrix;");

        fragmentShader.push("struct AmbientLight{");
        fragmentShader.push("vec4 color;");
        fragmentShader.push("float intensity;");
        fragmentShader.push("};");

        fragmentShader.push("struct DirectionalLight{");
        fragmentShader.push("vec4 color;");
        fragmentShader.push("float intensity;");
        fragmentShader.push("vec3 position;");
        fragmentShader.push("};");

        fragmentShader.push("struct PointLight{");
        fragmentShader.push("vec4 color;");
        fragmentShader.push("float intensity;");
        fragmentShader.push("vec3 position;");
        fragmentShader.push("float linearAttenuation;");
        fragmentShader.push("float quadraticAttenuation;");
        fragmentShader.push("float constantAttenuation;");
        fragmentShader.push("};");

        fragmentShader.push("struct SpotLight{");
        fragmentShader.push("vec4 color;");
        fragmentShader.push("float intensity;");
        fragmentShader.push("vec3 position;");
        fragmentShader.push("vec3 coneDirection;");
        fragmentShader.push("float spotCosCutOff;");
        fragmentShader.push("float spotExponent;");
        fragmentShader.push("float linearAttenuation;");
        fragmentShader.push("float quadraticAttenuation;");
        fragmentShader.push("float constantAttenuation;");
        fragmentShader.push("};");

        if (ambientLights.length > 0){
          fragmentShader.push("const int MAX_AMBIENT_LIGHT = " + ambientLights.length+";");
          fragmentShader.push("uniform AmbientLight ambientLights["+ambientLights.length+"];");
        }
        if (directionalLights.length > 0){
          fragmentShader.push("uniform DirectionalLight directionalLights["+directionalLights.length+"];");
          fragmentShader.push("const int MAX_DIRECTIONAL_LIGHT = " + directionalLights.length+";");
        }
        if (pointLights.length > 0){
          fragmentShader.push("uniform PointLight pointLights["+pointLights.length+"];");
          fragmentShader.push("const int MAX_POINT_LIGHT = " + pointLights.length+";");
        }
        if (spotLights.length > 0){
          fragmentShader.push("uniform SpotLight spotLights["+spotLights.length+"];");
          fragmentShader.push("const int MAX_SPOT_LIGHT = " + spotLights.length+";");
        }

        fragmentShader.push("struct Material{");
        fragmentShader.push("vec4 diffuseColor;");
        fragmentShader.push("};");
        fragmentShader.push("uniform Material material;");
        vertexShader.push("varying vec3 N,E,P;");
        fragmentShader.push("varying vec3 N,E,P;");

        compileWithNormals = true;

        // POINT LIGHT
        fragmentShader.push(this.getPointLightToonFor(mesh));
        // SPOT LIGTH
        fragmentShader.push(this.getSpotLigthToonFor(mesh));
        // DIRECTIONAL LIGTH
        fragmentShader.push(this.getDirectionalLightToonFor(mesh));
        
        fragmentShader.push("uniform sampler2D uSamplerToon;");
        vertexShader.push("void main(){");
        fragmentShader.push("void main(){");
        vertexShader.push("gl_Position = vMVP*vec4(vPosition,1.);");

        vertexShader.push("vec4 vPos = vec4(vPosition,1);");
        vertexShader.push("P = normalize((viewModelMatrix * vPos).xyz);");
        vertexShader.push("N = normalize( normalMatrix*vNormal);");
        fragmentShader.push("vec4 fColor;");
        fragmentShader.push("fColor = vec4(0.0,0.0,0.0,0.0);");

        if (directionalLights.length > 0){
          fragmentShader.push("for (int i = 0; i < MAX_DIRECTIONAL_LIGHT; i++){");
          fragmentShader.push("float Kd = calculeDirectionalLight(i, directionalLights[i], N);");
          fragmentShader.push("fColor += texture2D(uSamplerToon, vec2(Kd, 0.5));//texture2D(uSamplerToon, vec2(calculeDirectionalLight(i, directionalLights[i]),0.5));");
          fragmentShader.push("}");
        }

        if (pointLights.length > 0){
          fragmentShader.push("for (int i = 0; i < MAX_POINT_LIGHT; i++){");
          fragmentShader.push("fColor += texture2D(uSamplerToon, vec2(calculePointLight(i, pointLights[i], N),0.5));");
          fragmentShader.push("}");
        }

        if (spotLights.length > 0){
          fragmentShader.push("for (int i = 0; i < MAX_SPOT_LIGHT; i++){");
          fragmentShader.push("fColor += texture2D(uSamplerToon, vec2(calculeSpotLight(i, spotLights[i], N),0.5));");
          fragmentShader.push("}");
        }
        if (mesh.material.sideMode === AL3D.TWO_SIDE){
          fragmentShader.push("vec4 bColor;");
          fragmentShader.push("bColor = vec4(0.,0.,0.,0.);");
          if (directionalLights.length > 0){
            fragmentShader.push("for (int i = 0; i < MAX_DIRECTIONAL_LIGHT; i++){");
            fragmentShader.push("float Kd = calculeDirectionalLight(i, directionalLights[i], -N);");
            fragmentShader.push("bColor += texture2D(uSamplerToon, vec2(Kd, 0.5));//texture2D(uSamplerToon, vec2(calculeDirectionalLight(i, directionalLights[i]),0.5));");
            fragmentShader.push("}");
          }

          if (pointLights.length > 0){
            fragmentShader.push("for (int i = 0; i < MAX_POINT_LIGHT; i++){");
            fragmentShader.push("float Kd = calculePointLight(i, pointLights[i], -N);");
            fragmentShader.push("bColor += texture2D(uSamplerToon, vec2(Kd,0.5))*(Kd*0.8+0.2);");
            fragmentShader.push("}");
          }

          if (spotLights.length > 0){
            fragmentShader.push("for (int i = 0; i < MAX_SPOT_LIGHT; i++){");
            fragmentShader.push("bColor += texture2D(uSamplerToon, vec2(calculeSpotLight(i, spotLights[i], -N),0.5));");
            fragmentShader.push("}");
          }
        }
        if (mesh.material.sideMode === AL3D.ONE_SIDE){
          if (mesh.material.texture !== undefined){
            vertexShader.push("vTextureCoord = aTextureCoord;");
            fragmentShader.push("finalColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t))*fColor;");
            
          }else{
            var color = AL3D.Utils.hexIntToRgbNormalized(mesh.material.diffuse);
            fragmentShader.push("finalColor = vec4("+color.r+","+color.g+","+color.b+","+color.a+")*fColor;");
          }
        }else{
          if (mesh.material.texture !== undefined){
            vertexShader.push("vTextureCoord = aTextureCoord;");
            fragmentShader.push("if (gl_FrontFacing){");
            fragmentShader.push("finalColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t))*fColor;");
            fragmentShader.push("}else{");
            fragmentShader.push("finalColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t))*bColor;");
            fragmentShader.push("}");
          }else{
            var color = AL3D.Utils.hexIntToRgbNormalized(mesh.material.diffuse);
            fragmentShader.push("if (gl_FrontFacing){");
            fragmentShader.push("finalColor = vec4("+color.r+","+color.g+","+color.b+","+color.a+")*fColor;");
            fragmentShader.push("}else{");
            fragmentShader.push("finalColor = vec4("+color.r+","+color.g+","+color.b+","+color.a+")*bColor;");
            fragmentShader.push("}");
          }
        }
        
      }
    }else{
      if (mesh.material !== undefined){
        if (mesh.material.shading === AL3D.GouraudInterpolation){
          vertexShader.push("attribute vec3 vNormal;");
          vertexShader.push("uniform mat3 normalMatrix;");
          vertexShader.push("uniform mat4 viewModelMatrix;");
          vertexShader.push("varying vec4 fColor;");
          fragmentShader.push("varying vec4 fColor;");
          vertexShader.push("varying vec4 bColor;");
          fragmentShader.push("varying vec4 bColor;");

          vertexShader.push("struct AmbientLight{");
          vertexShader.push("vec4 color;");
          vertexShader.push("float intensity;");
          vertexShader.push("};");

          vertexShader.push("struct DirectionalLight{");
          vertexShader.push("vec4 color;");
          vertexShader.push("float intensity;");
          vertexShader.push("vec3 position;");
          vertexShader.push("};");

          vertexShader.push("struct PointLight{");
          vertexShader.push("vec4 color;");
          vertexShader.push("float intensity;");
          vertexShader.push("vec3 position;");
          vertexShader.push("float linearAttenuation;");
          vertexShader.push("float quadraticAttenuation;");
          vertexShader.push("float constantAttenuation;");
          vertexShader.push("};");

          vertexShader.push("struct SpotLight{");
          vertexShader.push("vec4 color;");
          vertexShader.push("float intensity;");
          vertexShader.push("vec3 position;");
          vertexShader.push("vec3 coneDirection;");
          vertexShader.push("float spotCosCutOff;");
          vertexShader.push("float spotExponent;");
          vertexShader.push("float linearAttenuation;");
          vertexShader.push("float quadraticAttenuation;");
          vertexShader.push("float constantAttenuation;");
          vertexShader.push("};");

          if (ambientLights.length > 0){
            vertexShader.push("const int MAX_AMBIENT_LIGHT = " + ambientLights.length+";");
                vertexShader.push("uniform AmbientLight ambientLights["+ambientLights.length+"];");
          }
          if (directionalLights.length > 0){
            vertexShader.push("uniform DirectionalLight directionalLights["+directionalLights.length+"];");
            vertexShader.push("const int MAX_DIRECTIONAL_LIGHT = " + directionalLights.length+";");
          }
          if (pointLights.length > 0){
            vertexShader.push("uniform PointLight pointLights["+pointLights.length+"];");
            vertexShader.push("const int MAX_POINT_LIGHT = " + pointLights.length+";");
          }
          if (spotLights.length > 0){
            vertexShader.push("uniform SpotLight spotLights["+spotLights.length+"];");
            vertexShader.push("const int MAX_SPOT_LIGHT = " + spotLights.length+";");
          }

          if (mesh.material instanceof AL3D.LambertMaterial){
            vertexShader.push("struct Material{");
            vertexShader.push("vec4 diffuseColor;");
            vertexShader.push("};");
          }else if (mesh.material instanceof AL3D.PhongMaterial || mesh.material instanceof AL3D.BlinnMaterial){
            vertexShader.push("struct Material{");
            vertexShader.push("vec4 diffuseColor;");
            vertexShader.push("vec4 specularColor;");
            vertexShader.push("float shininess;");
            vertexShader.push("};");
          }

          vertexShader.push("uniform Material material;");

          vertexShader.push("vec3 N,H,E,P;");

          compileWithNormals = true;

          // POINT LIGHT
          vertexShader.push(this.getPointLightFor(mesh));
          // SPOT LIGTH
          vertexShader.push(this.getSpotLigthFor(mesh));
          // DIRECTIONAL LIGTH
          vertexShader.push(this.getDirectionalLightFor(mesh));
          // Functions for normal maps
          if (mesh.material.normalMap !== undefined){
            vertexShader.push(this.getTangentComputationFunctions(mesh));
          }
        }else if ( mesh.material.shading === AL3D.PhongInterpolation){

          vertexShader.push("attribute vec3 vNormal;");
          vertexShader.push("uniform mat3 normalMatrix;");
          vertexShader.push("uniform mat4 viewModelMatrix;");

          fragmentShader.push("struct AmbientLight{");
          fragmentShader.push("vec4 color;");
          fragmentShader.push("float intensity;");
          fragmentShader.push("};");

          fragmentShader.push("struct DirectionalLight{");
          fragmentShader.push("vec4 color;");
          fragmentShader.push("float intensity;");
          fragmentShader.push("vec3 position;");
          fragmentShader.push("};");

          fragmentShader.push("struct PointLight{");
          fragmentShader.push("vec4 color;");
          fragmentShader.push("float intensity;");
          fragmentShader.push("vec3 position;");
          fragmentShader.push("float linearAttenuation;");
          fragmentShader.push("float quadraticAttenuation;");
          fragmentShader.push("float constantAttenuation;");
          fragmentShader.push("};");

          fragmentShader.push("struct SpotLight{");
          fragmentShader.push("vec4 color;");
          fragmentShader.push("float intensity;");
          fragmentShader.push("vec3 position;");
          fragmentShader.push("vec3 coneDirection;");
          fragmentShader.push("float spotCosCutOff;");
          fragmentShader.push("float spotExponent;");
          fragmentShader.push("float linearAttenuation;");
          fragmentShader.push("float quadraticAttenuation;");
          fragmentShader.push("float constantAttenuation;");
          fragmentShader.push("};");

          if (ambientLights.length > 0){
            fragmentShader.push("const int MAX_AMBIENT_LIGHT = " + ambientLights.length+";");
                fragmentShader.push("uniform AmbientLight ambientLights["+ambientLights.length+"];");
          }
          if (directionalLights.length > 0){
            fragmentShader.push("uniform DirectionalLight directionalLights["+directionalLights.length+"];");
            fragmentShader.push("const int MAX_DIRECTIONAL_LIGHT = " + directionalLights.length+";");
          }
          if (pointLights.length > 0){
            fragmentShader.push("uniform PointLight pointLights["+pointLights.length+"];");
            fragmentShader.push("const int MAX_POINT_LIGHT = " + pointLights.length+";");
          }
          if (spotLights.length > 0){
            fragmentShader.push("uniform SpotLight spotLights["+spotLights.length+"];");
            fragmentShader.push("const int MAX_SPOT_LIGHT = " + spotLights.length+";");
          }

          if (mesh.material instanceof AL3D.LambertMaterial){
            fragmentShader.push("struct Material{");
            fragmentShader.push("vec4 diffuseColor;");
            fragmentShader.push("};");
          }else if (mesh.material instanceof AL3D.PhongMaterial || mesh.material instanceof AL3D.BlinnMaterial){
            fragmentShader.push("struct Material{");
            fragmentShader.push("vec4 diffuseColor;");
            fragmentShader.push("vec4 specularColor;");
            fragmentShader.push("float shininess;");
            fragmentShader.push("};");
          }

          fragmentShader.push("uniform Material material;");
          vertexShader.push("varying vec3 E,N,P;");
          fragmentShader.push("varying vec3 E,N,P;");
          fragmentShader.push("vec3 H;");

          compileWithNormals = true;

          // POINT LIGHT
          fragmentShader.push(this.getPointLightFor(mesh));
          // SPOT LIGTH
          fragmentShader.push(this.getSpotLigthFor(mesh));
          // DIRECTIONAL LIGTH
          fragmentShader.push(this.getDirectionalLightFor(mesh));
          // Functions for normal maps
          if (mesh.material.normalMap !== undefined){
            fragmentShader.push(this.getTangentComputationFunctions(mesh));
          }
        }
        vertexShader.push("void main(){");
        fragmentShader.push("void main(){");
        vertexShader.push("gl_Position = vMVP*vec4(vPosition,1.);");
        if (mesh.material instanceof AL3D.BasicMaterial){
          if (mesh.material.texture !== undefined){
            vertexShader.push("vTextureCoord = aTextureCoord;");
            fragmentShader.push("finalColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t));");
          }else{
            var color = AL3D.Utils.hexIntToRgbNormalized(mesh.material.diffuse);
            fragmentShader.push("finalColor = vec4("+color.r+","+color.g+","+color.b+","+color.a+");");
          }
        }else{
          if ( mesh.material.shading === AL3D.GouraudInterpolation){
            vertexShader.push("vec4 vPos = vec4(vPosition,1);");
            vertexShader.push("P = normalize((viewModelMatrix * vPos).xyz);");
            vertexShader.push("E = normalize( -P );");
            vertexShader.push("N = normalize( normalMatrix*vNormal);");
            if (mesh.material.normalMap !== undefined){
              vertexShader.push("N = transformNormalWithTangentSpace(N, E ,aTextureCoord.st);");
            }

            vertexShader.push("fColor = vec4(0.,0.,0.,0.);");
            if (ambientLights.length > 0){
              vertexShader.push("for (int i = 0; i < MAX_AMBIENT_LIGHT; i++){");
              vertexShader.push("fColor += ambientLights[i].color;");
              vertexShader.push("}");
            }

            if (directionalLights.length > 0){
              vertexShader.push("for (int i = 0; i < MAX_DIRECTIONAL_LIGHT; i++){");
              vertexShader.push("fColor += calculeDirectionalLight(i, directionalLights[i], N);");
              vertexShader.push("}");
            }

            if (pointLights.length > 0){
              vertexShader.push("for (int i = 0; i < MAX_POINT_LIGHT; i++){");
              vertexShader.push("fColor += calculePointLight(i, pointLights[i], N);");
              vertexShader.push("}");
            }

            if (spotLights.length > 0){
              vertexShader.push("for (int i = 0; i < MAX_SPOT_LIGHT; i++){");
              vertexShader.push("fColor += calculeSpotLight(i, spotLights[i], N);");
              vertexShader.push("}");
            }
            if (mesh.material.sideMode === AL3D.TWO_SIDE){
              vertexShader.push("bColor = vec4(0.,0.,0.,0.);");
              if (ambientLights.length > 0){
                vertexShader.push("for (int i = 0; i < MAX_AMBIENT_LIGHT; i++){");
                vertexShader.push("bColor += ambientLights[i].color;");
                vertexShader.push("}");
              }

              if (directionalLights.length > 0){
                vertexShader.push("for (int i = 0; i < MAX_DIRECTIONAL_LIGHT; i++){");
                vertexShader.push("bColor += calculeDirectionalLight(i, directionalLights[i], -N);");
                vertexShader.push("}");
              }

              if (pointLights.length > 0){
                vertexShader.push("for (int i = 0; i < MAX_POINT_LIGHT; i++){");
                vertexShader.push("bColor += calculePointLight(i, pointLights[i], -N);");
                vertexShader.push("}");
              }

              if (spotLights.length > 0){
                vertexShader.push("for (int i = 0; i < MAX_SPOT_LIGHT; i++){");
                vertexShader.push("bColor += calculeSpotLight(i, spotLights[i], -N);");
                vertexShader.push("}");
              }
            }
            if (mesh.material.sideMode === AL3D.ONE_SIDE){
              if (mesh.material.texture !== undefined){
                vertexShader.push("vTextureCoord = aTextureCoord;");
                fragmentShader.push("finalColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t))*fColor;");
              }else{
                var color = AL3D.Utils.hexIntToRgbNormalized(mesh.material.diffuse);
                fragmentShader.push("finalColor = vec4("+color.r+","+color.g+","+color.b+","+color.a+")*fColor;");
              }
            }else{
              if (mesh.material.texture !== undefined){
                vertexShader.push("vTextureCoord = aTextureCoord;");
                fragmentShader.push("if (gl_FrontFacing){");
                fragmentShader.push("finalColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t))*fColor;");
                fragmentShader.push("}else{");
                fragmentShader.push("finalColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t))*bColor;");
                fragmentShader.push("}");
              }else{
                var color = AL3D.Utils.hexIntToRgbNormalized(mesh.material.diffuse);
                fragmentShader.push("if (gl_FrontFacing){");
                fragmentShader.push("finalColor = vec4("+color.r+","+color.g+","+color.b+","+color.a+")*fColor;");
                fragmentShader.push("}else{");
                fragmentShader.push("finalColor = vec4("+color.r+","+color.g+","+color.b+","+color.a+")*bColor;");
                fragmentShader.push("}");
              }
            }
          }else if (mesh.material.shading === AL3D.PhongInterpolation){
            
            vertexShader.push("vec4 vPos = vec4(vPosition,1);");
            vertexShader.push("P = normalize((viewModelMatrix * vPos).xyz);");
            vertexShader.push("E = normalize( -P );");
            vertexShader.push("N = normalize( normalMatrix*vNormal);");
            if (mesh.material.normalMap !== undefined){
              fragmentShader.push("vec3 PN = transformNormalWithTangentSpace(N, E ,vTextureCoord.st);");
            }else{
              fragmentShader.push("vec3 PN = N;");
            }
            fragmentShader.push("vec4 fColor=vec4(0.,0.,0.,0.0);");
            if (ambientLights.length > 0){
              fragmentShader.push("for (int i = 0; i < MAX_AMBIENT_LIGHT; i++){");
              fragmentShader.push("fColor += ambientLights[i].color;");
              fragmentShader.push("}");
            }

            if (directionalLights.length > 0){
              fragmentShader.push("for (int i = 0; i < MAX_DIRECTIONAL_LIGHT; i++){");
              fragmentShader.push("fColor += calculeDirectionalLight(i, directionalLights[i], PN);");
              fragmentShader.push("}");
            }

            if (pointLights.length > 0){
              fragmentShader.push("for (int i = 0; i < MAX_POINT_LIGHT; i++){");
              fragmentShader.push("fColor += calculePointLight(i, pointLights[i], PN);");
              fragmentShader.push("}");
            }

            if (spotLights.length > 0){
              fragmentShader.push("for (int i = 0; i < MAX_SPOT_LIGHT; i++){");
              fragmentShader.push("fColor += calculeSpotLight(i, spotLights[i], PN);");
              fragmentShader.push("}");
            }
            if (mesh.material.sideMode === AL3D.TWO_SIDE){
              fragmentShader.push("vec4 bColor;");
              if (ambientLights.length > 0){
                fragmentShader.push("for (int i = 0; i < MAX_AMBIENT_LIGHT; i++){");
                fragmentShader.push("bColor += ambientLights[i].color;");
                fragmentShader.push("}");
              }

              if (directionalLights.length > 0){
                fragmentShader.push("for (int i = 0; i < MAX_DIRECTIONAL_LIGHT; i++){");
                fragmentShader.push("bColor += calculeDirectionalLight(i, directionalLights[i], -PN);");
                fragmentShader.push("}");
              }

              if (pointLights.length > 0){
                fragmentShader.push("for (int i = 0; i < MAX_POINT_LIGHT; i++){");
                fragmentShader.push("bColor += calculePointLight(i, pointLights[i], -PN);");
                fragmentShader.push("}");
              }

              if (spotLights.length > 0){
                fragmentShader.push("for (int i = 0; i < MAX_SPOT_LIGHT; i++){");
                fragmentShader.push("bColor += calculeSpotLight(i, spotLights[i], -PN);");
                fragmentShader.push("}");
              }
            }
            if (mesh.material.sideMode === AL3D.ONE_SIDE){
              if (mesh.material.texture !== undefined){
                vertexShader.push("vTextureCoord = aTextureCoord;");
                fragmentShader.push("finalColor =  texture2D(uSampler, vTextureCoord) *fColor;");
              }else{
                var color = AL3D.Utils.hexIntToRgbNormalized(mesh.material.diffuse);
                fragmentShader.push("finalColor = vec4("+color.r+","+color.g+","+color.b+","+color.a+")*fColor;");
              }
            }else{
              if (mesh.material.texture !== undefined){
                vertexShader.push("vTextureCoord = aTextureCoord;");
                fragmentShader.push("if (gl_FrontFacing){");
                fragmentShader.push("finalColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t))*fColor;");
                fragmentShader.push("}else{");
                fragmentShader.push("finalColor = texture2D(uSampler, vec2(vTextureCoord.s, vTextureCoord.t))*bColor;");
                fragmentShader.push("}");
              }else{
                var color = AL3D.Utils.hexIntToRgbNormalized(mesh.material.diffuse);
                fragmentShader.push("if (gl_FrontFacing){");
                //fragmentShader.push("gl_FragColor = vec4("+1.0+","+0.0+","+0.0+","+1.0+");");
                fragmentShader.push("finalColor = vec4("+color.r+","+color.g+","+color.b+","+color.a+")*fColor;");
                fragmentShader.push("}else{");
                //fragmentShader.push("gl_FragColor = vec4("+0.0+","+1.0+","+0.0+","+1.0+");");
                fragmentShader.push("finalColor = vec4("+color.r+","+color.g+","+color.b+","+color.a+")*bColor;");
                fragmentShader.push("}");
                
              }
            }
            
          }// END PHONG INTERPOLATION
        }
      }
    }
    fragmentShader.push("gl_FragColor = finalColor;");
    if (mesh.fog !== undefined){
      if (mesh.fog instanceof AL3D.LinearFog || mesh.fog instanceof AL3D.ExpFog || mesh.fog instanceof AL3D.Exp2Fog){
        vertexShader.push("vDist = distance(viewModelMatrix*vec4(vPosition,1.0), vec4(E,1.0));");
        if (mesh.fog instanceof AL3D.LinearFog){
          fragmentShader.push("float fogFactor = calculeLinearFogFactor(uStartFog, uEndFog, vDist);");
        }else if (mesh.fog instanceof AL3D.ExpFog){
          fragmentShader.push("float fogFactor = exp2(-uFogDensity * vDist * 1.442695);");
        }else if (mesh.fog instanceof AL3D.Exp2Fog){
          fragmentShader.push("float fogFactor = exp2(-uFogDensity*uFogDensity*vDist * vDist * 1.442695);");
        }
        fragmentShader.push("vec3 co = mix(uFogColor, vec3(finalColor), fogFactor);");
        fragmentShader.push("gl_FragColor = vec4(co, finalColor.a);");
      }
    }
    vertexShader.push("}");
    fragmentShader.push("}");

    fragmentShaderStr = fragmentShader.join("\n");
    vertexShaderStr = vertexShader.join("\n");


    var getShader = function (source, type, typeString){
      var shader = AL3D.Renderer.gl.createShader(type);
      AL3D.Renderer.gl.shaderSource(shader, source);
      AL3D.Renderer.gl.compileShader(shader);
      if (!AL3D.Renderer.gl.getShaderParameter(shader,AL3D.Renderer.gl.COMPILE_STATUS)){
        alert ("Error en "+typeString+ " Shader : " + AL3D.Renderer.gl.getShaderInfoLog(shader));
            return false;
      }
      return shader;
    }

    var vertexShaderCompiled = getShader(vertexShaderStr, AL3D.Renderer.gl.VERTEX_SHADER, "VERTEX");
    var fragmentShaderCompiled = getShader(fragmentShaderStr, AL3D.Renderer.gl.FRAGMENT_SHADER, "FRAGMENT");
    var shaderProgram = AL3D.Renderer.gl.createProgram();
    AL3D.Renderer.gl.attachShader(shaderProgram, vertexShaderCompiled);
    AL3D.Renderer.gl.attachShader(shaderProgram, fragmentShaderCompiled);

    AL3D.Renderer.gl.linkProgram(shaderProgram);

    shaderProgram._position = AL3D.Renderer.gl.getAttribLocation(shaderProgram, "vPosition");
    shaderProgram._MVP = AL3D.Renderer.gl.getUniformLocation(shaderProgram, "vMVP");
    if (mesh.material.texture !== undefined){
      shaderProgram._sampler =  AL3D.Renderer.gl.getUniformLocation(shaderProgram, "uSampler");
      shaderProgram._uv = AL3D.Renderer.gl.getAttribLocation(shaderProgram, "aTextureCoord");
    }
    if (mesh.material.specularMap !== undefined){
      shaderProgram._uSpecularMapSampler =  AL3D.Renderer.gl.getUniformLocation(shaderProgram, "uSpecularMapSampler");
    }
    if (mesh.material.normalMap !== undefined){
      shaderProgram._uNormalMapSampler =  AL3D.Renderer.gl.getUniformLocation(shaderProgram, "uNormalMapSampler");
    }
    if (compileWithNormals){
      shaderProgram._vNormal =  AL3D.Renderer.gl.getAttribLocation(shaderProgram, "vNormal");
      
      shaderProgram._viewModelMatrix = AL3D.gl.getUniformLocation(shaderProgram,"viewModelMatrix");
      shaderProgram._normalMatrix = AL3D.gl.getUniformLocation(shaderProgram,"normalMatrix");
    }
    if (mesh.fog !== undefined){
      shaderProgram._uFogColor = AL3D.gl.getUniformLocation(shaderProgram,"uFogColor");
      if (mesh.fog instanceof AL3D.LinearFog){
        shaderProgram._uStartFog = AL3D.gl.getUniformLocation(shaderProgram,"uStartFog");
        shaderProgram._uEndFog = AL3D.gl.getUniformLocation(shaderProgram,"uEndFog");
      }else if (mesh.fog instanceof AL3D.ExpFog || mesh.fog instanceof AL3D.Exp2Fog){
        shaderProgram._uFogDensity = AL3D.gl.getUniformLocation(shaderProgram,"uFogDensity");
      }
    }
    // Uniform for matrix

      // Uniforms for lights
      // Ambient light
      shaderProgram._ambientLights = [];          // locations of light properties
      for (var i = 0; i < ambientLights.length; i++) {
          shaderProgram._ambientLights[i] = {};   // locations of properties of light number i
          shaderProgram._ambientLights[i].color = AL3D.gl.getUniformLocation(shaderProgram,"ambientLights[" + i + "].color");
          shaderProgram._ambientLights[i].intensity = AL3D.gl.getUniformLocation(shaderProgram,"ambientLights[" + i + "].intensity");
      }
      // Directional lights
      shaderProgram._directionalLights = [];          // locations of light properties
      for (var i = 0; i < directionalLights.length; i++) {
          shaderProgram._directionalLights[i] = {};   // locations of properties of light number i
          shaderProgram._directionalLights[i].color = AL3D.gl.getUniformLocation(shaderProgram,"directionalLights[" + i + "].color");
          shaderProgram._directionalLights[i].intensity = AL3D.gl.getUniformLocation(shaderProgram,"directionalLights[" + i + "].intensity");
          shaderProgram._directionalLights[i].position = AL3D.gl.getUniformLocation(shaderProgram,"directionalLights[" + i + "].position");
      }
      shaderProgram._pointLights = [];          // locations of light properties
      for (var i = 0; i < pointLights.length; i++) {
          shaderProgram._pointLights[i] = {};   // locations of properties of light number i
          shaderProgram._pointLights[i].position = AL3D.gl.getUniformLocation(shaderProgram,"pointLights[" + i + "].position");
          shaderProgram._pointLights[i].intensity = AL3D.gl.getUniformLocation(shaderProgram,"pointLights[" + i + "].intensity");
          shaderProgram._pointLights[i].linearAttenuation = AL3D.gl.getUniformLocation(shaderProgram,"pointLights[" + i + "].linearAttenuation");
          shaderProgram._pointLights[i].quadraticAttenuation = AL3D.gl.getUniformLocation(shaderProgram,"pointLights[" + i + "].quadraticAttenuation");
          shaderProgram._pointLights[i].constantAttenuation = AL3D.gl.getUniformLocation(shaderProgram,"pointLights[" + i + "].constantAttenuation");
          shaderProgram._pointLights[i].color = AL3D.gl.getUniformLocation(shaderProgram,"pointLights[" + i + "].color");
      }
      shaderProgram._spotLights = [];          // locations of light properties
      for (var i = 0; i < spotLights.length; i++) {
          shaderProgram._spotLights[i] = {};   // locations of properties of light number i
          shaderProgram._spotLights[i].position = AL3D.gl.getUniformLocation(shaderProgram,"spotLights[" + i + "].position");
          shaderProgram._spotLights[i].intensity = AL3D.gl.getUniformLocation(shaderProgram,"spotLights[" + i + "].intensity");
          shaderProgram._spotLights[i].linearAttenuation = AL3D.gl.getUniformLocation(shaderProgram,"spotLights[" + i + "].linearAttenuation");
          shaderProgram._spotLights[i].quadraticAttenuation = AL3D.gl.getUniformLocation(shaderProgram,"spotLights[" + i + "].quadraticAttenuation");
          shaderProgram._spotLights[i].constantAttenuation = AL3D.gl.getUniformLocation(shaderProgram,"spotLights[" + i + "].constantAttenuation");
          shaderProgram._spotLights[i].spotCosCutOff = AL3D.gl.getUniformLocation(shaderProgram,"spotLights[" + i + "].spotCosCutOff");
          shaderProgram._spotLights[i].spotExponent = AL3D.gl.getUniformLocation(shaderProgram,"spotLights[" + i + "].spotExponent");
          shaderProgram._spotLights[i].coneDirection = AL3D.gl.getUniformLocation(shaderProgram,"spotLights[" + i + "].coneDirection");
          shaderProgram._spotLights[i].color = AL3D.gl.getUniformLocation(shaderProgram,"spotLights[" + i + "].color");
      }
      if (mesh.material instanceof AL3D.LambertMaterial){
        shaderProgram._material = {};
        shaderProgram._material.diffuseColor = AL3D.gl.getUniformLocation(shaderProgram, "material.diffuseColor");
      }else if (mesh.material instanceof AL3D.PhongMaterial || mesh.material instanceof AL3D.BlinnMaterial){
        shaderProgram._material = {};
        shaderProgram._material.diffuseColor = AL3D.gl.getUniformLocation(shaderProgram, "material.diffuseColor");
        shaderProgram._material.specularColor = AL3D.gl.getUniformLocation(shaderProgram, "material.specularColor");
        shaderProgram._material.shininess = AL3D.gl.getUniformLocation(shaderProgram, "material.shininess");
      }else if (mesh.material instanceof AL3D.ToonMaterial){
        shaderProgram._uSamplerToon =  AL3D.Renderer.gl.getUniformLocation(shaderProgram, "uSamplerToon");
      }

    this._cache[id] = shaderProgram;
    mesh.shaderProgram = shaderProgram;

  }
}

AL3D.Utils = {

  /**
   * Create a circle.
   *
   * @param {number} n - the number of vertex
   * @param {number} startAngle - the angle where the circle will be started to compute vertices
   * @param {number} y - Y coordinate of the circle. X and Z coordinates will be computes dinamically.
   * @param {number} radius - circle's radius.
   *
   * @returns {ALMath.Vector3[]} array of ALMath.Vector3 to store the circle's vertices
   */
  createCircle : function(n, startAngle, y, radius){
    var vertices = [],dA = Math.PI*2/(n-1),angle,r=0.9;
      if (arguments.length === 4){
          r = radius;
      }
      var index;
      for(var i = 0; i < n-1; i++){
          angle = startAngle + dA*i;
          vertices.push(new ALMath.Vector3(r*Math.cos(angle),y,r*Math.sin(angle)));
          index = i;
      }
      angle = startAngle + dA*(index+1);
      vertices.push(new ALMath.Vector3(r*Math.cos(angle),y,r*Math.sin(angle)));
      return vertices;

  },

  /**
   * Compute the normal of triangle.
   *
   * @param {ALMath.Vector3} a - Triangle vertex.
   * @param {ALMath.Vector3} b - Triangle vertex.
   * @param {ALMath.Vector3} c - Triangle vertex.
   *
   * @returns {ALMath.Vector3} Normals of the triangle.
   */
  computeNormal : function (a,b,c){
      var t1 = a.sub(b);
      var t2 = c.sub(b);
      var normal = t1.cross(t2);
      return normal;
  },

  /**
   * Convert hex value to RGB values.
   *
   * @param {string} hex - Hexadecimal value.
   *
   * @returns {Object} return an object with the properties: a,r,g,b with values between 0 and 255.
   */
  hexToRgb : function(hex) {
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, a, r, g, b) {
          return a + a + r + r + g + g + b + b;
      });

      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        a: parseInt(result[1], 16),
          r: parseInt(result[2], 16),
          g: parseInt(result[3], 16),
          b: parseInt(result[4], 16)
      } : null;
  },

  /**
   * Convert hex value to RGB values.
   *
   * @param {string} hex - Hexadecimal value.
   *
   * @returns {Object} return an object with the properties: a,r,g,b with values between 0.0 and 1.0.
   */
  hexToRgbNormalized : function(hex) {
      var hex = AL3D.Utils.hexToRgb(hex);
      if (hex === null){
      return null;
    }else{
      hex.a=hex.a/255;
      hex.r=hex.r/255;
      hex.g=hex.g/255;
      hex.b=hex.b/255;
      return hex;
    }
  },

  /**
   * Convert hex value to RGB values.
   *
   * @param {number} hex - Hexadecimal value.
   *
   * @returns {Object} return an object with the properties: a,r,g,b with values between 0 and 255.
   */
  hexIntToRgb : function(hex) {
      var r,g,b,a;
      r = (hex >> 16)&0xFF;
      g = (hex >> 8)&0xFF;
      b = (hex)&0xFF;
      a = (hex >> 24)&0xFF;
      return {
        r: r,
        g: g,
        b: b,
        a: a
      };
  },

  /**
   * Convert hex value to RGB values.
   *
   * @param {number} hex - Hexadecimal value.
   *
   * @returns {Object} return an object with the properties: a,r,g,b with values between 0.0 and 1.0.
   */
  hexIntToRgbNormalized : function(hex) {
      var hex = AL3D.Utils.hexIntToRgb(hex);
      if (hex === null){
      return null;
    }else{
      hex.a=hex.a/255;
      hex.r=hex.r/255;
      hex.g=hex.g/255;
      hex.b=hex.b/255;
      return hex;
    }
  },

  /**
   * Function to compile an link shaders.
   *
   * @param {string} vertexShader - Vertex shader.
   * @param {string} fragmentShader - Fragment shader.
   *
   * @returns {Object} the ShaderProgram.
   */
  compileAndLinkShader : function(vertexShader, fragmentShader){
    var getShader = function (source, type, typeString){
      var shader = AL3D.Renderer.gl.createShader(type);
      AL3D.Renderer.gl.shaderSource(shader, source);
      AL3D.Renderer.gl.compileShader(shader);
      if (!AL3D.Renderer.gl.getShaderParameter(shader,AL3D.Renderer.gl.COMPILE_STATUS)){
        alert ("Error en "+typeString+ " Shader : " + AL3D.Renderer.gl.getShaderInfoLog(shader));
          return false;
      }
      return shader;
    }

    var vertexShaderCompiled = getShader(vertexShader, AL3D.Renderer.gl.VERTEX_SHADER, "VERTEX");
    var fragmentShaderCompiled = getShader(fragmentShader, AL3D.Renderer.gl.FRAGMENT_SHADER, "FRAGMENT");
    var shaderProgram = AL3D.Renderer.gl.createProgram();
    AL3D.Renderer.gl.attachShader(shaderProgram, vertexShaderCompiled);
    AL3D.Renderer.gl.attachShader(shaderProgram, fragmentShaderCompiled);

    AL3D.Renderer.gl.linkProgram(shaderProgram);

    return shaderProgram;
  },

  /**
   * Function to load a mesh from a json file.
   *
   * @param {Object} p - Object that represent the mesh.
   * @param {function} callback - Function to call when model is loaded.
   */
  loadModel : function(p, callback){
    this.jsonFile = p.model !== undefined ? p.model : undefined;
    var mesh = this;
    if (this.jsonFile !== undefined){
      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.open('GET', mesh.jsonFile, true);
      xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          var json = JSON.parse(xobj.responseText);
          var vertices = json.vertices;
          var normals = json.normals;
          var indices = json.faces;
          var uvs = json.uvs;
          var mesh = new AL3D.Mesh({vertices : vertices, indices : indices, normals : normals, uv : uvs});
          callback(mesh);
        }
      };
      xobj.send(null);
    }
  }
}

/* GLOBAL VARIABLES */

cache = new AL3D.TextureManager();
AL3D.shaderManager = new AL3D.ShaderManager();