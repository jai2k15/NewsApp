const e = require('express');
const express = require('express')
const app = express()
const path = require("path");

const port = 3000

app.get('/', (req, res) => {
//   res.send('Hello World this si live refresh!dfg ')
    // console.log(path.join(__dirname, 'public'));
    // return res.sendFile('public/index.html', );
    // res.sendFile("index.html", { root: __dirname})
    res.sendFile(path.join(__dirname,"/index.html"))

})
app.use(express.static('public'));


app.listen(port, () => {
  console.log(`Example app listening on port ${port} http://localhost:${port}?q=all&page=1`);
})