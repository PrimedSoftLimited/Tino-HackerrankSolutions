function divisiblepairs(n, arr, k){
    var result=0;
    for(let j=0;j<arr.length;j++){
        for(let a=0;a<k;a++){
            if(j!=a && (arr[j]+arr[a])%k==0) {
                result++;
            }
        }
    }
    console.log(result);
}
divisiblepairs(6,[1,3,2,6,1,2],3);