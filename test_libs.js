function CopyToClipboard(rSource)
{
    rSource.select()
    if(window.clipboardData){ var r=clipboardData.setData('Text',rSource.value); return 1; }
    else return 0
}

function setClass(id, cls)
{
    document.getElementById(id).className = cls;
}

var lastSeen = 1;
var lastSection = 1;

function switchTo(x)
{
    if (lastSeen == 1)
    {
	setClass('sUPoff', 'mG_removed');
	setClass('sUPon', 'mG_displayed');
    }
    if (lastSeen == lastSection)
    {
	setClass('sDOWNoff', 'mG_removed');
	setClass('sDOWNon', 'mG_displayed');
    }
    if (lastSeen == -1)
    {
	setClass('sUPoff', 'mG_removed');
	setClass('sUPon', 'mG_displayed');
	setClass('sDOWNoff', 'mG_removed');
	setClass('sDOWNon', 'mG_displayed');
    }

    if (lastSeen == -1)
    {
	setClass('sALLoff', 'mG_removed');
	setClass('sALLon', 'mG_displayed');
	for (var q=1; q<=lastSection; q=q+1)
	{
	    setClass('r'+q, 'mG_removed');
	}
    }
    else
    {
	setClass('s'+lastSeen+'off', 'mG_removed');
	setClass('s'+lastSeen+'on', 'mG_displayed');
	setClass('r'+lastSeen, 'mG_removed');
    }
    if (x == -1)
    {
	setClass('sALLon', 'mG_removed');
	setClass('sALLoff', 'mG_displayed');
	for (var q=1; q<=lastSection; q=q+1)
	{
	    setClass('r'+q, 'mG_displayed');
	}
    }
    else
    {
	setClass('s'+x+'on', 'mG_removed');
	setClass('s'+x+'off', 'mG_displayed');
	setClass('r'+x, 'mG_displayed');
    }
    lastSeen=x;

    if (lastSeen == 1)
    {
	setClass('sUPon', 'mG_removed');
	setClass('sUPoff', 'mG_displayed');
    }
    if (lastSeen == lastSection)
    {
	setClass('sDOWNon', 'mG_removed');
	setClass('sDOWNoff', 'mG_displayed');
    }
    if (lastSeen == -1)
    {
	setClass('sUPon', 'mG_removed');
	setClass('sUPoff', 'mG_displayed');
	setClass('sDOWNon', 'mG_removed');
	setClass('sDOWNoff', 'mG_displayed');
    }
}

function doGlib()
{
    var wordCount = parseInt($('#wCount').val());
    var re = /\{!(\d+)\}/;
    for (i = 1; i <= wordCount; i=i+1) {
	var word = $('#w'+i).val();
	var m;

	if ((m = re.exec(word)) !== null)
	{
	    word = $('#w'+m[1]).val();
	}
	$('#mG_w'+i).html(word || "[Word Not Submitted]");
    }

    $('.mG_form').hide(200);
    $('.mG_glibbox').show(200);
}

function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}
