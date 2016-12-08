[Search and Replace](https://www.freecodecamp.com/challenges/search-and-replace)

*[方法1]：*

    function myReplace(str, before, after) {
    
    	var arr = str.split(' '),   // 记得加空格！！
    	    index = arr.indexOf(before);
    
    	if (before.toLowerCase() !== before) {
    	   after = after[0].toUpperCase() + after.slice(1); 
    	   // 或者
    	   // after = after.replace(after[0], after[0].toUpperCase());
    	}
    
    	arr.splice(index, 1, after);
    	
    	str = arr.join(' ');
    
      return str;
    }
    
    myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
    
*[方法2]：[参考](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki/Bonfire-Search-and-Replace)*
    
    function replace(str, before, after) {
    
      var index = str.indexOf(before);

      if (str[index] === str[index].toUpperCase()) {
        after = after.charAt(0).toUpperCase() + after.slice(1);
      }

      str = str.replace(before, after);
    
      return str;
    }
