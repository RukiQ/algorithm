[Sum All Odd Fibonacci Numbers](https://www.freecodecamp.com/challenges/sum-all-odd-fibonacci-numbers)

    function sumFibs(num) {
        var prevNum = 0,
            currNum = 1,
            sum = 0;
    
        while (currNum <= num) {
            if (currNum % 2 !== 0) {
                sum += currNum;
            }
            var added = prevNum + currNum;
            prevNum = currNum;
            currNum = added;
        }
    
        return sum;
    }
    
    sumFibs(4);
    
[参考](https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki/Bonfire-Sum-All-Odd-Fibonacci-Numbers)