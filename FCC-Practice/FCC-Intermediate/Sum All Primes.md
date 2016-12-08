[Sum All Primes](https://www.freecodecamp.com/challenges/sum-all-primes)

    function sumPrimes(num) {
    	var arr = [];
      
    	for (var i = 1; i <= num; i++) {
    		if (isPrime(i)) {
    			arr.push(i);
    		}
    	}
      
      return arr.reduce(function(prev, curr) {
      	return prev + curr;
      });
    }
    
    function isPrime(num) {
    
    	if (num === 1) { return false; }
    	if (num === 2) { return true; }
    
    	for (var i = 2; i <= Math.sqrt(num); i++) {
    		if (num % i === 0) {
    			return false;
    		}
    	}
    
    	return true;
    }
    
    sumPrimes(10);