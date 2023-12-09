function fetchDataAsync() {
    console.log("Fetching data asynchronously...");
    setTimeout(function () {
      console.log("Data fetched asynchronously!");
    }, 10000); // Simulate a 2-second delay
  }
  
  console.log("Start");
  fetchDataAsync();
  console.log("End");
  