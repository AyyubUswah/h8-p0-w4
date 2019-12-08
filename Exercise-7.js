function urutkanAbjad(str) {
    
    var alphabet = 'abcdefghijklmnopqrstuvwxyz' ;
    var result = '';

    for ( var i = 0 ; i < alphabet.length ; i++) {
        
        for ( var j = 0 ; j<str.length ; j++) {

            console.log('ini alp i :', i, 'ini str J :', j)
            //console.log(str[0], alphabet[7])

            if (alphabet[i] === str[j]) {

                result += alphabet[i];
                console.log ('ini result :', result)
            }
        }
    }
  // return result // you can only write your code here!
  }
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
   console.log(urutkanAbjad('truncate')); // 'acenrttu'
//   console.log(urutkanAbjad('developer')); // 'deeeloprv'
//   console.log(urutkanAbjad('software')); // 'aeforstw'
//   console.log(urutkanAbjad('aegis')); // 'aegis'