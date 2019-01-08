//Given an array of ints, return true if it contains no 1's or it contains no 4's.
//no14([1, 2, 3]) → true
//no14([1, 2, 3, 4]) → false
//no14([2, 3, 4]) → true

numlist1 = [2,2,7,45,6,4,3445,5345,3445,37,65,8,7,4,44]
numlist2 = [5,3,4,43,62,24,3,4,89,9,9,2,1,1,4]
numlist3 = [1,4,4,245,5,43,3,2,25,5,6,7,8,99,9,14]

no14(numlist1);
no14(numlist2)

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