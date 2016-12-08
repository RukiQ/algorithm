1. `split('')` 返回的是单个字母的数组；`split(' ')` 返回的才是单词的数组。
2. 数组的迭代方法：`every()`、`filter`、`forEach`、`map()`、`some()` ==有返回值==，而不会改变原数组，因此要对一个变量进行赋值。
3. 链式调用方法的时候要注意：前面调用的方法有没有返回值，如果没有，再调用后面的方法时则会报错。
4. [Math.max()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/max) 和 [Math.min()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/min) 对数组应用的用法，需要绑定上下文。
5. `filter()` 返回的是数组！！
6. 不要直接在 for 循环里删除 arr 里面的元素，不然 arr 长度减少，而 i 在增加，会有坑！