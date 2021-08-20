function makeWeatherDescription(weatherKeyword) {
    var description;
    if ("sunny") {
        description = "The sun is shining.";
    }
    if ("rainy") {
        description = "The sun is not shining. It is raining.";
    }
    var descriptionObject = {
        keyword: weatherKeyword,
        description: description
    };
    return descriptionObject;
}
console.log(makeWeatherDescription("sunny"));
function getValidSunnyDayMessage(isItSunny) {
    if (!isItSunny) {
        return "rainy";
    }
    return "sunny";
}
var sunnyDayMessage;
function getSunnyDayMessage(isItSunny) {
    if (!isItSunny) {
        return false;
    }
    return "It is sunny!";
}
sunnyDayMessage = getSunnyDayMessage(false);
