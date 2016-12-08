[Missing letters](https://www.freecodecamp.com/challenges/missing-letters)

    function fearNotLetter(str) {
    
    	var lowCharCode = str.charCodeAt(0),
    			upCharCode = str.charCodeAt(str.length - 1),
    			missLetter = '';
    
    	for (var i = lowCharCode + 1; i < upCharCode; i++) {
    		if (str.indexOf(String.fromCharCode(i)) === -1) {
    			missLetter += String.fromCharCode(i);
    		}
    	}
    
    	if (missLetter) {
    		return missLetter;
    	} else {
    		return undefined;
    	}
    }
    
    
    fearNotLetter("abce");  // d