    // No User input Just write the program 
    // Write a program that sums(adds) all
    // the elements in an int[]


    var numlist1 = [2, 4, 8, 16, 32, 64, 128];
    var numlist2 = [10, 28, 3, 58];
    var numlist3 = [64, 0];

    function sumArr(array) {
        for (
          var
            index = 0,              // The iterator
            length = array.length,  // Cache the array length
            sum = 0;                // The total amount
            index < length;         // The "for"-loop condition
            sum += array[index++]   // Add number on each iteration
        );
        console.log(sum);
        return sum;
      } 

      sumArr(numlist1);
      sumArr(numlist2);
      sumArr(numlist3);
