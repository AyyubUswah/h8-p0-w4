function shoppingTime(memberId, money) {
    
    var shopObj = {
        
        memberId : memberId,
        listPurchased : [],
        changeMoney : 0 ,
        
        // you can only write your code here!
  };

  var hargaBarang = [ 

   ['Sepatu Stacattu', 1500000],
   ['Baju Zoro', 500000],
   ['Baju H&N', 250000],
   ['Sweater Uniklooh', 175000],
   ['Casing Handphone', 50000]

];
  var myMoney = money ;
  var spentMoney = 0 ;

  if ( (memberId === '') || ( memberId === undefined && money === undefined) ) {

    return 'Mohon maaf, toko X hanya berlaku untuk member saja'    
  }

  if ( money <= 50000) {

    return 'Mohon maaf, uang tidak cukup'
  }

  for ( var i = 0 ; i < hargaBarang.length ; i++ ) {

      //console.log(hargaBarang[i][1])
     
    if ( money > hargaBarang[i][1]) {

        shopObj["listPurchased"].push(hargaBarang[i][0])
        spentMoney += hargaBarang[i][1]
    
    }

    shopObj["changeMoney"] = myMoney - spentMoney   

  }
 return shopObj
}
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja