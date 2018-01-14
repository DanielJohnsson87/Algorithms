class BinarySearch {
    constructor(list) {
        this.data = list;
        this.low = 0;
        this.high = this.data.length - 1;
    }

    get(number) {
        let guess, mid,
            iterations = 0;

        while (this.low <= this.high) {
            mid = Math.floor((this.low + this.high) / 2);
            guess = this.data[mid];

            if (guess === number) {
                return mid;
            } else if (guess < number) {
                this.low = mid + 1;
            } else if (guess > number) {
                this.high = mid - 1;
            }
        }

        return -1;
    }
}

let list = Array.from(Array(100000).keys()),
    search = new BinarySearch(list);

console.log(search.get(2));
