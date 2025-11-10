// selectionSort([5, 3, 8, 4, 2]);

const selectionSort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    //array.length - 1 to optimize so the last element is not checked
    console.log('State of array:', array);
    let minIndex = i;
    // console.log('Min Index:', minIndex);

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      //   console.log('Value', array[minIndex], 'index', minIndex);
    }

    if (minIndex !== i) {
      //   let temp = array[i];
      //   array[i] = array[minIndex];
      //   array[minIndex] = temp;

      [array[i], array[minIndex]] = [array[minIndex], array[i]]; // ES6 swapping
    }
    console.log(`Array after pass ${i + 1}`, array);
  }
};

selectionSort([5, 3, 8, 4, 2]);
