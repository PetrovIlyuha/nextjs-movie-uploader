const next = require("next");
const express = require("express");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  // we are handling all incoming requests
  server.get("/api/v1/movies", (req, res) => {
    return res.json({ message: "Hello world" });
  });

  server.post("/api/v1/movies", (req, res) => {
    return res.json({ message: "Saving Post" });
  });

  server.patch("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    return res.json({ message: `Updating post with Id ${id}` });
  });

  server.delete("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    return res.json({ message: `Deleting post with Id ${id}` });
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
