function Foo(name=undefined,age=undefined) {
    this.name = name;
    this,age = age ;
    this.foo = function() { console.log("hello,world");}
}

console.log("test ")
