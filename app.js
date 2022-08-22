const express = require("express");
const dns = require('dns');
const app = express();
const port = 7000;
app.use(express.json());


app.get("/getmeip", (req, res) => {
    res.send("<h1>Welcome</h1>")
})

app.get("/", (req, res) => {
    res.send("<h1>Welcome to app</h1>")
})

app.post("/getmeip", (req, res) => {

    try {
        const { website_name } = req.body;

        dns.lookup(website_name, function onLookup(err, address) {
            if (err) {
                res.status(400).send("Bad Request");
            }
            console.log('address:', address);
            res.send(address);
        });
    } catch (error) {
        res.status(400).send("Internal Server Error")
    }

})

app.listen(port, () => {
    console.log(`Server is running at port ${7000}`);
})