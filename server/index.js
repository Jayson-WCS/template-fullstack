const express = require("express");
const app = express();
const serv = 5005;

app.get("/create-your-api", (req,res) => {
  res.json({"message": ["Let's", "Build", "From", "Scratch"]})
});

app.listen(5005, () => {
  console.log(`Server listenning on port ${serv} 👀`)
})