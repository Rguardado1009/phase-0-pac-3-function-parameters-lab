function introduction(name){
    return ('Hi, my name is ' + name +'.')
}
function introductionWithLanguage(name='Josh', langugage='Ember.js') {
    return('Hi, my name is ' + name + ' and I am learning to program in ' + langugage + '.')
}
function introductionWithLanguageOptional(name, language='JavaScript'){
    return("Hi, my name is " + name + " and I am learning to program in " + language + ".")
}

// had to use the + name + instead of ${name} as VS would not recognize what i was typing.//
