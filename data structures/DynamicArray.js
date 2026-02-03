class DynamicArray {
    #arr;
    #size;
    #capacity;
    #GROWTH = 2;

    constructor(cap = 0, fill = 0) {
        if(cap < 0) throw new RangeError('Not valid capacity');
        this.#size = 0;
        this.#capacity  = cap;
        this.#arr = new Array(this.#size).fill(fill);
    }

    /* ================= Capacity ================= */

    size() {
        return this.#size;
    }

    capacity() {
        return this.#capacity;
    }

    empty() {
        return this.#size === 0;
    }

    reserve(n) {
        if(n <= this.#capacity) return;
        
        //   - allocate new buffer of size n
        //   - copy first "size" elements
        //   - replace old buffer
        //   - update capacity
    }

    shrinkToFit() {
        // Must reallocate buffer so that:
        // capacity === size
        // Only valid elements are kept
    }

    clear() {
        // Must set size = 0
        // Capacity must remain unchanged
    }

    /* ================= Element Access ================= */

    at(i) {
        // If i < 0 or i >= size → throw Error
        // Otherwise return element at index i
    }

    set(i, value) {
        // If index invalid → throw Error
        // If value is not a number → throw Error
        // Otherwise overwrite element at index i
    }

    front() {
        // Must return first element
        // Equivalent to at(0)
    }

    back() {
        // Must return last element
        // Equivalent to at(size - 1)
    }

    toArray() {
        // Must return a normal JS array
        // Must include only elements [0 ... size-1]
        // Must NOT include unused capacity
    }

    /* ================= Modifiers ================= */

    pushBack(value) {
        // If value is not number → throw Error
        // If size === capacity:
        //   - grow capacity (usually capacity * 2)
        // Append value at the end
        // Increase size by 1
    }

    popBack() {
        // If empty → throw Error
        // Remove last element
        // Decrease size by 1
        // Return removed value
    }

    insert(pos, value) {
        // If pos < 0 or pos > size → throw Error
        // If buffer full → resize
        // Shift elements right from pos
        // Insert value at pos
        // Increase size
    }

    erase(pos) {
        // If pos invalid → throw Error
        // Shift elements left from pos
        // Decrease size
    }

    #resize(n) {
        // Must allocate new buffer of size n
        // Copy min(size, n) elements
        // If n < size → truncate size
        // Update capacity
    }

    swap(i, j) {
        // If any index invalid → throw Error
        // Swap values at indices i and j
    }

    /* ================= Iteration ================= */

    [Symbol.iterator]() {
        // Must allow:
        // for (let x of arr)
        // Should iterate from index 0 to size-1
    }

    values() {
        // Must return iterator over values
        // Same behavior as Symbol.iterator
    }

    keys() {
        // Must return iterator over indices
        // Values: 0, 1, 2, ... size-1
    }

    entries() {
        // Must return iterator over [index, value] pairs
        // Example: [0, 10], [1, 20], ...
    }

    /* ================= High Order ================= */

    forEach(fn) {
        // Must call fn(value, index, thisArray)
        // For each element from 0 to size-1
        // Must not modify the array
    }

    map(fn) {
        // Must return new DynamicArray
        // Each element = fn(oldValue, index, thisArray)
    }

    filter(fn) {
        // Must return new DynamicArray
        // Only elements where fn(...) === true
    }

    reduce(fn, initial) {
        // If empty and initial undefined → throw Error
        // If initial exists:
        //   acc = initial, start from index 0
        // Else:
        //   acc = first element, start from index 1
        // Must return accumulated value
    }

    some(fn) {
        // Must return true if any element satisfies fn
        // Otherwise false
    }

    every(fn) {
        // Must return true only if all elements satisfy fn
    }

    find(fn) {
        // Must return first value where fn(...) === true
        // If not found → return undefined
    }

    findIndex(fn) {
        // Must return index of first match
        // If not found → return -1
    }

    includes(value) {
        // Must return true if value exists in array
        // Otherwise false
    }

    /* ================= Extensions ================= */

    reverse() {
        // Must reverse elements in-place
        // No extra array allowed
    }

    sort(compareFn) {
        // Must sort array in-place
        // Must NOT use built-in Array.sort
        // You must implement your own algorithm
    }

    clone() {
        // Must return deep copy of this DynamicArray
    }

    equals(other) {
        // Must return true if:
        // same size AND all elements equal
    }
}