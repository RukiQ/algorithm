[Smallest Common Multiple](https://www.freecodecamp.com/challenges/smallest-common-multiple)

    function smallestCommons(arr) {
    
      return createRange(arr).reduce(function(a, b) {
    		return lcm(a,b);
    	});
    }
    
    function createRange(arr) {
    	var range = [],
    			low = Math.min(arr[0], arr[1]),
    			up = Math.max(arr[0], arr[1]),
    			i = low;
    
    	while (i <= up) {
    		range.push(i++);
    	}
    
    	return range;
    }
    
    // 求最小公倍数
    function lcm(a, b) {
    	return (Math.abs(a*b) / gcd(a, b));
    }
    
    // 求最大公约数
    function gcd(a, b) {
    	var temp;
    	while (b !== 0) {
    		temp = b;
    		b = a % b;
    		a = temp;
    	}
    
    	return a;
    }

[参考](https://www.gorkahernandez.com/blog/fcc-bonfire-series-132-smallest-common-multiple/)