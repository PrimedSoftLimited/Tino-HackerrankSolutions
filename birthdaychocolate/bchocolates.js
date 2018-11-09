function solve(n, arr, d, m){
    var count=0;
    for(let i=0;i<arr.length;i++){
        if((i+m-1)==arr.length) {
            break;
        } else {
            var sum=0;
            for(let j=0;j<m;j++){
                sum+=arr[i+j];
            }
            if(sum==d){
                count++;
            }
        }
    }
    console.log(count);
}
solve(5,[1,2,1,3,2],3,2);