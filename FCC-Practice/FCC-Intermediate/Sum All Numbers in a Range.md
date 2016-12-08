[Sum All Numbers in a Range](https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range)

*[方法1]：*

    function sumAll(arr) {
        // 注意用法！
        var max = Math.max.apply(null, arr),
            min = Math.min.apply(null, arr),
            sum = min;
      
        while (max > min) {
            min++;
            sum += min;
        }
      
        return sum;
    }
    
    sumAll([1, 4]);
    
> 注意点：[Math.max()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/max) 和 [Math.min()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/min) 对数组应用的用法，需要绑定上下文。

*[方法2]：ES6*

    function sumAll(arr) {
        // 注意用法！
        var max = Math.max(...arr),
            min = Math.min(...arr),
            sum = min;
      
        while (max > min) {
            min++;
            sum += min;
        }
      
        return sum;
    }
    
    sumAll([1, 4]);