async function fetchSequentially(urls) {
  if (urls.length === 0) return [];

  const result = [];

  for (let url of urls) {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });

    result.push(await data.json());
  }

  return result;
}

fetchSequentially([
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3"
]);

module.exports = fetchSequentially;
