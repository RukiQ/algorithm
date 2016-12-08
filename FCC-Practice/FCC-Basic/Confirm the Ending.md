[Confirm the Ending](https://www.freecodecamp.com/challenges/confirm-the-ending)


    function confirmEnding(str, target) {
      // "Never give up and good luck will find you."
      // -- Falcor
      var len = target.length;
      var substr = str.substr(-len);
      
      return substr == target;
    }
    
    confirmEnding("Bastian", "n");

> ==`substr()`==