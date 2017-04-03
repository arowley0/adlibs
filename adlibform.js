var noun = document.getElementById('noun') ;
var adjective = document.getElementById('adjective') ;
var verb = document.getElementById('verb') ;
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
    var random = Math.floor(Math.random()*array.length)
    return array[random];
}

var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
var insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
var insertY = ['the soup kitchen','Disneyland','the White House'];
var insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result() {
    var newStory = storyText;

    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':insertx:',xItem);
    newStory = newStory.replace(':inserty:',yItem);
    newStory = newStory.replace(':insertz:',zItem);

    if(noun.value != '') {
	var noun = noun.value;
	newStory = newStory.replace('Bob',name);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}


