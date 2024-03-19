const router = require('express').Router();
const path = require('path')
const fs = require("fs")

router.get('/sitemap/:category', (req, res) => {
  if (req.params.category === "sitemapBreakingnews.xml") {
    const filePath = path.join(__dirname, '../Xml/Breakingnewsrss-Feed.xml'); // Update the file path accordingly

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
 else if (req.params.category === "sitemapmatchpreview.xml") {
    const filePath = path.join(__dirname, '../Xml/sitemapmatchpreview.xml'); // Update the file path accordingly

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

  else if (req.params.category === "sitemapteamguide.xml") {
    const filePath = path.join(__dirname, '../Xml/sitemapteamguide.xml'); // Update the file path accordingly

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

  else if (req.params.category === "sitemapcheatsheet.xml") {
    const filePath = path.join(__dirname, '../Xml/sitemapcheatsheet.xml'); // Update the file path accordingly

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

  else if (req.params.category === "sitemapteam.xml") {
    const filePath = path.join(__dirname, '../Xml/sitemapteam.xml'); // Update the file path accordingly

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
  else {
    res.status(200).json("page Not Found");
  }

});


module.exports = router;