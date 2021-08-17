const myObject = {
    a: "this is property a",
    mySecondObjectProperty: "second object property",
    "x": "the x key on my object",
    "2": "the key that is number 2",
    3: "key that is 3"
}

console.log("my object", myObject);

//Example of all valid JSON types
const myInfo = {
    "name": "Bernice",
    "birthday": 09301994,
    "citiesLivedIn": ["New York City", "Dallas"],
    "isHuman": true,
    "planetsVisited": null,
    "personalInfo": {
        "favoriteFood": "ramen",
    }
};

console.log("My info printed as an object");
console.log(myInfo);

console.log("My info printed as a string in the JSON format");
console.log(JSON.stringify(myInfo));