function cariMedian(arr) {
    
    var medianIs = 0;

    for ( var i = 1 ; i < arr.length ; i++ ) {
         
        if ( arr.length / i == 2 && arr.length % 2 == 0) {
            
            medianIs = ((arr[i -1] + arr[i])/2);

        } 
        else if ( arr.length /i == 2.5 && arr.length %2 !=0) {

            medianIs = (arr[i]);
        }
        else if ( arr.length /i == 1.5 && arr.length %2 !=0 ) {

            medianIs = (arr[i -1])
        }
    }
    
    return medianIs
    // you can only write your code here!
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5
  