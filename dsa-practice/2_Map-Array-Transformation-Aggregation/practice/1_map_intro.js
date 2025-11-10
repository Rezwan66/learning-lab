// const obj = {
//   nextLevel: { courseId: 'level2' },
//   'Programming Hero': { courseId: 'level1' },
//   true: { enrolled: true },
// };

// console.log(obj.nextLevel);
// console.log(obj['Programming Hero']);
const course1 = { name: 'Progamming Hero' };
const course2 = { name: 'Next Level Web Dev' };
const courses = [
  [course1, 'level1'],
  [course2, 'level2'],
];
// console.log(obj);
const map = new Map(courses);
// map.set(1, 'Programming Hero');
// map.set(course1, { courseId: 'level1' });
// map.set(course2, { courseId: 'level2' });
// map.clear();

// console.log(map.size);
// map.delete(course1);
// console.log(map.has(course1));

// Map also only has one iterable: forEach()

// map.forEach((value, key) => (key.name = 'Shohoz Shorol Simple ' + key.name));

// console.log([...map.keys()]);
// console.log([...map.values()]);

// for (let key of map.keys()) {
//   key.name = 'Shohoz Shorol Simple ' + key.name;
// }
// console.log(map);

console.log(map);
