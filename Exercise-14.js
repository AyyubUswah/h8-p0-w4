function naikAngkot(arrPenumpang) {
   var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here

    // var startNum = 0;
    // var stopNum = 0;

    var result = []

    if (arrPenumpang.length === 0 ) {

        return result
    }

    for ( var i = 0 ; i<arrPenumpang.length ; i++) {

        var obj = {

            penumpang : arrPenumpang[i][0],
            naikDari : arrPenumpang[i][1],
            tujuan : arrPenumpang[i][2],
            bayar : 0
        };
       result.push(obj)

        var startNum = 0;
        var stopNum = 0;
        var payment = 0 ;

       for ( var j = 0 ; j< rute.length ; j++) {
       
        // var startNum = 0;
        // var stopNum = 0;
        // var payment = 0 ;

          if ( rute [j] === arrPenumpang[i][1]) {

            var startNum = Math.abs(j * 2000)
          }

          else if ( rute[j] === arrPenumpang[i][2]) {

            var stopNum = Math.abs(j *2000)
          }

          payment = stopNum - startNum
        //   console.log(payment)
       } 
      // console.log(payment)
      obj["bayar"] = payment
    }

    return result



    }
  
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]