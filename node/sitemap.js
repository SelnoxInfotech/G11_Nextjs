// const router = require('express').Router();
// const path = require('path')
// const fs = require("fs")

// router.get('/sitemap/:category', (req, res) => {
//    console.log(req.params)

//   if (req.params.category === "sitemapBreakingnews.xml") {
//     const filePath = path.join(__dirname, '../Xml/Breakingnewsrss-Feed.xml'); // Update the file path accordingly

//     // Check if the file exists
//     fs.access(filePath, fs.constants.F_OK, (err) => {
//       if (err) {
//         console.error(err);
//         return res.status(404).send('XML file not found');
//       }

//       // Set headers to specify XML content and to open directly in browser
//       res.set({
//         'Content-Type': 'application/xml',
//         // 'Content-Disposition': 'inline', // This header tells the browser to open the file instead of downloading it
//       });

//       // Stream the file as response
//       const fileStream = fs.createReadStream(filePath);
//       fileStream.pipe(res);
//     });
//   }

// else if (req.params.category === "cricket-prediction.xml") {
//   const filePath = path.join(__dirname, '../Xml/cricket-prediction.xml'); // Update the file path accordingly

//   // Check if the file exists
//   fs.access(filePath, fs.constants.F_OK, (err) => {
//     if (err) {
//       console.error(err);
//       return res.status(404).send('XML file not found');
//     }

//     // Set headers to specify XML content and to open directly in browser
//     res.set({
//       'Content-Type': 'application/xml',
//       // 'Content-Disposition': 'inline', // This header tells the browser to open the file instead of downloading it
//     });

//     // Stream the file as response
//     const fileStream = fs.createReadStream(filePath);
//     fileStream.pipe(res);
//   });
// }

//   else {
//     res.status(200).json("page Not Found");
//   }

// });


// module.exports = router;



const router = require('express').Router();
const path = require('path');
const fs = require("fs");
const { default: axios } = require('axios');

router.get('/cricket-prediction.xml', (req, res) => {


  const filePath = path.join(__dirname, '../Xml/matches.xml'); // Update the file path accordingly

  // Check if the file exists
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error(err);
      return res.status(404).send('XML file not found');
    }

    // Set headers to specify XML content and to open directly in browser
    res.set({
      'Content-Type': 'application/xml',
      // 'Content-Disposition': 'inline', // This header tells the browser to open the file instead of downloading it
    });

    // Stream the file as response
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(res);
  });


});

module.exports = router;
