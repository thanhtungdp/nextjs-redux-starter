const express = require("express");
const next = require("next");
const config = require("./config");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/movie/:id", (req, res) => {
      const actualPage = "/movie";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(config.PORT_SERVER, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:" + config.PORT_SERVER);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
