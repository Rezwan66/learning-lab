const sales = [
  { item: 'Laptop', price: 1200, quantity: 1 },
  { item: 'JS Basics', price: 30, quantity: 2 },
  { item: 'Mouse', price: 25, quantity: 2 },
  { item: 'Chair', price: 150, quantity: 1 },
  { item: 'React Deep Dive', price: 50, quantity: 1 },
  { item: 'Keyboard', price: 80, quantity: 1 },
  { item: 'Laptop', price: 3200, quantity: 1 },
];

// Expected output:
// {
//   Laptop: { totalRevenue: 1200, totalQuantity: 1 },
//   'JS Basics': { totalRevenue: 60, totalQuantity: 2 },
//   Mouse: { totalRevenue: 50, totalQuantity: 2 },
//   Chair: { totalRevenue: 150, totalQuantity: 1 },
//   'React Deep Dive': { totalRevenue: 50, totalQuantity: 1 },
//   Keyboard: { totalRevenue: 80, totalQuantity: 1 }
// }

const salesByItem = sales.reduce((table, sale) => {
  const { item, price, quantity } = sale;
  if (!table[item]) {
    table[item] = { totalRevenue: 0, totalQuantity: 0 };
  }

  table[item].totalRevenue += price * quantity;
  table[item].totalQuantity += quantity;

  return table;
}, {});

console.log(salesByItem);
