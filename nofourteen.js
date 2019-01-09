//Given an array of ints, return true if it contains no 1's or it contains no 4's.
//no14([1, 2, 3]) → true
//no14([1, 2, 3, 4]) → false
//no14([2, 3, 4]) → true

numList1 = [10, 28, 64, 14, 68, 42, 40];
numList2 = [22, 33, 55, 66, 77, 88, 99];
numList3 = [6, 58, 72, 4, 139492, 95, 65, 73];

no14(numList1);
no14(numList2);
no14(numList3);

function no14(array) {
ones = 0;
fours = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] === 1 ){
        ones++
    } if (array[i] === 4) {
        fours++
        }
    }
if (ones === 0 && fours === 0 ){
console.log(true)}
else {
    console.log(false);
    }
}