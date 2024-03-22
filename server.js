const express = require('express');
const next = require('next');
const cors = require('cors');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const generateSitemap = require("./node/generateSitemap")
const app = next({ dev });
const handle = app.getRequestHandler();
const sitemap = require("./node/sitemap");
const Rss =  require("./node/GetRssMatchPriview")

app.prepare()
  .then(() => {
    const server = express();

    // Apply middleware
    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(sitemap);
    server.use(Rss);
    // cron.schedule("*/1 * * * *  ", async function () {
    //   if (run === 0) {
    //     run = 1
      //  generateSitemap()
    
    //     console.log("running a task every 1 seconds");
    //   }

    // });



    // server.get('/open-xml', (req, res) => {
    //   const filePath = path.join(__dirname, '/public/txt.xml'); // Update the file path accordingly

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
    // });


    // Custom API (if needed)
    server.get('/FilterbySubCategory/:id', (req, res) => {
      async function l() {
        try {
          // Make an HTTP request to fetch data from source 1
          const [topNewsRes] = await Promise.all([
            fetch(`https://g11fantasy.com/NewsSection/FilterbySubCategory/${req.params.id}`),
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
      l()
    });
    server.get('/Filterbycategory/:id', (req, res) => {
      async function l() {
        try {
          // Make an HTTP request to fetch data from source 1
          const [topNewsRes] = await Promise.all([
            fetch(`https://g11fantasy.com/NewsSection/FilterbyCategory/${req.params.id}`),
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
      l()
    }
    );



    server.get('*', (req, res) => {
      return handle(req, res);
    });

    // Error handling middleware
    server.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send('Something went wrong!');
    });

    server.listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
