function Test() {

}

Test.prototype.count = 1;

let t1 = new Test();
console.log(t1.count++);

let t2 = new Test();
console.log()