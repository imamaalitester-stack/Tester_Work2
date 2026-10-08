const express = require("express");
const db = require("../db");

const router = express.Router();

const API_AUTH_TOKEN = process.env.API_AUTH_TOKEN;

if (!API_AUTH_TOKEN) {
  throw new Error("Missing required environment variable: API_AUTH_TOKEN");
}

function requireAuth(req, res, next) {
  const header = req.headers["authorization"] || "";
  const [scheme, token] = header.split(" ");

  if (scheme !== "Bearer" || token !== API_AUTH_TOKEN) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
}

router.get("/orders", (req, res) => {
  res.json(db.orders.list());
});

router.post("/orders/:id/delete", requireAuth, (req, res) => {
  db.orders.delete(req.params.id);
  res.json({ ok: true });
});

router.put("/orders/:id", requireAuth, (req, res) => {
  db.orders.update(req.params.id, req.body);
  res.json({ ok: true });
});

module.exports = router;
