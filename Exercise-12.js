function countProfit(shoppers) {
    var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];

  
    // hasil percobaan //GAGAL
  
    //  var tempObj = 
  
    //     {
    //         product : '',
    //         customers : [],
    //         leftOver : 0 ,
    //         totalProfit : 0
    //     };
                     
      var result = [] ; 
  
      if ( shoppers.length === 0 ) {
  
        return result 
  
      }
  
   
     for ( var i = 0 ; i < listBarang.length ; i++) {
  
      //hasil percobaan //GAGAL
  
        // tempObj["product"] =listBarang[i][0]
        // tempObj["customers"]=[]
          
        // tempObj["leftOver"] =  listBarang[i][2];
        // tempObj["totalProfit"] = 0;
  
     var tempObj = 
  
     {
         product : listBarang[i][0],
         customers : [],
         leftOver : listBarang[i][2] ,
         totalProfit : 0
     };
        
       //console.log(tempObj)
       result.push(tempObj);
       //console.log('ini i :',i,'lalu', result)
          for ( var j = 0 ; j<shoppers.length ; j++) {
  
              if (shoppers[j]["product"] === listBarang[i][0] && shoppers[j]["amount"] <= listBarang[i][2]) {
                
              tempObj["product"] = shoppers[j]["product"]
           
              tempObj["customers"].push(shoppers[j]["name"]);
  
              listBarang[i][2] -= shoppers[j]["amount"];
  
              tempObj["leftOver"] =  listBarang[i][2];
  
              tempObj["totalProfit"] += (listBarang[i][1] *  shoppers[j]["amount"]); 
  
               console.log('ini i :', i, 'ini j: ', j)
               console.log(shoppers.length)
              }
          
              // (HASIL PERCOBAAN) //GAGAL
  
  //           else {
  //             tempObj["product"] = shoppers[j]["product"]
           
  //             tempObj["customers"]=[]
  
          
  
  //             tempObj["leftOver"] =  listBarang[i][2];
  
  //             tempObj["totalProfit"] = 0;
  //           }
  
  //             else if (shoppers[j]["product"] === 'Sweater Uniklooh' && shoppers[j]["amount"] < listBarang[i][2]) {
                
  //             tempObj["product"] = shoppers[j]["product"]
           
  //             tempObj["customers"].push(shoppers[j]["name"]);
  
  //             listBarang[i][2] -= shoppers[j]["amount"];
  
  //             tempObj["leftOver"] =  listBarang[i][2];
  
  //             tempObj["totalProfit"] += (listBarang[i][1] *  shoppers[j]["amount"]); 
  //             }
  
  
        //console.log('ini i :', i, 'ini j: ', j)
        //console.log(tempObj)
       // result.push(tempObj)
        }
      }
        //result.push(tempObj)
        console.log ("==xxxxx==")
        return result
        
    }
    
    //return result
  //}
   
   
     // you can only write your code here!
  
  
  // TEST CASES
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
     console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  //   // [ { product: 'Sepatu Stacattu',
  //   //     shoppers: [ 'Windi' ],
  //   //     leftOver: 2,
  //   //     totalProfit: 12000000 },
  //   //   { product: 'Baju Zoro',
  //   //     shoppers: [ 'Devi', 'Lisa' ],
  //   //     leftOver: 0,
  //   //     totalProfit: 1000000 },
  //   //   { product: 'Sweater Uniklooh',
  //   //     shoppers: [ 'Rani' ],
  //   //     leftOver: 0,
  //   //     totalProfit: 175000 } ]
     console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  //   // [ { product: 'Sepatu Stacattu',
  //   //     shoppers: [],
  //   //     leftOver: 10,
  //   //     totalProfit: 0 },
  //   //   { product: 'Baju Zoro',
  //   //     shoppers: [],
  //   //     leftOver: 2,
  //   //     totalProfit: 0 },
  //   //   { product: 'Sweater Uniklooh',
  //   //     shoppers: [],
  //   //     leftOver: 1,
  //   //     totalProfit: 0 } ]
   console.log(countProfit([])); //[]