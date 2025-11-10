//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: 'Electronics', item: 'Laptop', price: 1200, quantity: 1 },
  { category: 'Books', item: 'JS Basics', price: 30, quantity: 2 },
  { category: 'Electronics', item: 'Mouse', price: 25, quantity: 2 },
  { category: 'Home', item: 'Chair', price: 150, quantity: 1 },
  { category: 'Books', item: 'React Deep Dive', price: 50, quantity: 1 },
  { category: 'Electronics', item: 'Keyboard', price: 80, quantity: 1 },
];

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };

// const aggregate = sales.reduce((table, sale) => {
//     for (let item of table){

//     }
//   if (table[category] === sale.category) {
//     table.category.totalRevenue += sale.price;
//     table.category.itemCount += sale.quantity;
//   } else {
//     table.category.totalRevenue = sale.price;
//     table.category.itemCount = sale.quantity;
//   }
//   return table;
// }, {});

// console.log(aggregate);

//TODO Init empty obj
//TODO Init obj category
//TODO calculate rev and quantity

const totalRevenueBySales = sales.reduce((table, sale) => {
  const { category, price, quantity } = sale;
  if (!table[category]) {
    table[category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }

  table[category].totalRevenue += price * quantity;
  table[category].itemCount += quantity;

  return table;
}, {});

console.log(totalRevenueBySales);
