const express = require("express");
const app = express();
const path = require("path");

// const leaderList = [
//   { name: "Anna", id: "a0" },
//   { name: "Ben", id: "b0" },
//   { name: "Clara", id: "c0" },
//   { name: "David", id: "d0" },
// ];

// app.get("/api/leaders", (req, res) => {
//   return res.status(200).send(leaderList);
// });

if (process.env.NODE_ENV === "production") {
  app.use("/build", express.static(path.join(__dirname, "../build")));
  // serve index.html on the route '/'
  app.get("/", (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, "../index.html"));
  });
}
// statically serve everything in the build folder on the route '/build'

app.listen(3000, () => console.log("I am listening on port 3000")); //listens on port 3000 -> http://localhost:3000/
