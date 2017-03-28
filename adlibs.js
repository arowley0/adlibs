$( document ).ready(function() {
    var questions= 3;
    var questionsLeft = ' [' + questions + ' question left]';
    var nounVal = prompt('Please type a singular noun');
    var noun = nounVal + questionsLeft;
    questions -= 1;
    questionsLeft = ' {' + questions + ' questions left]';
    var verb = prompt('Please type a verb that does not end in -ing') + questionsLeft;
    alert('Submit story?');
    var sentence = "<h2>The silly " + noun;
    sentence += ' loved to' + verb;
    sentence += ' the ' + noun + '.</h2>';
    document.write(sentence);
    console.log( "ready!" );
});
