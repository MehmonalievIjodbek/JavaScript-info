// ALERT PROMPT CONFIRM

// 1... Funktsiya promptikkita argumentni qabul qiladi:

// let age = prompt('How old are you?', );

// alert(`You are ${age} years old!`);

// 2.. .Natija, OK bosilsa true va boshqacha bo'lsa agar  false .

// let isBoss = confirm("Are you the boss?");

// alert( isBoss ); // true if OK is pressed

// 3... Ism so'raydigan va uni chiqaradigan web sahifa

// let name1 = prompt('Ismingizni Yozing', );
// alert(name1);

// 4...  Raqamli Konvertatsiya

// let str = "123";

// alert(typeof str);

// let num = Number(str);

// alert(typeof num);

// 5... Unary

// let x = 1;

// x = -x;
// alert( x );

// 6... Binary atama terms

// let x = 1, y = 3;
// alert( y - x );

// 7... Remainder  Qolgan %,

// alert( 5 % 2 ); // 1, chunki 5 ni 2 ga bo'lganimizda 2*2=4   5-4=1 shunga
// alert( 8 % 3 ); // 2,

// 8... Exponentiation Ko'rsatkich **. Bu Darsajaga oshirish hisoblanadi

// alert( 2 ** 2 ); // 2² = 4  | 2*2=4
// alert( 2 ** 3 ); // 2³ = 8  | 2*2*2=8
// alert( 2 ** 4 ); // 2⁴ = 16 | 2*2*2*2=16

// 9... Kvadrat Ildiz

// alert( 4 ** (1/2) ); // 2
// alert( 8 ** (1/3) ); // 2

// 10... Concatenation ikkilik satrlarini birlashtirish

// let s = "my" + "String"
// alert(s) //myString

// 11... Agar Operandlar biri Satr Bo'lsa ikkinchi ham satrga aylanadi

// alert('1' + 2) // 12
// alert(2 + '1') // 21
// alert(2 + 2 + '1') // 41

// 12... Mana ayirish va bo'lish uchun demo:
// alert( 6 - '2' ); // 4,
// alert( '6' / '2' ); // 3

// 13...Ikkilik plyus ularni satr sifatida qo'shadi:

// let apples = "2";
// let oranges = "3";

// alert( apples + oranges ); // 23

// let apples = "2";
// let oranges = "3";

// alert(+apples + +oranges) // 5

// 14...

// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);
// alert(a) // 3
// alert(c)    // 0

// 15... Numeric conversion, unary + Raqamli konvertatsiya, unary +

// No effect on numbers
// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2

// // Converts non-numbers
// alert( +true ); // 1
// alert( +"5" );   // 5

// 16... Zanjirlash topshiriqlari

// let a, b, c;

// a = b = c = 2 + 5;

// alert( a ); // 4
// alert( b ); // 4
// alert( c ); // 4

// 17... Joyda o'zgartirish

// let n = 2;
// n = n + 5;  2+5=7
// n = n * 2;  7*2=14

// let n = 2;
// n += 5; // now n = 7 (same as n = n + 5)
// n *= 2; // now n = 14 (same as n = n * 2)

// alert( n ); // 14

// let n = 2;

// n *= 3 + 5;  3+5=8 8*2=16

// alert( n ) 16

// 18... Prefiks Postfiiks

// Prefiks
// let counter = 1;
// let a = ++counter; // (*)

// alert(a);

// Profiks

// let counter = 1;
// let a = counter++; // (*) changed ++counter to counter++

// alert(a); // 1

// 19... ++/--

// prefiks

// let counter = 1;
// alert( 2 * ++counter ); // 4

// postfiks

// let counter = 1
// alert(2 * counter++)

// 20...Vergul operatori

// let a = (1 + 2, 3 + 4);

// alert( a ) //7   3 + 4 = 7  oxirgisi ishlatilinadi

// 21... Postfiks va prefiks shakllari

// let a = 1, b = 1;

// let c = ++a; // ?
// let d = b++; // ?
// alert(a)

// 22...

// let a = 2;

// let x = 1 + (a *= 2);
// console.log(x);

// 23... taqqoslashlar 

// alert(2 > 1);  //true
// alert(2 == 1); //false
// alert(2 != 1); //true

// 24... Har qanday taqqoslash o'ziga o'zgaruvchi tayinlashi mumkin 

// let result = 5 > 4; // assign the result of the comparison
// alert( result );

// 25... boshqasidan kottaroq yoki yo'qligini bilish uchun ishlatiladi 

// alert( 'Z' > 'A'); //true
// alert( 'Glow' > 'Glee'); //true
// alert('Bee' > 'Be'); //true

// 26... Har xil turdagi qiymatlarni solishtirganda, JavaScript qiymatlarni raqamlarga aylantiradi.

// alert( '2' > 1 ); // true, string '2' becomes a number 2
// alert( '01' == 1 );

// 27... 

// let a = 0;
// alert( Boolean(a) ); // false

// let b = "0";
// alert( Boolean(b) ); // true

// alert(a == b); // true!

// 28... 

// let year = prompt('Bu yil 2022-yil',' ');

// if (year == 2022) {
//   alert( 'Ha togri!' );
// } else {
//   alert( 'Notogri' ); // any value except 2015
// }

// 29...
// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }

// 30...Shartli operator '?'
// Ba'zan biz shartga qarab o'zgaruvchini belgilashimiz kerak.

// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }

// alert(accessAllowed);

// 31... Baholanadi: agar haqiqat bo'lsa , value1qaytariladi, aks holda – value2. 

// let age = 16;
// let accessAllowed = (age > 18) ? true : false;
// console.log(accessAllowed);

// 32... Savol belgisi operatorlari ketma-ketligi ?bir nechta shartlarga bog'liq bo'lgan qiymatni qaytarishi mumkin.

// let age = prompt('age?', 18);

// let message = (age < 3) ? 'Hi, baby!' :
//   (age < 18) ? 'Hello!' :
//   (age < 100) ? 'Greetings!' :
//   'What an unusual age!';

// alert( message );

// 33... Bu esa else if ko'rinishda

// if (age < 3) {
//     message = 'Hi, baby!';
//   } else if (age < 18) {
//     message = 'Hello!';
//   } else if (age < 100) {
//     message = 'Greetings!';
//   } else {
//     message = 'What an unusual age!';
//   }
//   alert(message)

// 34... Bazida ? belgisi quyidagi so'zlarni almashtirish uchun ishlatiladi

// let company = prompt('Which company created JavaScript?', '');

// (company == 'bek') ?
//    alert('Right!') : alert('Wrong.');

// 35...34ni if elseda ko'rinishi

// let company = prompt('Which company created JavaScript?', '');

// if (company == 'bek') {
//   alert('Right!');
// } else {
//   alert('Wrong.');
// }

// 36... alertga biror nima chiqadimi ha chiqadi    

// if ("0") {
//     alert( 'Hello' );
//   }

// 37... 

// let value = prompt('Type a number', 0);

// if (value > 0) {
//   alert( 1 );
// } else if (value < 0) {
//   alert( -1 );
// } else {
//   alert( 0 );
// }

// 38...

// let result;

// if (a + b < 4) {
//   result = 'Below';
// } else {
//   result = 'Over';
// }

// O'ZGARYAPTI ? GA

// let result = (a + b < 4) ? 'Below' : 'Over';

// 39...

// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

// let message  = (login == 'Employee') ? 'Hello'
// : (login == 'Director') ? 'Greetings' : (login == '') ? 'No Login' : '';