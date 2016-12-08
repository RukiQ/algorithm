[Check for Palindromes](https://www.freecodecamp.com/challenges/check-for-palindromes)

    function palindrome(str) {
    
      str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
      var reverseStr = str.split('').reverse().join('');    // 字符串反转
      
      if (str == reverseStr) {
        return true;
      } 
      
      // Good luck!
      return false;
    }
    
    palindrome("eye");


