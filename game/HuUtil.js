let count = 0;
let n = [1, 2];
for (let i = 0; i < n.length; ++i) {
  for (let j = i; j < n.length; ++j) {
    // for (let k = j; k < n.length; ++k) {
      ++count;
    // }
  }
}

console.log(count);