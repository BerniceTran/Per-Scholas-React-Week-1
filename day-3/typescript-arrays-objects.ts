const todaysWeather: string = "rainy";

// Type annotations for these two array are *the same*.
const weatherDescriptions: Array<string> = ["sunny", "cloudy", "rainy"];
const moreWeatherDescriptions: string[] = ["sunny", "cloudy", "rainy"];

const wasItSunny: Array<boolean> = [true, false, false, true, false, false];

// The "any" type is an escape hatch to not deal with types.
let whatever: any = 7;
whatever = "seven";

// An array with elements of type "any"
const arrayOfStuff: Array<any> = ["hi", 7, { a: 7 }, null, false];