[Title Case a Sentence](https://www.freecodecamp.com/challenges/title-case-a-sentence)

*[方法1]：*

    function titleCase(str) {
      
      var arr = str.toLowerCase().split(' ');
      
      for (var i=0; i<arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      
      return arr.join(' ');
    }
    
    titleCase("I'm a little tea pot");
    
> 用到了字符串的字符方法 ==`CharAt()`==

*[方法2]：用 ==`map()`== 方法代替 `for` 循环*

    function titleCase(str) {
      
      var arr = str.toLowerCase()
                   .split(' ')
                   .map(function(word) {
                      return word.charAt(0).toUpperCase() + word.slice(1);
                    });
      
      return arr.join(' ');
    }
    
    titleCase("I'm a little tea pot");
    

> `word.chatAt(0)` => `word[0]`

*[方法3]：==`map()`==  + ==`replace()`==*

    function titleCase(str) {
      
      var arr = str.toLowerCase()
                   .split(' ')
                   .map(function(word) {
                      return word.replace(word[0], word[0].toUpperCase());
                    });
      
      return arr.join(' ');
    }
    
    titleCase("I'm a little tea pot");