const express = require('express');
const next = require('next');
const cors = require('cors');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const fs = require("fs")
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();
    server.use(express.static(path.join(__dirname, 'public')));
    // Apply middleware
    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

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
    // Default route handler for Next.js
    // server.get("/rssp", (req, res)=>{
    //   console.log("dfhak")
    //   const feed = new Feed({
    //     title: 'My Next.js Blog',
    //     description: 'A simple blog built with Next.js',
    //     link: 'https://example.com',
    //     language: 'en',
    //   });

    //   // Add items to the feed
    //   feed.addItem({
    //     title: 'First Post',
    //     description: 'This is my first post.',
    //     link: 'https://example.com/posts/first-post',
    //     date: new Date(),
    //   });

    //   // Generate XML
    //   const rss = feed.rss2();

    //   res.setHeader('Content-Type', 'application/xml');
    //   res.status(200).send(rss);
    // })
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
