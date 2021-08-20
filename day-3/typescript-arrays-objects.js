var todaysWeather = "rainy";
// Type annotations for these two array are *the same*.
var weatherDescriptions = ["sunny", "cloudy", "rainy"];
var moreWeatherDescriptions = ["sunny", "cloudy", "rainy"];
var wasItSunny = [true, false, false, true, false, false];
// The "any" type is an escape hatch to not deal with types.
var whatever = 7;
whatever = "seven";
// An array with elements of type "any"
var arrayOfStuff = ["hi", 7, { a: 7 }, null, false];
