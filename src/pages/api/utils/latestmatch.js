export default async function latestmatch(req, res) {
    try {
      // Make an HTTP request to fetch data from source 1
      const [topNewsRes] = await Promise.all([
        fetch('https://grand11.in/g11/all_matches_api.php'),
      ]);
      const [topNews] = await Promise.all([
        topNewsRes.json(),
      ]);
  
   // Assuming breaking news is the first item in topNews array
      const responseData = {
        breaking: topNews ,
      };
  
      // Parse the response and return the data
  // console.log(responseData)
      res.status(200).json(responseData.breaking.reverse());
    } catch (error) {
      console.error('Error fetching data from source 1:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }
  