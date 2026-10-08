const express = require("express");
const orders = require("./routes/orders");

const app = express();
app.use(express.json());

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use((req, res, next) => {
  const origin = req.headers["origin"];
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  }
  next();
});

app.use("/api", orders);
app.get("/", (req, res) => res.send("<h1>skeamo-test-express</h1><p>Try /api/orders</p>"));

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => console.log("listening on " + port));
