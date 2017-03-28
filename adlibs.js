$( document ).ready(function() {
    var questions= 3;
//    var questionsLeft = ' [' + questions + ' question left]';
    var nounVal = prompt('Please type a singular noun');
    var noun = nounVal;
    questions -= 1;
//    questionsLeft = ' {' + questions + ' questions left]';
    var verbVal = prompt('Please type a verb that does not end in -ing');
    var verb = verbVal;
    questions -= 1;
//    var nounPlurVal = prompt('Please type a plural noun');
//    var nounPlur = nounPlurVal;
//    question -= 1;
    alert('Submit story?');
    var sentence = "<h2>The silly " + noun;
    sentence += ' loved to ' + verb + '.</h2>';
    document.write(sentence);
    console.log( "ready!" );
});
