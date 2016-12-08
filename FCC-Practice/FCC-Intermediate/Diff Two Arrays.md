[Diff Two Arrays](https://www.freecodecamp.com/challenges/diff-two-arrays)

*[方法1]：笨方法*

    function diffArray(arr1, arr2) {
      var newArr = [];
      // Same, same; but different.
      var arr_a = arr1.filter(function(element) {
        return arr2.indexOf(element) === -1;
      });
    
      var arr_b = arr2.filter(function(element) {
        return arr1.indexOf(element) === -1;
      });
    
      newArr = arr_a.concat(arr_b);
    
      return newArr;
    }
    
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
    
*[方法1]：[Better Solution](https://github.com/Rafase282/My-FreeCodeCamp-Code/blob/09b63761228ed1e63617724934dbffb21adf125f/Intermediate%20Algorithm%20Scripting/02%20Bonfire%20Diff%20Two%20Arrays.js)*

    function diffArray(arr1, arr2) {
      var newArr = arr1.concat(arr2);
     
      function check(item) {
        if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
          return item;
        }
      }
    
      return newArr.filter(check);
    }
    
    diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);