[Finders Keepers](https://www.freecodecamp.com/challenges/finders-keepers)

    function findElement(arr, func) {
      var num;
      
      num = arr.filter(function(item) {
        return func(item);
      });
      
      return num[0];
    }
    
    findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
    
> 注意：`filter()` 返回的是数组！！