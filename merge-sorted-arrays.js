var a1 = [1, 5, 9, 10, 12];
var a2 = [2, 4, 6, 7,];

function merge(a, b){
  var resultArr = [];
  for(var i = 0; i < a.length; i++){
    for (var j = 0; j < b.length; j++){
      while (a.length && b.length){
        if(b[j] <= a[i]){
          resultArr.push(b.shift());
        } else {
          resultArr.push(a.shift());
        }
      }
    }
    resultArr.push(a[i]);
  }
  return resultArr;
}
console.log(merge(a1, a2));