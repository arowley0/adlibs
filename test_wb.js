jQuery.cachedScript = function( url, options ) {

    // Allow user to set any option except for dataType, cache, and url
    options = $.extend( options || {}, {
	dataType: "script",
	cache: true,
	url: url
    });

    // Use $.ajax() since it is more flexible than $.getScript
    // Return the jqXHR object so we can chain callbacks
    return jQuery.ajax( options );
};

function getWordBankId()
{
    var c = getCookie('wordbank');
    var wbid = Math.floor(Math.random()*1000);
    var uses = 1;
    if (c != null)
    {
	var parts = c.split(":");
	if (parts && parts.length == 2)
	    var t = parseInt(parts[1]);
	if (!isNaN(t) && t < 5)
	{
	    uses = t+1;
	    t = parseInt(parts[0]);
	    if (!isNaN(t))
		wbid = t;
 	}
    }
    setCookie('wordbank', wbid + ":" + uses);
    return wbid;
}

function getWordBank()
{
    var wbid = getWordBankId();
    $.cachedScript("test_wb.js" + ("00" + wbid).slice(-3) + ".js");
}

getWordBank();

//getWordBank('noun');
//getWordBank('nouns');
//getWordBank('verb');

