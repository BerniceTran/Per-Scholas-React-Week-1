/**
 *Here are the formulas to get information about a circle:
 pi is 3.14159
 x^2 means "x squared": example: 3^2 = 3*3 = 9
 area = pi * radius^2
 diameter = radius*2
 circumference = pi * diameter
 ​
 Complete the following functions and add function param and return type annotations
 */
var pi = 3.14159;
var radius = 1;
/**
* @param radius
* @returns
*/
function getArea(radius) {
    return pi * radius * radius;
}
function getDiameter(radius) {
    return radius * 2;
}
function getCircumference(radius) {
    return 2 * getDiameter(radius);
}
console.log("Area: " + getArea(2));
console.log("Diameter: " + getDiameter(2));
console.log("Circumference: " + getCircumference(2));
