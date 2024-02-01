// Langkah 1
let array = [];
for (let i = 0; i < 100; i++) {
    array.push(Math.floor(Math.random() * 50) + 1);
}
console.log("Array:", array);

// Langkah 2
function splitArray(arr) {
    let evenArray = [];
    let oddArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            evenArray.push(arr[i]);
        } else {
            oddArray.push(arr[i]);
        }
    }

    return { evenArray, oddArray };
}

// Memanggil fungsi splitArray
let { evenArray, oddArray } = splitArray(array);

console.log("Array Genap:", evenArray);
console.log("Array Ganjil:", oddArray);

// Langkah 3

// Fungsi untuk mencari nilai minimum pada array
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

// Fungsi untuk mencari nilai maksimum pada array
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Fungsi untuk mencari total pada array
function findTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// Fungsi untuk mencari rata-rata pada array
function findAverage(arr) {
    let total = findTotal(arr);
    return total / arr.length;
}

// Memanggil fungsi-fungsi untuk array genap
let evenMin = findMin(evenArray);
let evenMax = findMax(evenArray);
let evenTotal = findTotal(evenArray);
let evenAverage = findAverage(evenArray);

// Memanggil fungsi-fungsi untuk array ganjil
let oddMin = findMin(oddArray);
let oddMax = findMax(oddArray);
let oddTotal = findTotal(oddArray);
let oddAverage = findAverage(oddArray);

console.log("Array Genap:");
console.log("Min:", evenMin);
console.log("Max:", evenMax);
console.log("Total:", evenTotal);
console.log("Rata-rata:", evenAverage);

console.log("\nArray Ganjil:");
console.log("Min:", oddMin);
console.log("Max:", oddMax);
console.log("Total:", oddTotal);
console.log("Rata-rata:", oddAverage);


// Langkah 4

// Fungsi untuk membandingkan nilai min, max, total, dan rata-rata
function compareArrays(arr1, arr2) {
    let comparison = {
        min: arr1.min > arr2.min ? "Min lebih besar pada array genap" : "Min lebih besar pada array ganjil",
        max: arr1.max > arr2.max ? "Max lebih besar pada array genap" : "Max lebih besar pada array ganjil",
        total: arr1.total === arr2.total ? "Total memiliki nilai sama antara array genap dan ganjil" : "Total berbeda antara array genap dan ganjil",
        average: arr1.average > arr2.average ? "Rata-rata lebih besar pada array genap" : "Rata-rata lebih besar pada array ganjil",
    };

    return comparison;
}

// Memanggil fungsi compareArrays
let comparisonResult = compareArrays(
    { min: evenMin, max: evenMax, total: evenTotal, average: evenAverage },
    { min: oddMin, max: oddMax, total: oddTotal, average: oddAverage }
);

console.log("\nPerbandingan nilai antara array genap dan ganjil:");
console.log(comparisonResult);

