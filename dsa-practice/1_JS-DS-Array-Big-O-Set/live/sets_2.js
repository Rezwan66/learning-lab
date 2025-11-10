const mezba = { userName: 'Mezba' };
const mizan = { userName: 'Mizan' };
const tanmoy = { userName: 'Tanmoy' };
const set = new Set();
set.add(mizan);
set.add(mezba);
set.add(tanmoy);
set.add(mizan);

console.log(set); // Unique list of users
