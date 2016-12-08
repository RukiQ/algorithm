[Seek and Destroy](https://www.freecodecamp.com/challenges/seek-and-destroy)

    function destroyer(arr) {
      // Remove all the values
      var args = [].slice.call(arguments, 1);
    
      arr = arr.filter(function(item) {
      	return args.indexOf(item) === -1;   // 反向思维
      });
      
      return arr;
    }
    
    destroyer([1, 2, 3, 1, 2, 3], 2, 3);