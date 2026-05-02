function groupBy(arr, key) {
  const result = {};

  for (let item of arr) {
    if (result.hasOwnProperty(item[key])) {
      result[item[key]]?.push(item);
    } else {
      result[item[key]] = [item];
    }
  }

  return result;
}

module.exports = groupBy;
