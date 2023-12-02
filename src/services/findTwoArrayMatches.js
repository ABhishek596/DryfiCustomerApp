export default (arr1, arr3) => {
    var arr = [];
    let arr2 = []
    arr3.map(ele => arr2.push(ele.id))
    arr1 = arr1.toString().split(',').map(Number);
    arr2 = arr2.toString().split(',').map(Number);
    console.log(arr1);
    // for array1
    for (var i in arr1) {
       if(arr2.indexOf(arr1[i]) !== -1)
       arr.push(arr1[i]);
    }
    console.log(arr);
 
    return arr.sort((x,y) => x-y);
 }
 