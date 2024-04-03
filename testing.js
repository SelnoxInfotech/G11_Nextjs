async function callApi1000Times() {
    const apiUrl = 'https://g11fantasy.com/NewsSection/tbl_matchApi/'; 
    const promises = [];
  
    try {
      for (let i = 0; i < 1000; i++) {
        const promise = fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error(`Failed to fetch data (status ${response.status})`);
            }
            return response.json();
          })
          .then(data => {
            console.log(`API call ${i + 1}:`); // Logging the response data, adjust as needed
          })
          .catch(error => {
            console.error(`Error occurred while calling API ${i + 1}:`, error);
          });
  
        promises.push(promise);
      }
  
      await Promise.all(promises);
    } catch (error) {
      console.error('Error occurred while calling the API:', error);
    }
  }
  
  // Call the function to start making API calls
  callApi1000Times();
  