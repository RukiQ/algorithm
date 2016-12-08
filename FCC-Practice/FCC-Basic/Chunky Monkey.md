[Chunky Monkey](https://www.freecodecamp.com/challenges/chunky-monkey)

    function chunkArrayInGroups(arr, size) {
      // Break it up.
      var newArr = [];
      
      var num = Math.ceil( arr.length / size );
      for (var i = 0; i < num; i++) {
        newArr.push(arr.slice(size*i, size*(i+1)));
      }
      
      return newArr;
    }
    
    chunkArrayInGroups(["a", "b", "c", "d"], 2);