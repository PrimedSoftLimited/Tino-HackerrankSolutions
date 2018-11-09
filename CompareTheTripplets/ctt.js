function bound_error(args) {
    if (args.length !== 6) return true;
    for (var i = 0; i < args.length; i++) {
        if (isNaN(args[i])) return true;
        if (args[i] < 0 || args[i] > 100) return true;
    }
    return false;
}

function solve(a0, a1, a2, b0, b1, b2) {
    if (bound_error(arguments)) return "Input Error";
    var a = 0,
        b = 0;
    if (a0 > b0) a++;
    if (a1 > b1) a++;
    if (a2 > b2) a++;
    if (b0 > a0) b++;
    if (b1 > a1) b++;
    if (b2 > a2) b++;
    console.log(a, b);
    return 0;
}
solve(11, 12, 4, 3, 12, 5);