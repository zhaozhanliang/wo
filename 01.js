//es5中变量的作用域区别{}
/*
function fn(){
    var a = 10;
    var b = 20;
}
*/
// alert(a);
//es6 ts
/*{
    var a = 10;
    var b = 20;
}
console.log(a);*/
/*{
    let a = 30;
    var b = 20;
    console.log(a);
}*/
// var 声明的是全局变量
// let 声明的是局部变量
var a = [];
var _loop_1 = function (i) {
    a[i] = function () {
        console.log(i);
    };
};
for (var i = 0; i < 10; i++) {
    _loop_1(i);
} // i>=10的时候跳出循环，之后又执行的a[5]()
console.log(a[5]);
a[5]();
