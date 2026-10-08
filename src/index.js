const express = require("express");
const orders = require("./routes/orders");

const app = express();
app.use(express.json());

// FAULT: any website may call this API with the browser's credentials.
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.use("/api", orders);
app.get("/", (req, res) => res.send("<h1>skeamo-test-express</h1><p>Try /api/orders</p>"));

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => console.log("listening on " + port));
