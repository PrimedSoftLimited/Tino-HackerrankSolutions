function plusminus(arr){  
  var pos = 0;
  var neg = 0;
  var zero = 0;
  var length = arr.length;
  for( let i = 0; i < arr.length; i++ ){
    let value = arr[i];
    if( value > 0 ){
      pos += 1;
    } else if( value < 0 ) {
      neg += 1;
    } else {
      zero += 1;
    }
  }
  var FractionOfPostive = pos / length;
  var FractionOfNegative = neg / length;
  var FractionOfZero = zero / length;
    console.log("Positive:", + FractionOfPostive);
    console.log("Negative:", + FractionOfNegative);
    console.log("Zero:", + FractionOfZero);
    //console.log(arr.length);
  };
  console.log(plusminus([-4,3,-9,0,4,1]));