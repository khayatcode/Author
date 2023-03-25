
// function calculateDaysBetweenDates(date1, date2) {
//     // The number of milliseconds in one day 
//     const ONE_DAY = 1000 * 60 * 60 * 24;
//     // Convert both dates to milliseconds
//     const date1Ms = date1.getTime();
//     const date2Ms = date2.getTime();
//     // Calculate the difference in milliseconds
//     const differenceMs = Math.abs(date1Ms - date2Ms);
//     // Convert back to days and return
//     return Math.round(differenceMs/ONE_DAY);
// // Output: 8
// }
// console.log(calculateDaysBetweenDates(new Date('July 12, 2016'), new Date('July 20, 2016')));

// loop through the array
// for each element in the array, loop through the array again
// if the element in the array is equal to the element in the array, add 1 to the count
// if the count is greater than the max count, set the max count to the count
// return the max count

function mostFrequentItem(arr) {
    let maxCount = 0;
    let item;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }
        if (count > maxCount) {
            maxCount = count;
            item = arr[i];
        }
    }
    return item;
}

console.log(mostFrequentItem([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));


