[Repeat a string repeat a string](https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string)

    function repeatStringNumTimes(str, num) {
      // repeat after me
      var newStr = '';  // 一定要初始化为空字符串！！
      for (var i=0; i<num; i++) {
        newStr += str;
      }  
      
      return newStr;
    }
    
    repeatStringNumTimes("abc", 3);