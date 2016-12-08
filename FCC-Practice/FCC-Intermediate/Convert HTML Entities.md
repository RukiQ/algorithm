[Convert HTML Entities](https://www.freecodecamp.com/challenges/convert-html-entities)

    function convertHTML(str) {
      var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '\"': '&quot;',
        '\'': '&apos;'
      };
      
      str = str.replace(/&|<|>|\'|\"/g, function(cat) {
        return map[cat];
      });
      
      return str;
    }
    
    convertHTML("Dolce & Gabbana"); // Dolce &amp; Gabbana
