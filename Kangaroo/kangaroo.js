function samelocation(x1,v1,x2,v2){
    if(v1<v2) console.log("NO");
    if(x1 < x2 && v1 > v2){
        const xDiff = Math.abs(x1 - x2);
        const vDiff = Math.abs(v1 - v2);
        if(xDiff % vDiff == 0) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
}
samelocation(0,3,4,2);