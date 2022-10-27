let arr = [1, 3, 5, 9, 21, 26];
let arr2 = [1, 3, 5, 9, 21, 29];
// if (arr.length == arr2.length) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (arr2[j] == arr[i]) {
//                 count++;
//             }
//         }
//     }
//     if (count == arr.length) {
//         console.log('Arrayler bir-birine beraberdir');
//     } else {
//         console.log('Arrayler bir-birine beraber deyil');
//     }
// } else {
//     console.log('Arrayin uzunluqlari beraber deyil');
// }

// with function
let arrayEqual = (array, array2) => {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array2[j] == array[i]) {
                count++;
            }
        }
    }
    if (count == array.length && array.length == array2.length) {
        return true;
    } else {
        return false;
    }
}
console.log(arrayEqual(arr, arr2));
