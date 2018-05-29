function quicksort(array) {
    let smaller = [],
        greater = [],
        pivot = array[0];

    if (array.length < 2) {
        return array;
    }

    for (let i = 1; i < array.length; i++) {
        if (array[i] < pivot) {
            smaller.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }

    return [].concat(quicksort(smaller), [pivot], quicksort(greater));

}

let unsorted = Array.from({length: 40}, () => Math.floor(Math.random() * 40));
let sorted = quicksort(unsorted);

console.log(unsorted);
console.log(sorted);