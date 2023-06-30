function compareArray(arr1,arr2){
    if(arr1.length!=arr2.length){
        return false;
    }
    else{
        for(let i=0; i<arr1.length; i++){
            if(arr1[i] = arr2[i]){
                return false;
            }
        }
        return true;
    }
}

let arr1 = [1,2,3,4];
let arr2 = [2,3,4,1,5];
let result = compareArray(arr1,arr2);
if(result){
    document.write("Both are equal");
}else{
    document.write("Both are not equal");
}