function cariModus(arr) {

    var num = arr.length ;
    
    var mod1 = 0 ;
    var mod2 = 0 ;
    var angkaSamaSemua = 0;

     var temp = 0 ;

    for ( var i = 0 ; i < num ; i++) {
        
        for ( var j = 0 ; j< num ; j++) {

            if ( arr[i] === arr[j] && i !== j ) {

                temp++

                if( temp > mod1 ) {

                    mod1 = temp
                    mod1 = i
                }

                
            }
        }
    }
     
    if ( mod1 === 0 ) {

        return -1
    }

    for ( var k = 0 ; k < num ; k++) {
       
        mod2 += arr[k];

        if (mod2 / num === arr[k]) {
            
            return -1
        }
        

    }

    return arr[mod1]
    // you can only write your code here!
  }
  
  // TEST CASES
//   console.log(cariModus([10, 4, 5, 2, 4])); // 4
//   console.log(cariModus([5, 10, 10, 6, 5])); // 5
//   console.log(cariModus([10, 3, 1, 2, 5])); // -1
//   console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1