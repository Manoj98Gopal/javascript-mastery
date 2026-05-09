function memoize(fn) {
  const cache = {};

  return function (...arg) {
    const key = arg.join(",");

    if (cache[key] !== undefined) {
      return cache[key];
    }

    const result = fn(...arg);
    cache[key] = result;
    return result;
  };
}


module.exports = memoize;
