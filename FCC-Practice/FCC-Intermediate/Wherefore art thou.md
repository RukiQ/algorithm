[Wherefore art thou](https://www.freecodecamp.com/challenges/wherefore-art-thou)

*[方法1]：*

    function whatIsInAName(collection, source) {
      // What's in a name?
      var arr = [];
    
      // Only change code below this line
      collection.forEach(function(obj) {
      	for (var key in source) {
      		if (obj[key] !== source[key]) {
      			return false;
      		}
      	}
    
      	arr.push(obj);
      });
      
      // Only change code above this line
      return arr;
    }
    
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
    
*[方法2]：[参考](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki/Bonfire-Where-art-thou)*

    function where(collection, source) {
      var arr = [];
      var keys = Object.keys(source);
      // Filter array and remove the ones that do not have the keys from source.
      arr = collection.filter(function(obj) {
        //Use the Array method every() instead of a for loop to check for every key from source.
        return keys.every(function(key) {
          // Check if the object has the property and the same value.
          return obj.hasOwnProperty(key) && obj[key] === source[key];
        });
      });
    
      return arr;
    }
    
    whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });