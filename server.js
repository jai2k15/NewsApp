const e = require('express');
const express = require('express')
const app = express()
const path = require("path");
const axios = require("axios");

const port = 8080

app.get('/', (req, res) => {
//   res.send('Hello World this si live refresh!dfg ')
    // console.log(path.join(__dirname, 'public'));
    // return res.sendFile('public/index.html', );
    // res.sendFile("index.html", { root: __dirname})
    res.sendFile(path.join(__dirname,"/index.html"))

})
app.get('/api', async(req, res) => {
  console.log(req._parsedUrl.query);
  let url = "https://newsapi.org/v2/everything?"+req._parsedUrl.query;
  let r = await axios(url);
  let a = r.data;
  res.json(a);

})
app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port} http://localhost:${port}?q=all&page=1`);
})
