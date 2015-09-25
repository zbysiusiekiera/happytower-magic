(function() {
    var isOn = true,
        href,
        actions = [
            'a.tdu:contains("Rozdaj")',
            'a.tdu:contains("Zbierz dochód!")',
            'a.tdu:contains("Kup towary")',
            'a.tdu:contains("Przewieź")',
            'a.tdu:contains("napiwki")',
            'span.action a.tdu'
        ];
    for(var i = 0; !href && i < actions.length; i++) {
		var query = $(actions[i]);
        if(query.length) {
	    //console.log("I want to click: ", actions[i], query[0].href); //debug
            href = query[0].href;
        }
    }
    //return; //debug
    if (href) {
		console.log("Clicking link! " + href);
        if (isOn) {
            window.location.href = href;
        }
	} else {
        console.log('Waiting 60 seconds...');
		setTimeout(function() {
            window.location.href="http://www.happytower.pl/home";
		}, 60000);
	}
})();

