function pos {
    var storyDiv = $('#story');
    var noun = document.getElementById("name").value;
    var adjective = document.getElementById("adjective").value;
    var verb = document.getElementById("verb").value;
    $('#story').text( noun + "helped a" + adjective + "" + verb "today." );

    var story_template =
	"Here are true facts about the NOUN0.  NOUN0s are the last " +
	"surviving members of the order NOUN1.";

    var story_filled = story_template
	.replace(/NOUN0/g, $("#NOUN0").text() )
	.replace(/NOUN1/g, $("#NOUN1").text() );

}

var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', pos);







