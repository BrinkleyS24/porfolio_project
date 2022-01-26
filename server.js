///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();

const PORT = 4000

const projects = require("./projects.json");
const about = require("./about.json");
///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

///////////////////////////////
// ROUTES
////////////////////////////////
app.get("/", (req, res) => {
    res.send("Hello World");
});


app.get("/projects", (req, res) => {
    // send projects via JSON
    res.json(projects);
});


app.get("/about", (req, res) => {
    // send projects via JSON
    res.json(about);
});



///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));