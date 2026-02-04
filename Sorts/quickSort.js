function partition(arr,l,r,compareFn){
    const pivot = arr[l];
    
    let [i,j] = [l + 1,r];
    while(i <= j){
        while(compareFn(arr[i],pivot) <= 0) i++;
        while(compareFn(arr[j],pivot) > 0) j--;
        if(i < j) {
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
            j--;
        }
    }
    [arr[l],arr[j]] = [arr[j],arr[l]];
    return j;
}

function quickSort(arr,l = 0, r = arr.length - 1,compareFn){
    if(l >= r) return;
    compareFn = typeof compareFn === 'function' 
        ? compareFn
        : (a,b) => a - b;
    const index = partition(arr,l,r,compareFn);
    quickSort(arr,l,index - 1,compareFn);
    quickSort(arr,index + 1,r,compareFn);
}

const arr = [1,4,2,3,6,5,3];
quickSort(arr,(a,b) =>  a - b);
console.log(arr);



module.exports = quickSort;