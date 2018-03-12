/*
* 返回两数之间较大的值
* */
function max(x:number,y:number):number{
    return x>y?x:y;
}
console.log(max(2,4));
// console.log(max(2));

function max1(x:number,y?:number):number{
    if(y){
        return x>y?x:y;
    }else {
        return x;
    }
}
console.log(max1(2));

//默认参数
function max3(x:number,y:number=10):number{
    return x>y?x:y;
}
console.log(max3(1));
console.log(max3(1,20));

//剩余参数

function  sum(n1:number,n2:number,...rest:number[]):number{
    var result = n1+n2;
    for(var i=0;i<rest.length;i++){
        result+=rest[i];
    }
    return result
}
alert(sum(1,2,3,4,5));