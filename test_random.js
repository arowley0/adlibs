// ---------- BEGIN RANDOM WORDS ----------
var NOUN = 1;
var ADJECTIVE = 7;
var VERB = 3;
// var VERBS = 4;
// var VERBED = 5;
// var VERBING = 6;
// var NOUNS = 2;
// var ADVERB = 8;
// var PLACE = 9;
// var OCCUPATION = 10;
// var NUMBER = 11;
// var ANIMAL = 12;
// var ANIMALS = 13;
// var BODYPART = 14;
// var BODYPARTS = 15;
// var LETTER = 16;
// var FAMOUS = 17;
// var OCCUPATIONS = 18;

var allRandWords = "";

var printCnt = 0;
function printRandomWord(wType)
{
    var id = "prw"+(printCnt++);
    document.write("<input type='hidden' id='"+id+"'>");
    randomWord(wType, id, true);
    document.write("<span class='mG_glibword'>" + document.getElementById(id).value + "</span>");
}

function randomWord(wType, id, logged)
{
    var wrd = document.getElementById(id);
    var tmp = "";
    var newWord = wrd.value;
    var n;
    switch (wType)
    {
	case NOUN:       while (invalidWord(wrd.value, newWord))
	{
	    newWord = noun[Math.floor(Math.random() * noun.length)];
	}
	wrd.value = newWord;
	break;
	case ADJECTIVE:      while (invalidWord(wrd.value, newWord))
	{
	    newWord = adjective[Math.floor(Math.random() * adjective.length)];
	}
	wrd.value = newWord;
	break;
	case VERB:       while (invalidWord(wrd.value, newWord))
	{
	    newWord = verb[Math.floor(Math.random() * verb.length)];
	}
	wrd.value = newWord;
	break;
	// case VERBS:      while (invalidWord(wrd.value, newWord))
	// {
	//     newWord = verbs[Math.floor(Math.random() * verbs.length)];
	// }
	// wrd.value = newWord;
	// break;
	// case VERBED:     while (invalidWord(wrd.value, newWord))
	// {
	//     newWord = verbed[Math.floor(Math.random() * verbed.length)];
	// }
	// wrd.value = newWord;
	// break;
	// case VERBING:    while (invalidWord(wrd.value, newWord))
	// {
	//     newWord = verbing[Math.floor(Math.random() * verbing.length)];
	// }
	// wrd.value = newWord;
	// break;
	// case ADJECTIVE:  while (invalidWord(wrd.value, newWord))
	// {
	//     newWord = adjective[Math.floor(Math.random() * adjective.length)];
	// }
	// wrd.value = newWord;
	// break;
	// case ADVERB:     while (invalidWord(wrd.value, newWord))
	// {
	//     newWord = adverb[Math.floor(Math.random() * adverb.length)];
	// }
	// wrd.value = newWord;
	// break;
	// case PLACE:      while (invalidWord(wrd.value, newWord))
	// {
	//     newWord = place[Math.floor(Math.random() * place.length)];
	// }
	// wrd.value = newWord;
	// break;
	// case OCCUPATION: while (invalidWord(wrd.value, newWord))
	// {
	//     newWord = occupation[Math.floor(Math.random() * occupation.length)];
	// }
	// wrd.value = newWord;
	// break;
	// case OCCUPATIONS: while (invalidWord(wrd.value, newWord))
	// {
	//     newWord = occupations[Math.floor(Math.random() * occupations.length)];
	// }
	// wrd.value = newWord;
	// break;
	// case ANIMAL:     while (invalidWord(wrd.value, newWord))
	// {
	//     newWord = animal[Math.floor(Math.random() * animal.length)];
	// }
	// wrd.value = newWord;
	// break;
	// case FAMOUS:     while (invalidWord(wrd.value, newWord))
	// {
	//     newWord = famous[Math.floor(Math.random() * famous.length)];
	// }
	// wrd.value = newWord;
	// break;
	// case ANIMALS:    while (invalidWord(wrd.value, newWord))
	// {
	//     newWord = animals[Math.floor(Math.random() * animals.length)];
	// }
	// wrd.value = newWord;
	// break;
	// case BODYPART:   while (invalidWord(wrd.value, newWord))
	// {
	//     newWord = bodypart[Math.floor(Math.random() * bodypart.length)];
	// }
	// wrd.value = newWord;
	// break;

	// case BODYPARTS:  while (invalidWord(wrd.value, newWord))
	// {
	//     newWord = bodyparts[Math.floor(Math.random() * bodyparts.length)];
	// }
	// wrd.value = newWord;
	// break;
	case NUMBER:     n = Math.random();
	if (n > .25)
	    n = Math.round(Math.random() * 10000) / 1000;
	else if (n > .5)
	    n = Math.round(Math.random() * 100000) / 1000;
	else if (n > .75)
	    n = Math.round(Math.random() * 1000000) / 1000;
	else
	    n = Math.round(Math.random() * 10000000) / 1000;
	if (Math.random() > .8)
	    n *= -1;
	if (Math.random() > .3)
	    n = Math.round(n);
	if (Math.random() > .85)
	    wrd.value = number[Math.floor(Math.random() * number.length)];
	else
	    wrd.value = "" + n;
	break;
	case LETTER:     while (invalidWord(wrd.value, newWord))
	{
	    newWord = randomLetter();
	}
	wrd.value = newWord;
	break;
    }
    if (logged)
    {
	allRandWords += wrd.value;
    }
}

function invalidWord(oldW, newW)
{
    return (oldW == newW || allRandWords.match(newW));
}

function randomLetter()
{
    var letters = 'qwertyuiopasdfghjklzxcvbnm';
    return letters.charAt(Math.floor(Math.random() * 26));
}

function randomAll()
{
    eval(document.getElementById("allRand").value);
}
// ---------- END RANDOM WORDS ----------
