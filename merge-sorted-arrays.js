var a1 = [1, 5, 9, 10, 12];
var a2 = [2, 4, 6, 7,];

function merge(a, b){
  var resultArr = [];
    while (a.length && b.length){
        if(a[0] <= b[0]){
          resultArr.push(a.shift());
        } else {
          resultArr.push(b.shift());
        }
    }
    if(a.length){
      resultArr = resultArr.concat(a);
    } else if (b.length){
      resultArr = resultArr.concat(b);
  }
    return resultArr;
}
console.log(merge(a1, a2));