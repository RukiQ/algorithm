[Return Largest Numbers in Arrays](https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays)

    function findLargest(arr) {
      var max = arr[0];
      for (var i=1; i<arr.length; i++) {
        if (max < arr[i]) {
          max = arr[i];
        }
      }
      return max;
    }
    
    function largestOfFour(arr) {
      
      arr = arr.map(function(singleArr) {
        return findLargest(singleArr);
      });
      
      // You can do this!
      return arr;
    }
    
    largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);