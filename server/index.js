const next = require("next");
const express = require("express");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const fs = require("fs");
const path = require("path");
const filePath = "./data.json";
const moviesData = require(filePath);

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  // we are handling all incoming requests
  server.get("/api/v1/movies", (req, res) => {
    return res.json(moviesData);
  });

  server.get("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;

    const movie = moviesData.find(movie => movie.id === id);
    return res.json(movie);
  });

  server.post("/api/v1/movies", (req, res) => {
    // TODO: Add ID
    const movie = req.body;
    moviesData.push(movie);

    const pathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(moviesData, null, 2);

    fs.writeFile(pathToFile, stringifiedData, err => {
      if (err) {
        return res.status(422).send(err);
      }
      return res.json("Movie has been successfully added!");
    });
  });

  server.delete("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const movieIndex = moviesData.find(movie => movie.id === id);
    moviesData.splice(movieIndex, 1);

    const pathToFile = path.join(__dirname, filePath);
    const stringifiedData = JSON.stringify(moviesData, null, 2);

    fs.writeFile(pathToFile, stringifiedData, err => {
      if (err) {
        return res.status(422).send(err);
      }
      return res.json("Movie has been successfully added!");
    });
  });

  server.get("*", (req, res) => {
    // next.js is dispatching requests and providing relative pages to navigate to
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  server.use(handle).listen(PORT, err => {
    if (err) throw err;
    console.log(">Listening port " + PORT);
  });
});
