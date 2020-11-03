import * as lib from './lib';



function abc() {
    console.log(lib.aaa);
}

// 当注释下面代码的时候，产出什么也没有
// abc();

// 当打开时只有 aaa 变量会被打包
abc();
