export default async function fetchData1(req, res) {
  try {
    // Make an HTTP request to fetch data from source 1
    const [topNewsRes, matchesRes, allMatchesRes, postRes, teamsRes, imageRes] = await Promise.all([
      fetch('https://www.g11fantasy.com/NewsSection/Get-TopNews/1'),
      fetch('https://grand11.in/g11/api/matches'),
      fetch('https://grand11.in/g11/all_matches_api.php'),
      fetch('https://grand11.in/g11/api/post'),
      fetch('https://grand11.in/g11/api/teams'),
      fetch('https://www.g11fantasy.com/NewsSection/Get-StaticImage/')
    ]);
    const [topNews, matches, allMatches, posts, teams, images] = await Promise.all([
      topNewsRes.json(),
      matchesRes.json(),
      allMatchesRes.json(),
      postRes.json(),
      teamsRes.json(),
      imageRes.json()
    ]);

 // Assuming breaking news is the first item in topNews array
    const responseData = {
      breaking: topNews ,
      l: topNews[0],
      l1: matches,
      l2: allMatches.reverse().slice(0, 100),
      l3: posts.result,
      teamsData: teams.result,
      imageData: images
    };

    // Parse the response and return the data
// console.log(responseData)
    res.status(200).json(responseData);
  } catch (error) {
    console.error('Error fetching data from source 1:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}


// export async function fetchData2byid(id) {
//   try {
//     // Make an HTTP request to fetch data from source 2
//     const response = await fetch(`https://www.g11fantasy.com/NewsSection/Get-Newsbyid/${id}`);

//     // Parse the response and return the data
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error('Error fetching data from source 2:', error);
//     throw error; // Rethrow the error for handling in getServerSideProps
//   }
// }