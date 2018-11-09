function studentgrade(arr) {
    return arr.map(function(grade) {
        return (grade >= 38 && grade % 5 >= 3) ? grade + 2 : grade;
    });
   
    //var result = studentgrade([75,67,40,33])
    return g;
}
var result = studentgrade([73,68,37,33]).join("\n");
console.log(result);//.join("\n"));