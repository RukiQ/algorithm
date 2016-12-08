[Find the Longest Word in a String](https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string)

    function findLongestWord(str) {
      var arr = str.split(' ');
      str = arr[0];
      
      for (var i=1; i<arr.length; i++) {
        if (str.length < arr[i].length) {
          str = arr[i];
        }
      }
      
      return str.length;
    }
    
    findLongestWord("The quick brown fox jumped over the lazy dog");

> 注意：==`split('')`== 返回的是单个字母的数组；==`split(' ')`== 返回的才是单词的数组。