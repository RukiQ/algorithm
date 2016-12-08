[Truncate a string](https://www.freecodecamp.com/challenges/truncate-a-string)

*[方法1]：*

    function truncateString(str, num) {
      // Clear out that junk in your trunk
      if (str.length > num) {
        if (num < 3) {
            str = str.slice(0, num) + '...';
        } else {
            str = str.slice(0, num-3) + '...'; 
        }
      }  
      
      return str;
    }
    
    truncateString("A-tisket a-tasket A green and yellow basket", 11);
    
    
*[方法2]：利用三元运算符，更简单*

    function truncateString(str, num) {
      // Clear out that junk in your trunk
      if (str.length > num) {
        var len = num < 3 ? num : num-3;
    
        str = str.slice(0, len) + '...';
      }  
      
      return str;
    }
    
    truncateString("A-tisket a-tasket A green and yellow basket", 11);