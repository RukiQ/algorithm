[DNA Pairing](https://www.freecodecamp.com/challenges/dna-pairing)

    function pairElement(str) {
      var map = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
      };
      
      var arr = str.split('');
      
      arr = arr.map(function(item) {
        return [item, map[item]];
      });
      
      return arr;
    }
    
    pairElement("GCG");