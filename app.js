const array = [100, 200.25, 300.84, 400.3];
const array2 = array.map((item) => item.toFixed(2))
console.log(array2)
// result: ["100.00", "200.25", "300.84", "400.30"]

const array = [0, 5, 10, 7, 6, 5, 0];
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const array2 = array.map((index) => month[index]);
console.log(array2);
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]

const array = [1, 16, 81, 256, 625, 1296];
const array2 = array.map((item) => {
    return Math.sqrt(Math.sqrt(item))
})
console.log(array2)
// result: [1, 2, 3, 4, 5, 6]
