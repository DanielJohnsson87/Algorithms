/**
 * Sort an array with the merge sort algorithm
 * @param arr
 * @returns {*}
 */
const mergesort = (arr) => {
    if (arr.length === 1) {
        return arr
    }

    const middleIndex = Math.floor(arr.length / 2)
    const left = arr.slice(0, middleIndex)
    const right = arr.slice(middleIndex)

    return merge(
        mergesort(left),
        mergesort(right)
    )
}

/**
 * Merge two arrays and in order
 * @param left {Array}
 * @param right {Array}
 * @returns {Array}
 */
const merge = (left = [], right = []) => {
    let sorted = [];

    while (left.length && right.length) {
        let smallest = null;

        if (left[0] < right[0]) {
            smallest = left.shift()
        } else {
            smallest = right.shift()
        }
        sorted.push(smallest)
    }

    if (left.length > 0) {
        sorted.push(...left)
    }

    if (right.length > 0) {
        sorted.push(...right)
    }

    return sorted
}

const list = [6, 2, 5, 44, 4, 51, 3, 14, 12, 1]

console.log(mergesort(list))