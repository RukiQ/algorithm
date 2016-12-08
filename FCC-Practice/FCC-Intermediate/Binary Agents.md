[Binary Agents ](https://www.freecodecamp.com/challenges/binary-agents)

    function binaryAgent(str) {
      
      var arr = str.split(' ');
    
      arr = arr.map(function(str) {
        return String.fromCharCode( translate(str) );
      });
      
      return arr.join('');
    }
    
    function translate(str) {
        var num = 0,
            len = str.length;
        for (var i = 0; i < len; i++) {
            num += str[i]*Math.pow(2, len - 1 - i);
        }
        return num;
    }
    
    // Aren't bonfires fun!?
    binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
    
> 注意：不要在 for 循环里写函数！
