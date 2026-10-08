// A stand-in for a database, so the app runs with no service attached.
const orders = new Map([["1", { id: "1", total: 4200, email: "a@example.com" }]]);

module.exports = {
  orders: {
    list: () => [...orders.values()],
    delete: (id) => orders.delete(id),
    update: (id, patch) => orders.set(id, { ...orders.get(id), ...patch }),
  },
};
