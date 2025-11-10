//* Binning (Resampling) Time Series Data

// Scenario: You have a long list of user click events.
// You need to "bin" these events into 30-minute intervals and count them to see engagement over time.

//? Input
const events = [
  { timestamp: '2025-10-22T10:01:00Z', type: 'click' },
  { timestamp: '2025-10-22T10:05:00Z', type: 'scroll' },
  { timestamp: '2025-10-22T10:14:00Z', type: 'click' },
  { timestamp: '2025-10-22T10:31:00Z', type: 'click' },
  { timestamp: '2025-10-22T10:45:00Z', type: 'scroll' },
  { timestamp: '2025-10-22T11:02:00Z', type: 'click' },
];

//? Output
// binnedEvents = {
//   "2025-10-22T10:00:00.000Z": { "total": 3 },
//   "2025-10-22T10:30:00.000Z": { "total": 2 },
//   "2025-10-22T11:00:00.000Z": { "total": 1 }
// }

const INTERVAL = 30 * 60 * 1000; // 30 mins in ms

const getBinningTimestamp = timestamp => {
  const date = new Date(timestamp);
  console.log('Before flooring:', date);
  const flooredDate = Math.floor(date.getTime() / INTERVAL) * INTERVAL;

  return new Date(flooredDate).toISOString();
};

// console.log(getBinningTimestamp('2025-10-22T10:01:00Z'));
// console.log(getBinningTimestamp('2025-10-22T10:05:00Z'));
// console.log(getBinningTimestamp('2025-10-22T10:14:00Z'));

const binnedEvents = events.reduce((table, event) => {
  const { timestamp, type } = event;
  const bin = getBinningTimestamp(timestamp);
  if (!table[bin]) {
    table[bin] = { total: 0, types: [] };
  }
  table[bin].total += 1;
  table[bin].types.push(type);

  return table;
}, {});

console.log(binnedEvents);
