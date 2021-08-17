console.log("hi");
/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true
*/

const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];

/**
 @param {string} name
        name of person
 @param  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/
function greeting(name, gender, isSelf) {
    // do stuff here ...

       var greeting;
       var prefix;

       gender = gender.toLowerCase();
       name = name.toLowerCase();

       if (gender === "male") {
              greeting = greetingWords[0];
              if (isSelf === true) {
                     prefix = prefixes[0];
              }
              else prefix = prefixes[1];
       }

       else if (gender === "female") {
              greeting = greetingWords[1];
              if (isSelf === true) {
                     prefix = prefixes[0];
              }
              else prefix = prefixes[2];
       }

       else if (gender === "nonbinary") {
              greeting = greetingWords[2];
              if (isSelf === true) {
                     prefix = prefixes[0];
              }
              else prefix = prefixes[3];
       }

       return  `${firstLetterUpperCase(greeting)}, ${prefix} name is ${firstLetterUpperCase(name)}.`; // use template literal for string to return
}

function firstLetterUpperCase(word) {
       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

console.log(greeting("Bernice", "FEMaLE", true));
console.log(greeting("KEVIN", "maLe", false));
console.log(greeting("AleX", "Nonbinary", false));