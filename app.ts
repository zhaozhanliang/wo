/*class Person{
    name:string="zhangsan";
    print(){
        alert(this.name)
    }
}

var p1 = new Person();
p1.print();*/

/*let flag:boolean = false;
function test1(){
    console.log(flag)
}
test1();

//02 number

let num:number = 20;

// 03 string
let str:string = "hello";

// 04 array
var arr:number[] = [1,2,3,4];
console.log(arr[2]);

var a:any = 20;

var arr1:any[] = [1,2,true,"hello"];

//0401 数组的第二种声明方式
var arr2:Array<number> = [1,2,34,54];
console.log(arr2[1]);

// 05 元祖: 用来表示一致元素数量和类型的集合，各个元素的类型不必相同
let x:[string,string,number,boolean];
x=["zhangsan","男",90,true];
console.log(x[2]);

//enum 枚举类型 可被命名的整形常数的集合
enum color{red=1,pink=2,blue=5,yellow}
console.log(color[5]);

//any 针对类型不明确时使用

// 07 空类型 表示没有任何类型
function hello(str:string):void{
    console.log(str);
}
function sum(num1:number,num2:number):void{
    console.log(num1+num2);
}
hello("hello world");
sum(20,50);

function sub1(num1:number,num2:number):number{
    return num1+num2;
}
console.log(sub1(40,70));*/

/*function getStock(){
    return {
        code:"SDF",
        price:100
    }
}

/!*var stock = getStock();
var code = stock.code;
var price = stock.price;
console.log(code,price);*!/

//对象解析
/!*var {code,price} = getStock();
console.log(code,price);

var test = {
    x:0,
    y:100,
    width:"150px",
    height:"200px"
};

let{x,y,width,height} = test;
console.log(width);*!/

//数组解析
let arr = [1,2,3,4,5];
let[a,b,c,d,e,f] = arr;
console.log(c);

function fn([n1,n2]){
    console.log(n1+n2);
}
fn([2,3]);

//剩余数组
let [first,second,...last] = [1,2,3,4,5,6,7,8];
console.log(last);*/


//匿名函数
/*var fn = function () {

};

//箭头表达式
var login = () =>{
    alert("登录")
};
// login();

var login1 = (name,pwd) =>{
    alert(name+"登陆了")
};
// login1("zhangsan","123");

var sum = (arg1,arg2) =>arg1+arg2; //return arg1+arg2
//var sum = function((arg1,arg2)){
//      return arg1+arg2
// }
console.log(sum(2,3));

function  getStock(name:string){
    //this=>stock
    this.name = name;  //name=IBM

    var This = this;
    /!*setInterval(function () {
        /!*console.log(this);*!/ //this指向window
        console.log(This.name)
    },1000)*!/
    setInterval(()=>{
        console.log(This.name)
    },1000)
}
var stock = new getStock("IBM");

//构造函数定义 new后面的就是构造函数，构造函数中的this就是具体的对象
//在箭头函数中this在函数创建时就确定了指向;在普通的函数中this的指向是由谁调用决定的
// stock.showName();

let stu={
  students:["zhangsan","lisi","wangwu"],
  show:function () {
      //this=>stu
      return ()=>{
          let num = Math.floor(Math.random() * 3);
          return this.students[num]
      }
  }
};
let stuShow = stu.show();
console.log(stuShow());*/

/*class Person{
    /!*name:string;
    sex:string;
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    };*!/
    constructor(public name:string,public sex:string){};
    sayHello(){
        console.log(this.name)
    }
}

//实例化一个对象，创建一个对象 new Person("","")
//类是抽象的，对象时具体的，对象时类的实现
var p1 = new Person("zhangsan","男");
// p1.sayHello();

class Star extends Person{
    //子类的构造函数必须继承父类的构造函数
    constructor(public name:string,
                public sex:string,
                public job:string){
        super(name,sex); //继承父类的属性
    }
    sayHello(){
        super.sayHello(); //继承父类的方法
    }
    showJob(){
        alert(this.job)
    }
}

var s1 = new Star("黄小名","男","演员");
s1.sayHello();*/

/*class Person{
    name;
    sex;
    constructor(name,sex){
        this.name=name;
        this.sex=sex;
    }
    print(){
        console.log(this.sex)
    }
}
var p1 = new Person("zhangsan","男");
// p1.print();

class Employee extends Person{
    code;
    constructor(name,sex,code){
        super(name,sex);
        this.code = code;
    }
    print(){
        super.print();
        this.doWork()
    }
    private doWork(){
        console.log("干活")
    }
}

var e1 = new Employee("lisi","女",001);
e1.print();*/

/*interface Iperson{ //规范 一个人公共的属性
    name:string;
    sex:string;
}
//01 作为一个方法的参数声明，调用时必须传入接口声明时的属性要求
//定义：用来简历某种刁蛮约定，使其他开发者在调用某个方法或创建新的类时，必须遵循接口所定义的代码约定


class Person{ //遵循规范 创建一个人类
    constructor(public p:Iperson){}
    show(){
        console.log(this.p.name)
    }
}

var p1 = new Person({
    name:"张三",
    sex:"男"
});
p1.show();

interface obj{ //规范
    label?:string,
    code:string,
}
function fn(f:obj){ //打印功能
    console.log(f.label);
    console.log(f.code)
}
fn({
    label:"aa",
    code:"bb",
});

interface Animal{
    name:string,
    eat() //规范
    show()
}

class Tiger implements Animal{
    name;
    constructor(name){this.name=name}
    eat(){console.log("meat")}
    show(){}
    aa(){}
}*/

// class Sheep implements Animal{
//     name;
//     constructor(name){this.name=name}
//     eat(){console.log("grass")}
//     show(){}
// }

class Person{
    constructor(public name:string,public sex:string){}
    eat(){
        console.log(this.name+"is eating")
    }
}

var a1:Person[] = [];
var a2:Array<number> = [];

var workers1:Person[] = [];
var workers:Array<Person> = [];
workers[0] = new Person("张三","男");
workers[1] = new Person("李四","女");
console.log(workers);


