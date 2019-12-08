function digitPerkalianMinimum(angka) {
    
    var temp = '' ;
    var tempArr = [];
    var digit = 0 ;  
    


    //var minLength = 2 ;


    if ( angka < 10 ) {

        result = 2 ;
        return result
    }
    for ( var i = 1 ; i <= angka ; i++ ) {
        
        for ( var j = 1 ; j <= angka ; j++ ) {
            //console.log( 'ini j :', j, 'ini i :', i)
            if ( j*i == angka ) {
                 
                temp = String(j) + String(i) 
                tempArr.push(temp)

             }
                     
         }

    }          
      for ( var j = 0 ; j < tempArr.length ; j++) {
       
          digit = tempArr[j].length
          //console.log( 'ini j :', tempArr[j]) 
          for ( var k = 0 ; k < tempArr.length ; k++) {
           //console.log( 'ini k :', tempArr[k])

            if ( tempArr[k].length < tempArr[j].length) {

              digit = tempArr[k].length
            }
          }
      }
    
   return digit
    // you can only write your code here!
        
  
  //return result
}
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
   console.log(digitPerkalianMinimum(13)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
   console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2


 