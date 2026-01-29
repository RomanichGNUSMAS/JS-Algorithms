function mergeSort(arr){
    if(arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    let left = arr.slice(0,mid);
    let right = arr.slice(mid);
    let sorted_left = mergeSort(left);
    let sorted_right = mergeSort(right);

    return (function (left,right) {
        const res = [];
        let i = 0,j = 0;
        const size1 = left.length, size2 = right.length;
        while(i < size1 && j < size2){
            if(left[i] <= right[j]){
                res.push(left[i++]);
            } else res.push(right[j++]);
        }
        return res.concat(left.slice(i)).concat(right.slice(j));
    })(sorted_left,sorted_right)
}

const arr = [1,2,4,2,1,5,5,6,4,3];
console.log(mergeSort(arr));