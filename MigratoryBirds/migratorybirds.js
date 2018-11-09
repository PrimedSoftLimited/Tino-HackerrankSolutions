function mb(arr){
    var arr2 = arr.map(Number);
    for(let birdtype of arr2){
        arr[birdtype]++;
    }
    console.log(arr.indexOf(Math.max(...arr)));
}
mb([2,2,2,2,1,4,4,4]);