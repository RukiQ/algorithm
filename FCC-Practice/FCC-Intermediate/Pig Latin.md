[Pig Latin](https://www.freecodecamp.com/challenges/pig-latin)

*[方法1：]*

    function translatePigLatin(str) {
      
      var arr = str.split('');
      var newArr = arr.slice(0),
          cons = [],
          vowels = ['a', 'e', 'i', 'o', 'u'];
    
      if (vowels.indexOf(arr[0]) >= 0) {
      	str = str + 'way';
      } else {
      	for (var i=0; i<arr.length; i++) {
    	    if (vowels.indexOf(arr[i]) === -1) {
    	      newArr.splice(0, 1);
    	      cons.push(arr[i]);
    	      continue;
    	    } else {
    	      break;
    	    }
    	  }
    	  
    	  str = newArr.concat(cons).join('') + 'ay';
      }
      
      return str;
    }
    
    translatePigLatin("consonant"); // 'onsonantcay'
    
*[方法2：] [用正则!](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki/Bonfire-Pig-Latin)*

    function translatePigLatin(str) {
      
      var pigLatin = '';
      var regex = /[aeiou]/gi;
    
      if (str[0].match(regex)) {
      	pigLatin = str + 'way';
      } else {
      	var vowelIndice = str.indexOf(str.match(regex)[0]);
      	pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
      }
      
      return pigLatin;
    }
    
    translatePigLatin("consonant");

