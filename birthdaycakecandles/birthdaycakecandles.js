function bcc(arr) {
    var max = Math.max(...arr)
  var w = arr.filter(x => x === max).length;
  var a = arr.length;
  console.log(a);
  console.log(w);
}
bcc([2,1,3,4,4])