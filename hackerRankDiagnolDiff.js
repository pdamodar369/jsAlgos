var diagAbsArry = (arr, n) => {
    var abs1=0, abs2=0;
    var res = 0;
    for(let l=0; l<n; l++) {
        abs1 += arr[l][l]
    }
    for(let s=n-1; s>=0; s--) {
        abs2 += arr[(n-1)-s][s];
    }
    return (Math.abs(abs2-abs1));
}

arr = [[1, 2], [4, 8]]
var res = diagAbsArry(arr, 2);
console.log(res);