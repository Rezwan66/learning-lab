const customers = [
  { id: 1, name: 'Alice', country: 'Germany' },
  { id: 2, name: 'Bob', country: 'France' },
  { id: 3, name: 'Charlie', country: 'Germany' },
];

const orders = [
  { id: 101, customerId: 1, item: 'Laptop', total: 1200 },
  { id: 102, customerId: 3, item: 'Chair', total: 150 },
  { id: 103, customerId: 1, item: 'Mouse', total: 25 },
  { id: 104, customerId: 2, item: 'Keyboard', total: 80 },
  { id: 105, customerId: 3, item: 'Desk', total: 300 },
];

const ordersByCustomer = orders.reduce((table, order) => {
  const { customerId } = order;
  if (!table[customerId]) {
    table[customerId] = [];
  }
  table[customerId].push(order);
  return table;
}, {});

// console.log(ordersByCustomer);

const customerWithOrder = customers.map(customer => {
  const orderByCustomerId = ordersByCustomer[customer.id];
  return {
    ...customer,
    orders: orderByCustomerId || [],
    totalSpent: orderByCustomerId.reduce(
      (total, order) => (total += order.total),
      0
    ),
  };
});
console.dir(customerWithOrder, { depth: null });
