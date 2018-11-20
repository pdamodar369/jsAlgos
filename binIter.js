var binIter = x => {
    var res=[];
    var temp="";
    while(x>=1){
        res.unshift(Math.ceil(x%2));
        x /= 2;
    }
    for(var s=0;s<res.length;s++){
        temp += res[s];
    }
    return temp;
}

var res = binIter(4);
console.log(res);