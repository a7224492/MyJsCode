async function f1() {
  await setTimeout(function() {
    console.log('t1');
  }, 1000);

  console.log('f1 finish');
}

let x = [1,2,3];
console.log(x.concat([5,6,7], [10, 12, 14]));