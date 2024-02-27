export   async function fetchData1(req, res) {
    try {
      // Make an HTTP request to fetch data from source 1
      const response = await fetch('https://www.g11fantasy.com/NewsSection/Get-News/1');
      
      // Parse the response and return the data
      const data = await response.json();
      return data;
    //   res.status(200).json(data)             ;
    } catch (error) {
      console.error('Error fetching data from source 1:', error);
      throw error; // Rethrow the error for handling in getServerSideProps
    }
  }
  

  export async function fetchData2byid(id) {
    try {
      // Make an HTTP request to fetch data from source 2
      const response = await fetch(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${id}`);
      
      // Parse the response and return the data
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.error('Error fetching data from source 2:', error);
      throw error; // Rethrow the error for handling in getServerSideProps
    }
  }