[Sorted Union](https://www.freecodecamp.com/challenges/sorted-union)

*[方法1：]*

    function uniteUnique(arr) {
      var unique = arguments[0];
      
      for (var i=1; i<arguments.length; i++) {
        for(var j=0; j<arguments[i].length; j++) {
          if (unique.indexOf(arguments[i][j]) === -1) {
            unique.push(arguments[i][j]); 
          } else {
            continue;
          }
        }
      }
      
      return unique;
    }
    
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);   // [1, 3, 2, 5, 4]
    
*[方法2：]*

    function uniteUnique(arr) {
      arr = [].slice.call(arguments);
      var unique = [];
      
      arr.forEach(function(arg) {
      	arg.forEach(function(element) {
      		if (unique.indexOf(element) === -1) {
      			unique.push(element);
      		} else {
      			return;
      		}
      	});
      });
      
      return unique;
    }
    
    uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
