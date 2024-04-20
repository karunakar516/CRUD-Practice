const express = require('express')
const mongoose = require('mongoose');
const product = require("./models/product.model.js");
const productRoute=require("./routes/product.route.js")
const app = express()
const port = 3000

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//routes
app.use("/api/products",productRoute);

app.get('/', (req, res) => {
    res.send('Hello World!')
});

mongoose.connect('mongodb+srv://karunakarbalivada786:21L31A0516@cluster0.u0i84qf.mongodb.net/CRUD-API?retryWrites=true&w=majority&appName=Cluster0')
  .then(() =>{
    console.log("Connected to DB");
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
      })
  })
  .catch(()=> console.log("coonection failed"))



