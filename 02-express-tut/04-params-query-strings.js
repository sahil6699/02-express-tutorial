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

app.get("/api/products/v1/query", (req, res) => {
  // console.log(req.query);
  const { search, limit } = req.query;
  console.log(search, limit, req.query);
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    // res.status(200).send("No products matched your search");
    return res.status(200).json({ success: true, data: [] });
  }

  res.status(200).json(sortedProducts);
  // res.send(products);
});

app.get("/api/products/:productId/reviews/:reviewId", (req, res) => {
  console.log(req.params);
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("server is listening on port ", 5000);
});
