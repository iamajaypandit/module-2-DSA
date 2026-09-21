// Quick Sorting 
let arr = [5, 4, 6, 7, 1, 2];

function partitionIndex(arr, l, high) {
    let pivot = arr[high];
    let i = l - 1;

    for (let j = l; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

function quickSort(arr, l, r) {
    if (l >= r) return;

    let index = partitionIndex(arr, l, r);
    quickSort(arr, l, index - 1);
    quickSort(arr, index + 1, r);
}

quickSort(arr, 0, arr.length - 1);
console.log(arr);

// time complexity
// best case -> O(n log n)
// worst case -> O(n^2)
// average case -> O(n log n)o(nlogn)
// average case -> o(nlog)

// let arr = [5, 4, 6, 7, 1, 2];

// function partitionIndex(arr, l, high) {
//     let pivot = arr[high];
//     let i = l - 1;

//     for (let j = l; j < high; j++) {
//         if (arr[j] <= pivot) {
//             i++;
//             [arr[i], arr[j]] = [arr[j], arr[i]];
//         }
//     }

//     [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
//     return i + 1;
// }

// function quickSort(arr, l, r) {
//     if (l >= r) return;

//     let index = partitionIndex(arr, l, r);
//     quickSort(arr, l, index - 1);
//     quickSort(arr, index + 1, r);
// }

// quickSort(arr, 0, arr.length - 1);
// console.log(arr);
