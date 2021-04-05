function introduction(name = "Josh") {
   return `Hi, my name is ${name}.`;
}

introduction(name);

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}


introductionWithLanguage("Josh", "Ember.js");

function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}


introductionWithLanguageOptional("Gracie", language);

introductionWithLanguageOptional("Gracie", "Python");
