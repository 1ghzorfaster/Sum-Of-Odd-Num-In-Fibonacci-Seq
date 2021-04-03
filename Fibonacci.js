function sumFibs(num) {
  let arr = [1, 1];
  if (num < 2) {
      arr.pop();
    }
  for (let i = 2; i < num; i++) {
    let x = arr.length -1;
    let y = arr.length -2;
    arr.push(arr[x] + arr[y]);
  }
  return arr
      .filter(n => n%2 && n <= num)
      .reduce((a, b) => a + b, 0);
}

//test
console.log(sumFibs(75025));
