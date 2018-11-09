
function StairCase(count) {
    for (let i = 1; i <= count; i++) {
          console.log((" ").repeat(count-i).concat(('#').repeat(i)));
    } 
  }
  
  StairCase(6);