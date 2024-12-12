const express = require('express');
const app = express();
app.get('/',(req,res) => {
res.send("pushapa raj not a fire, pushpa is a wildlife");
});
app.listen(3111,() => {
console.log("Server is running on port 3111")
});