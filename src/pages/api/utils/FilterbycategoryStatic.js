async function FilterbycategoryStatic(req, res) {

    try {
      // Make an HTTP request to fetch data from source 1
      const [topNewsRes] = await Promise.all([
        fetch(`https://g11fantasy.com/NewsSection/FilterbySubCategory/${3}`),
      ]);
      const [topNews] = await Promise.all([
        topNewsRes.json(),
      ]);
  
      // Assuming breaking news is the first item in topNews array
      const responseData = {
        breaking: topNews,
      };
  
      // Parse the response and retur
      res.status(200).json(responseData.breaking.data);
    } catch (error) {
      console.error('Error fetching data from source 1:', error);
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  }
  