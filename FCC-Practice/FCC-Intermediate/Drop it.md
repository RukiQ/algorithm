[Drop it](https://www.freecodecamp.com/challenges/drop-it)

    function dropElements(arr, func) {
      // Drop them elements.
      var newArr = [];
    
      for (var i=0; i<arr.length; i++) {
        if (func(arr[i])) {
          break;
        } else {
          newArr.push(arr[i]);
        }
      }
    
      // 方法 1：splice()
      //arr.splice(0, newArr.length);
    
      // 方法 2：shift()
      newArr.forEach(function(item) {
      	arr.shift(item);
      });
      
      return arr;
    }
    
> 注意：不要直接在 for 循环里删除 arr 里面的元素，不然 arr 长度减少，而 i 在增加，会有坑！