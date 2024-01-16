// Function that returns a promise
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched!");
    }, 1000);
  });
}

// Asynchronous function using async/await
async function fetchDataAsync() {
  try {
    // Await the completion of the promise
    const result = await fetchData();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Calling the asynchronous function
fetchDataAsync();
