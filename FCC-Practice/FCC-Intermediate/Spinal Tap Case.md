[Spinal Tap Case](https://www.freecodecamp.com/challenges/spinal-tap-case)

    function spinalCase(str) {
    
      // 创建匹配空白和下划线的正则
      var regex = /\s+|_+/g;  // 注意全局匹配
      
      // 将小写字母-大写字母转换成小写字母-空格-大写字母
      // 注意捕获（加小括号）和全局匹配
      str = str.replace(/([a-z])([A-Z])/g, '$1 $2');  // 'All The-small Things'
      
      return str.replace(regex, '-').toLowerCase(); // 'all-the-small-things'
    }
    
    spinalCase('AllThe-small Things');