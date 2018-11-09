var arr = [[1,2,3],[4,5,6],[7,8,9]];
var sum1 = 0;
var sum2 = 0;
for(var i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[arr.length-1-i][i];
   
}
console.log(sum1, sum2);
console.log("Difference:", + sum1 - sum2);