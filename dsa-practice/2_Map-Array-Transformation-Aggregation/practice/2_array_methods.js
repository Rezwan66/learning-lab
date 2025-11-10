/* We did export const ... for rawApiData, hence we used {}. If we used export default rawApiData, then we could directly use:
import rawApiData from './0_raw_api_data.js'; */
import { rawApiData } from './0_raw_api_data.js';

// console.log(rawApiData);
// const output = rawApiData.map(item => ({ name: item.productName }));

//? Output => [{ name: "Phone" }, { name: "Smart Watch" }]

//* Process
//TODO Filter => Electronics
//TODO Sort by => Rating
//TODO Slice => first 3 (top 3)
//TODO Map => transform object shape to { name : "Name"}

const topElectronicProducts = rawApiData
  .filter(item => item.category === 'Electronics')
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 3)
  .map(item => ({ name: item.productName }));

console.log(topElectronicProducts);
