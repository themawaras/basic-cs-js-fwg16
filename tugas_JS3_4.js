const fetchPromise = fetch("https://jsonplaceholder.typicode.com/users"); // akses dan manipulasi protokol, request-response

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((json) => {
    for (let i = 0; i < json.length; i++) {
      console.log(json[i].name);
    }
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
