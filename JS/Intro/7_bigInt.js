// it used to handle in js whose value exceed 2^63-1 or limiits NUmber data type
//Number type has lmitations -> due to its 64 bit representation ,


// banking app -> js for computation . 
// ambani -> 12345678901234567890 *10 -> 12345678901234567890
// 100 *10 -> 1000 . 100

// Facts about BigInt
// 1. big int addresses the limitation by allowing the representation of large numbers with precision 
// 2. bigInt literal are suffixed with "n" to distinguish them from regular Number literals
// 3. bigInt is stored in heap data type , all the primitives numbers string are stored in stack mem . only the non primitives such as func , obj , arr are stored in heap 

// ways to create bigInt
const largeNumber=12345678901234567890890n;
const fromString=BigInt("98765432198765432100");

//big Int operation 
const product=largeNumber*fromString;
console.log(product);
// 1219326312467611632448821824769536503569000n


// same operation using Number
const num1=12345678901234567890890;
const num2=98765432198765432100;
const p=num1*num2;
console.log(p); 
// 1.2193263124676116 * 10^42
// 12193263124676116 * 10^26






// 100.341
// 049.550
// 149.891 -> 149.89 -> 149.90 -> 150 -> 200 
// binance -> 0.000234*4567876 -> 23456 -> 23423 -> 

// 149.89 -> 149.90 kg of gold 
// 0.01 kg -> 10gm gold -> 70k 