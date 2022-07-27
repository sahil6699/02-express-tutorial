const express = require("express");
const { products } = require("./data");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Home Page</h1><a href ='/api/products'>products</a>");
});

//for route api/product and only printing the name , id , image and not description
app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.send(newProducts);
});

//let say i want to print about the with id 1
// req.params give the output of whatever is given after the route
app.get("/api/products/:productId", (req, res) => {
  // console.log(req);
  // console.log(req.params);
  /* req.params
This property is an object containing properties mapped to the named route “parameters”.
For example, if you have the route /user/:name, then the “name” property is available as req.params.name. 
This object defaults to {}. */

  const { productId } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (!singleProduct) {
    return res.status(404).json("Product doesn't exist");
  }

  return res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("server is listening on port ", 5000);
});
