function quicksort (arr) {
    if(arr.length <=1){
        return arr;
    }
    
    const mid = arr[arr.length-1];
    const left =[];
    const right=[];

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<mid){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quicksort(left),mid,...quicksort(right)];
    }

    const arr1 =[1,3,340,54,12,35];
    const sortedArr1 = quicksort(arr1);
    console.log (sortedArr1);

    const arr2=["cat","dog","elephant","bee","ant"];
    const sortedArr2 = quicksort(arr2);
    console.log (sortedArr2);