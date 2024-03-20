const router = require('express').Router();
const path = require('path')
const fs = require("fs")

router.get('/GetRss/:category', (req, res) => {
    console.log(req.params.category , req.params.category === "matchpreview.xml")
  if (req.params.category === "matchpreview.xml") {
    const filePath = path.join(__dirname, '../Xml/Rss/matchpreview.xml'); // Update the file path accordingly

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
  }
 else if (req.params.category === "cheatsheet.xml") {
    const filePath = path.join(__dirname, '../Xml/Rss/cheatsheet.xml'); // Update the file path accordingly

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
  }

  else if (req.params.category === "teamguide.xml") {
    const filePath = path.join(__dirname, '../Xml/Rss/teamguide.xml'); // Update the file path accordingly

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
  }

  else if (req.params.category === "teams.xml") {
    const filePath = path.join(__dirname, '../Xml/Rss/teams.xml'); // Update the file path accordingly

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
  }

//   else if (req.params.category === "sitemapteam.xml") {
//     const filePath = path.join(__dirname, '../Xml/sitemapteam.xml'); // Update the file path accordingly

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
  else {
    res.status(200).json("page Not Found");
  }

});


module.exports = router;