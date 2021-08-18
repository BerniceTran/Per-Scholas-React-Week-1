var SUNNY_DAY_MESSAGE = "It is sunny out today";
var isSunny = true;
var numberSunnyDays = 1;
function hello(name, isSunny) {
    if (!isSunny) {
        return "Hi, " + name;
    }
    return "Hi, " + name + ", it is sunny out today.";
}
console.log(hello("Alice", isSunny));
