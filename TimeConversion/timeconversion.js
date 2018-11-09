var time = "12:05:45AM";
function convert(str){
const arr = str.split(":");
//var ampm = arr[2].indexOf;
//console.log(arr);
var len = arr.length;
var ampm = arr[len-1];
var swap = ampm.substring(2);
//console.log(swap);
if (swap == "am" || swap == "AM" && arr[0] < "12" || arr[0] > "12") {
   // console.log(arr[0]);
    console.log(arr[0]+":"+arr[1]+":"+arr[2]);
} else if(arr[0] == "12" && swap == "am" || swap == "AM") {
    var am12 = "00";
      am12+=":"+arr[1]+":"+arr[2];
      console.log(am12);
  } else {
        var hour = Number(arr[0]);
        hour+=12;
        var twentyfour = hour + ":" + arr[1] + ":" + arr[2];
        console.log(twentyfour);
    }
}
convert(time);