function makeCounter(startValue = 0) {
  let count = startValue;

  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }

  function reset() {
    count = startValue;
    return count;
  }

  return { increment, decrement, reset };
}

const counter = makeCounter(2);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.reset())
console.log(counter.increment());


module.exports = makeCounter;
