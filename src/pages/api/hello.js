// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

async function handler(req, res) {
  try {
    console.log(req)
    // Make an HTTP request to fetch data from source 1
    const [topNewsRes, imageRes] = await Promise.all([
      fetch('https://g11fantasy.com/NewsSection/FilterbySubCategory/7'),
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
    res.status(200).json(responseData.breaking.data);
  } catch (error) {
    console.error('Error fetching data from source 1:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

module.exports = handler