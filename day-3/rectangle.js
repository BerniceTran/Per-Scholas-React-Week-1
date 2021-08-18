// Complete the function in the editor. It has two parameters: a and b. It must return an object modeling a rectangle that has the following properties:
// length: This value is equal to a.
// width: This value is equal to b.
// perimeter: This value is equal to 2*(a+b)
// area: This value is equal to a*b
/**
 * @param length
 * @param width
 *
 * @returns {{length: width, width: number, perimeter: number, area: number}}
 */
function Rectangle(length, width) {
    var perimeter = (2 * length) + (2 * width);
    var area = length * width;
    return { length: length, width: width, perimeter: perimeter, area: area };
}
var rec = Rectangle(2, 4);
console.log("Length: " + rec.length);
console.log("Width: " + rec.width);
console.log("Perimeter: " + rec.perimeter);
console.log("Area: " + rec.area);
