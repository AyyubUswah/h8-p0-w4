function checkAB(num) {
    
    var distance = 0 ;
    var result = '' ;
    
    for ( var i = 0 ; i<num.length ; i++) {

        for ( var j = 0 ; j<num.length ; j++) {

           // console.log('ini i :',i,'ini j :', j)
            
            if ( (num[i] === 'a' && num[j] === 'b') || (num[i] === 'b' && num[j] === 'a')) {
               // console.log( num[3], num[7])


                distance = j - i 

                if ( (j-i) == 4 ) {

                    result = 'true';
                    return result
   
                }

                else {

                    result = 'false';
                    
                }
            }

        //     else if ( num[i] === 'b' && num[j] === 'a') {

        //         distance = j - i 

        //         if ( (j-i) == 4 ) {

        //             result = 'true';
        //             return result
   
        //         }

        //         else {

        //             result = 'false';
                    
        //         }
        //   }
          else {

            result = 'false'
          }
     }
     
    //you can only write your code here!
   }

  return result
}
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
   console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false