const express = require('express');
const next = require('next');
const cors = require('cors');
const FilterbySubCategory =  require('./src/pages/api/nodeapi/FilterbySubCategory')
const Filterbycategory =  require('./src/pages/api/nodeapi/Filterbycategory')
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const Feed =  require("rss")
const fs =  require("fs")
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {
    const server = express();

    // Apply middleware
    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));

    // Custom API (if needed)
    server.get('/FilterbySubCategory/:id',FilterbySubCategory);
    server.get('/Filterbycategory/:id',Filterbycategory);
    // Default route handler for Next.js
    server.get("/rssp", (req, res)=>{
      console.log("dfhak")
      const feed = new Feed({
        title: 'My Next.js Blog',
        description: 'A simple blog built with Next.js',
        link: 'https://example.com',
        language: 'en',
      });
    
      // Add items to the feed
      feed.addItem({
        title: 'First Post',
        description: 'This is my first post.',
        link: 'https://example.com/posts/first-post',
        date: new Date(),
      });
    
      // Generate XML
      const rss = feed.rss2();
    
      res.setHeader('Content-Type', 'application/xml');
      res.status(200).send(rss);
    })
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
