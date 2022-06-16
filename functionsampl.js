// tASK nO 1

// Anonymus function

//=====================================Print odd numbers in an array
//  var arr= [1,2,3,4,5,6];

// var odd = arr.filter(function(n){

//      return (n%2 !==0);
     
// });

// console.log(odd);

//=====================================Sum of all numbers in an array

// var arr =[1,2,3,4,5,6];
// var add = function (arr)
// { 
//      return arr.reduce((a,b) => a+b,0);
// };

// var sum= add(arr);
// console.log("Sum =",sum);



//===================================== Print all prime no in array
// var arr =[1,2,3,4,5,6];
// var prime = arr.filter(function(n)
// {
//       for (var i=2;i<n;i++)
//        {
//          if (n % i == 0)
//          {
//           return false;
//          }
//        }
//       return true;
// });
// console.log(prime);

//===================================== print all palindrmes from array
// var arr =["mam","mom","dad" ,"shubham"
// ];
// var palindrome = arr.filter(function(w)
// {
//         let len = w.length;
//       for (var i=0;i<len/2;i++)
//        {
//          if (w[i] !== w[len-1-i])
//          {
//           return false;
//          }
//        }
//       return true;
// });
// console.log(palindrome);


//========================================Remove duplicates from array

// var arr = ['apple','mango','apple','mango','orange'];    //it should be in string else it will give error

// var duplicate = arr.filter(function(item,index)
// {
//   return arr.indexOf(item) == index;   //comparing current position with item position
// })


// console.log(duplicate);


// ===================================//Rotate an array by k times

//   var arr =[1,2,3,4,5,6];
//   var k=3;

//   var rotate = function(arr,k)
//   {
//      for (var i=0; i<k;i++)
//      {
//        arr.unshift(arr.pop());
       
//      }
//    return arr;
//   };

//   console.log(rotate(arr,k));



//==========================================Return median of two sorted arrays of the same size

// var arr1 =[1,2,3];
// var arr2 =[4,5,6];

// var arr = arr1.concat(arr2);
//   if (arr.length%2 ===0){
//       let a= ((arr[arr.length /2]  + arr[((arr.length/2)-1)]) /2 );
//       console.log(a);
//   }

//   else { 
//     let b= arr[((arr.length/2)-0.5)];
//   console.log(b);  }



//==========================================Convert all the strings to title caps in a string array


// var sentence ="He is greatest all time programmer";
// var TitleCaseSentence = function(str){
//     return str.toLowerCase().split(" ").map(function(str)
//     {
//       return (str[0].toUpperCase() + str.slice(1));
//     });
//   };  
    

// console.log(TitleCaseSentence(sentence));




//==================  IIFE function

//=====================================Print odd numbers in an array
//  (()=>{
//var arr= [1,2,3,4,5,6];

// var odd = arr.filter(function(n){

//      return (n%2 !==0);
     
// });

// console.log(odd);
//})();



//=====================================Sum of all numbers in an array
//  (()=>{
// var arr =[1,2,3,4,5,6];
// var add = function (arr)
// { 
//      return arr.reduce((a,b) => a+b,0);
// };

// var sum= add(arr);
// console.log("Sum =",sum);
//})();


//===================================== Print all prime no in array
//  (()=>{
// var arr =[1,2,3,4,5,6];
// var prime = arr.filter(function(n)
// {
//       for (var i=2;i<n;i++)
//        {
//          if (n % i == 0)
//          {
//           return false;
//          }
//        }
//       return true;
// });
// console.log(prime);
//})();


//===================================== print all palindrmes from array
//  (()=>{
// var arr =["mam","mom","dad" ,"shubham"
// ];
// var palindrome = arr.filter(function(w)
// {
//         let len = w.length;
//       for (var i=0;i<len/2;i++)
//        {
//          if (w[i] !== w[len-1-i])
//          {
//           return false;
//          }
//        }
//       return true;
// });
// console.log(palindrome);
//})();



//========================================Remove duplicates from array
//  (()=>{
// var arr = ['apple','mango','apple','mango','orange'];    //it should be in string else it will give error
// var duplicate = arr.filter(function(item,index)
// {
//   return arr.indexOf(item) == index;   //comparing current position with item position
// })
// console.log(duplicate);
//})();



// ===================================//Rotate an array by k times
//  (()=>{
//   var arr =[1,2,3,4,5,6];
//   var k=3;

//   var rotate = function(arr,k)
//   {
//      for (var i=0; i<k;i++)
//      {
//        arr.unshift(arr.pop());      
//      }
//    return arr;
//   };
//   console.log(rotate(arr,k));
//})();




//==========================================Return median of two sorted arrays of the same size
//  (()=>{
// var arr1 =[1,2,3];
// var arr2 =[4,5,6];

// var arr = arr1.concat(arr2);
//   if (arr.length%2 ===0){
//       let a= ((arr[arr.length /2]  + arr[((arr.length/2)-1)]) /2 );
//       console.log(a);
//   }

//   else { 
//     let b= arr[((arr.length/2)-0.5)];
//   console.log(b);  }
//})();




//==========================================Convert all the strings to title caps in a string array
//  
// var sentence ="He is greatest all time programmer";
// var TitleCaseSentence = function(str){
//     return str.toLowerCase().split(" ").map(function(str)
//     {
//       return (str[0].toUpperCase() + str.slice(1));
//     });
//   };  
// console.log(TitleCaseSentence(sentence));
//

//tASK nO 3

//==================  Arrow function function

//=====================================Print odd numbers in an array
//  
//var arr= [1,2,3,4,5,6];

// var odd = arr.filter((n) => {(n%2 !==0);    
// });

// console.log(odd);
//

//==========================================Convert all the strings to title caps in a string array
//  
// var sentence ="He is greatest all time programmer";
// var TitleCaseSentence = (str)=>{ str.toLowerCase().split(" ").map((str)=>{ (str[0].toUpperCase() + str.slice(1));
//     });
//   };  
// console.log(TitleCaseSentence(sentence));
//

//=====================================Sum of all numbers in an array
//  
// var arr =[1,2,3,4,5,6];
// var add = (arr)=> { arr.reduce((a,b) => a+b,0);
// };

// var sum= add(arr);
// console.log("Sum =",sum);
//


//===================================== Print all prime no in array
//  
// var arr =[1,2,3,4,5,6];
// var prime = arr.filter((n) =>{
//       for (var i=2;i<n;i++)
//        {
//          if (n % i == 0)
//          {
//           return false;
//          }
//        }
//       return true;
// });
// console.log(prime);
//


//===================================== print all palindrmes from array
//  
// var arr =["mam","mom","dad" ,"shubham"
// ];
// var palindrome = arr.filter((w)=>{
//         let len = w.length;
//       for (var i=0;i<len/2;i++)
//        {
//          if (w[i] !== w[len-1-i])
//          {
//           return false;
//          }
//        }
//       return true;
// });
// console.log(palindrome);
//




//=====================Task No 2

// var min = 5;
// function toSeconds(min) {

//     return min*60;
// }
// console.log(toSeconds(min));
// var secs = toSeconds(min)



// var mystr = "5";
// function toInteger(mystr) {

//     return parseInt(mystr);
// }
// console.log(toInteger(mystr));
// var myint = toInteger(mystr)


// var arr = [1, 2, 3];
// function getFirstElement(arr) {
// return arr[0];
// }
// console.log( getFirstElement(arr));
// var data = getFirstElement(arr)

// var myint = 0;
// function nextNumber(myint) {
// return myint+1;
// }
// var myNextint = nextNumber(myint)


// var arr = [1, 2, 3];
// function hourToSeconds(arr) {
//       for (var i=0;i<arr.length;i++){
//         arr[i]*3600;
//       }
//       return arr;
// }
// var data = hourToSeconds(arr)


// function findPerimeter(num1,num2) {
//     return num1*2 +num2*2;
// }
// var peri = findPerimeter(6,7)

// function lessThan100(num1,num2) {

//     return (num1+num2)<100
// }


// var res = lessThan100(22,15)
// console.log(res);


// function remainder(num1,num2) {
//     if (num1 <num2){
//         return num1;
//     }
//    if (num1%num2 ==0){
//     return 0;
//  }
//    if (num1%num2 !==0){
//     return num1%num2;
// }
// var res = remainder(1,3)



// let turkey = 2 ;
// let horse1 = 4 ;
// let pigs1 = 4 ;
// function CountAnimals(tur,horse,pigs) {
//     return (turkey*tur +horse1*horse +pigs1*pigs);
// }
// var legs = CountAnimals(2,3,5);



// function frames(num1,num2) {
//     return num1*num2*60
// }
// var fps = frames(1,2)



// function divisibleByFive(num1) {

// return (num1 % 5 == 0)

// }
// var divisible = divisibleByFive(5)
// console.log(divisible);


// function isEven(num){
//     return  num%2 ==0;
//    }
//    var even = isEven(5)


//    function areBothOdd(num1, num2){
//     return (num1 %2 !== 0 || num2 %2 !==0);
//    }
// console.log(areBothOdd(1, 3));


// function getFullName(firstName, lastName){
//     return (firstName + ' '+  lastName);
    
//    }
//    let ob = toString(getFullName("GUVI", "GEEK"));

//    console.log(ob); 



// // function getNthElement(array,n){
// //    if (array.length==0){
// //     return ("undefined");
// //    }
// //    else{ array[n]};
// //    }
// //    console.log(getNthElement([1, 3, 5], 1));




// //    function getLastElement(array){
// //      if (array.length >0){
// //          return array[array.length -1];
// //      }
// //      else {  return ("-1")}
// //     }
// //     console.log(getLastElement(array));


// var obj = {
//     mykey: "value"
//    };
//    function getProperty(obj, key) {
//     if ((obj[key]).length>0){
//       let a = obj[key];
//       return a;
//     }
//     else {"undefined"}
//    }
//  var c= getProperty(obj,"mykey");
//  console.log(c);

//  function addProperty(obj, key){
//     obj[key] = true;   
//     }    
//     var Obj = {};
//     addProperty(Obj, 'mykey');
//     console.log(Obj.mykey); 



    // function removeProperty(obj, key){
    //     delete obj[key];
    //     return obj;
    //    }
    //    let c= removeProperty(obj, "name")
    //   console.log(c);



//     var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
//     let Nempty =[];
//     let Pempty=[];
//     let final =[];
//     var ar2 = function countPositivesSumNegatives(arr) {
//    for (let i=0;i<arr.length;i++){
//     if(i>0 || i==0){
//         Pempty.push(arr[i]);
//     }
// }
//     for (let i=0;i<arr.lengtg;i++){
//         if(i<0){
//             Nempty.push(arr[i]);
//         }
//     }
// }
//     let PosiElementCount = Pempty.length +1;
//     final.push(PosiElementCount);

//     let sum =Nempty.reduce(function(v,u){
//         return v+u;
//     },0);
  
//     final.push(sum);
//     console.log(final);


// function getPositives(ar){
//     for (var i=0;i<arr.length;i++){
//         if (ar[i]>0){
//             ar2.push(ar[i]);
//         }
//     }
// }
// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var ar2 =[];
// console.log(ar2);




// function powersOfTwo(n){
//     var myArray = [];
//     for (var i=0; i<=n; i++){
//       myArray.push(2**i);
//     }
//     return myArray
//   }
  
//   const result = powersOfTwo(0);
//   const result = powersOfTwo(1);
//   const result = powersOfTwo(2);
//   console.log(result);



// function findMax(ar)
// {
//     let a= Math.max(...ar);
//       return a;
// }
// var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
// var max = findMax(ar);
// console.log("Max: ", max);


// printPrimes(100);

// // Function prints the first nPrimes numbers
// function printPrimes(nPrimes)
// {
//     var n = 0;
//     var i = 2;
    
//     while(n < nPrimes)
//     {
//         if (isPrime(i))
//         {
//             println(n, " --> ", i);
//             n++;
//         }
        
//         i++;
//     }
// }


// // Returns true if a number is prime
// function isPrime(n)
// {
//     if (n < 2)
//         return false;
        
//     if (n == 2)
//         return true;
    
//     var maxDiv = Math.sqrt(n);
    
//     for(var i = 2; i <= maxDiv; i++)
//     {
//         if (n % i == 0)
//         {
//             return false;
//         }
//     }
    
//     return true;
// }



// println(getPrimes(10, 100));

// function getPrimes(nPrimes, startAt)
// {
//     var ar = [];
    
//     var i = startAt;
    
//     while(ar.length < nPrimes)
//     {
//         if (isPrime(i))
//         {
//             ar.push(i);
//         }
        
//         i++;
//     }
    
//     return ar;
// }

// // Returns true if a number is prime
// function isPrime(n)
// {
//     if (n < 2)
//         return false;
        
//     if (n == 2)
//         return true;
    
//     var maxDiv = Math.sqrt(n);
    
//     for(var i = 2; i <= maxDiv; i++)
//     {
//         if (n % i == 0)
//         {
//             return false;
//         }
//     }
    
//     return true;
// }



// var s = reverseString("JavaScript");
// println(s);

// function reverseString(s)
// {
//     var s2 = "";
    
//     for(var i = s.length - 1; i >= 0; i--)
//     {
//         var char = s[i];
//         s2 += char;
//     }
    
//     return s2;
// }


// var ar1 = [1, 2, 3];
// var ar2 = [4, 5, 6];

// var ar = mergeArrays(ar1, ar2);
// println(ar);

// function mergeArrays(ar1, ar2)
// {
//    var ar = [];
   
//    for(let el of ar1)
//    {
//        ar.push(el);
//    }
   
//    for(let el of ar2)
//    {
//        ar.push(el);
//    }
   
//    return ar;
// }



// println(sumCSV("1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9"));

// function sumCSV(s)
// {
//     var ar = s.split(",");
    
//     var sum = 0;
    
//     for(var n of ar)
//     {
//         sum += parseFloat(n);
//     }
    
//     return sum;
// }