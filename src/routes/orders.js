const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/orders", (req, res) => {
  res.json(db.orders.list());
});

// FAULT: changes data and never asks who is calling.
router.post("/orders/:id/delete", (req, res) => {
  db.orders.delete(req.params.id);
  res.json({ ok: true });
});

// FAULT: also unauthenticated.
router.put("/orders/:id", (req, res) => {
  db.orders.update(req.params.id, req.body);
  res.json({ ok: true });
});

module.exports = router;
