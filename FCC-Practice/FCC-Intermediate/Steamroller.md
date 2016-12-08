[Steamroller](https://www.freecodecamp.com/challenges/steamroller)

*[方法1：]* [参考](https://www.gorkahernandez.com/blog/fcc-bonfire-series-135-steamroller/)

    function steamrollArray(arr) {
      
        var newArr = [];
    
        arr.forEach(function(item) {
            if (Array.isArray(item)) {
                flatten(item);
            } else {
                newArr.push(item);
            }
        });
    
        function flatten(arr) {
            arr.forEach(function(item) {
                if (Array.isArray(item)) {
                    flatten(item);
                } else {
                    newArr.push(item);
                }
            });
        }
     
        return newArr;
    }
    
    steamrollArray([1, [2], [3, [[4]]]]);
    
【可进一步优化成：】

    function steamrollArray(arr) {
      
        var newArr = [];
    
        flatten(arr);   // 采用递归
    
        // 该函数必须定义在内部，因为要取得 newArr 的引用
        function flatten(arr) {
            arr.forEach(function(item) {
                if (Array.isArray(item)) {
                    flatten(item);
                } else {
                    newArr.push(item);
                }
            });
        }
     
        return newArr;
    }
    
    steamrollArray([1, [2], [3, [[4]]]]);
    
*[方法2：]* [参考](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki/Bonfire-Steamroller)

    function steamrollArray(arr) {
      
        var newArr = [];
    
        var flatten = function(item) {
            if (Array.isArray(item)) {
                for (var a in item) {
                    flatten(item[a]);
                }
            } else {
                newArr.push(item);
            }
        };
    
        arr.forEach(flatten);
        
        return newArr;
    }
    
    steamrollArray([1, [2], [3, [[4]]]]);
    
> 注意：变量提升，用函数表达式定义函数要定义在前面。