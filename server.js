const express = require('express');
const next = require('next');
const cors = require('cors');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
// const generateSitemap = require("./node/cricket-match-predictions")
const app = next({ dev });
const handle = app.getRequestHandler();
// const sitemap = require("./node/sitemap");
const Rss = require("./node/GetRssMatchPriview")

app.prepare()
  .then(() => {
    const server = express();

    // Apply middleware
    server.use(cors());
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    // server.use(sitemap);
    server.use(Rss);

    // Custom API (Rediecrct)
  
    server.get("/breakingnews/", (req, res, next) => {
      // Redirect to '/cricket-breaking-news/' with status code 301
      res.redirect(301, '/cricket-breaking-news/');
    });
    server.get("/icc-cricket-world-cup-2024/", (req, res, next) => {
      // Redirect to '/cricket-breaking-news/' with status code 301
      res.redirect(301, '/icc-t20-world-cup-2024/');
    });
    server.get("/latest-match/", (req, res, next) => {
      // Redirect to '/cricket-breaking-news/' with status code 301
      res.redirect(301, '/cricket-match-predictions/');
    });
    server.get("/Cricket-prediction/", (req, res, next) => {
      // Redirect to '/cricket-breaking-news/' with status code 301
      res.redirect(301, '/cricket-match-predictions/');
    });
    server.get("/Cricket-prediction/:id/:name", (req, res, next) => {
      // Function to check if a value is a number or a string
      function test(g) {
        var number = g;
        return (number == Number(number)) ? "number" : "string";
      }

      // Check if the id parameter is a number
      if (test(req.params.id) === "number") {
        // Redirect to '/cricket-match-predictions/:id' with status code 301
        res.redirect(301, `/cricket-match-predictions/${req.params.id}`);
      }
      else {
        if (test(req.params.name) === "number") {
          // Redirect to '/cricket-match-predictions/:id' with status code 301
          res.redirect(301, `/cricket-match-predictions/${req.params.name}`);
        }

      }
    });
    server.get("/cricket-prediction/:id/:name", (req, res, next) => {
      // Function to check if a value is a number or a string
      function test(g) {
        var number = g;
        return (number == Number(number)) ? "number" : "string";
      }

      // Check if the id parameter is a number
      if (test(req.params.id) === "number") {
        // Redirect to '/cricket-match-predictions/:id' with status code 301
        res.redirect(301, `/cricket-match-predictions/${req.params.id}`);
      }
      else {
        if (test(req.params.name) === "number") {
          // Redirect to '/cricket-match-predictions/:id' with status code 301
          res.redirect(301, `/cricket-match-predictions/${req.params.name}`);
        }

      }
    });
    server.get("/cricket-predictions/:priview/:title/:slug/:id", (req, res, next) => {
      // Function to check if a value is a number or a string
      function test(g) {
        var number = g;
        return (number == Number(number)) ? "number" : "string";
      }

      // Check if the id parameter is a number
      if (test(req.params.id) === "number") {
        // Redirect to '/cricket-match-predictions/:id' with status code 301
        res.redirect(301, `/cricket-match-predictions/${req.params.id}`);
      }
      else {
        if (test(req.params.name) === "number") {
          // Redirect to '/cricket-match-predictions/:id' with status code 301
          res.redirect(301, `/cricket-match-predictions/${req.params.name}`);
        }

      }
    });
    server.get("/latest-match/cricket-predictions/:priview/:title/:slug/:id", (req, res, next) => {
      // Function to check if a value is a number or a string
      function test(g) {
        var number = g;
        return (number == Number(number)) ? "number" : "string";
      }

      // Check if the id parameter is a number
      if (test(req.params.id) === "number") {
        // Redirect to '/cricket-match-predictions/:id' with status code 301
        res.redirect(301, `/cricket-match-predictions/${req.params.id}`);
      }
      else {
        if (test(req.params.name) === "number") {
          // Redirect to '/cricket-match-predictions/:id' with status code 301
          res.redirect(301, `/cricket-match-predictions/${req.params.name}`);
        }

      }
    });
    server.get("/cricket-breakingnews/:id/:name", (req, res, next) => {
      // Function to check if a value is a number or a string
      function test(g) {
        var number = g;
        return (number == Number(number)) ? "number" : "string";
      }

      // Check if the id parameter is a number
      if (test(req.params.id) === "number") {
        // Redirect to '/cricket-match-predictions/:id' with status code 301
        res.redirect(301, `/cricket-breaking-news/${req.params.name}/${req.params.id}`);
      }
      else {
        if (test(req.params.name) === "number") {
          // Redirect to '/cricket-match-predictions/:id' with status code 301
          res.redirect(301, `/cricket-breaking-news/${req.params.id}/${req.params.name}`);
        }

      }
    });
    server.get("/Ipl_2023/:id/:name", (req, res, next) => {
      // Function to check if a value is a number or a string
      function test(g) {
        var number = g;
        return (number == Number(number)) ? "number" : "string";
      }

      // Check if the id parameter is a number
      if (test(req.params.id) === "number") {
        // Redirect to '/cricket-match-predictions/:id' with status code 301
        res.redirect(301, `/ipl-2023/${req.params.name}/${req.params.id}`);
      }
      else {
        if (test(req.params.name) === "number") {
          // Redirect to '/cricket-match-predictions/:id' with status code 301
          res.redirect(301, `/ipl-2023/${req.params.id}/${req.params.name}`);
        }

      }
    });
    // server.get("/Latest-Video/", (req, res, next) => {
    //   res.redirect(301, '/latest-video');
    // });  
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
    server. get("/About-us/", (req, res, next) => {
      console.log("dsdsk")
      // Redirect to '/cricket-breaking-news/' with status code 301
      res.redirect(301, '/about-us');
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
