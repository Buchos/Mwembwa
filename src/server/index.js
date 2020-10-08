/* becodeorg/mwenbwa
 *
 * /src/server/index.js - Server entry point
 *
 * coded by leny@BeCode
 * started at 18/05/2020
 */

import express from "express";
import path from "path";
import MongoClient from "mongodb";

const { APP_PORT } = process.env;

// Connection URL
const url = "mongodb://dev:dev@mongo:27017";

// Use connect method to connect to the server
MongoClient.connect(url, (err, db) => {
    console.log(err);
    if (err !== null) {
        throw new Error(err.message);
    }
    console.log("Connected successfully to server");

    const app = express();

    app.use(express.static(path.resolve(__dirname, "../../bin/client")));

    app.get("/hello", (req, res) => {
        console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
        res.send(db);
    });

    app.get(`/:name`, (req, res) => {
        res.send(`Your name is ` + req.params.name + `\n`);
    });

    app.listen(APP_PORT, () =>
        console.log(`🚀 Server is listening on port ${APP_PORT}.`),
    );
});
