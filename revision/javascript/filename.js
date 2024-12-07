// Make an HTTP GET request using fetch
function getData(url) {
    return fetch(url)
      .then(response => {
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
          return Promise.reject('Failed to fetch data: ' + response.statusText);
        }
        return response.json();  // Parse the JSON response body
      })
      .then(data => {
        console.log('Data received:', data); // Handle the JSON data
        return data;
      })
      .catch(error => {
        console.error('Error:', error); 
      });
  }
  
  // Example usage:
  const url = 'https://jsonplaceholder.typicode.com/todos/1'; // Sample URL for testing
  getData(url);
  