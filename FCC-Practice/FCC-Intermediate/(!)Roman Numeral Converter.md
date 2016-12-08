[Roman Numeral Converter](https://www.freecodecamp.com/challenges/roman-numeral-converter)

*[方法1]：*

    function convertToRoman(num) {
      var romanEquiv = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
      };
      var roman = '';
      for (var key in romanEquiv) {
        while (num >= romanEquiv[key]) {
          roman += key;
          num -= romanEquiv[key];
        }
      }
      return roman;
    }
    
    convertToRoman(36);

*[方法2]：*

    var convertToRoman = function(num) {
    
      var decimalValue = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
      var romanNumeral = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];
    
      var romanized = '';
    
      for (var index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
          romanized += romanNumeral[index];
          num -= decimalValue[index];
        }
      }
    
      return romanized;
    }
    
    // test here
    convertToRoman(36);