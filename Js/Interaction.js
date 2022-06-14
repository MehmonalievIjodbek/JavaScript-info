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

// 40... // || (YOKI)   Agar uning argumentlaridan biri true bo'lsa true qayataradi, aks holda esa false qaytaradi

// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false

// 41... &&agar uning operandlaridan biri false bo'lsa false qaytaradi aks holda esa true

// alert( true && true );   // true
// alert( false && true );  // false
// alert( true && false );  // false
// alert( false && false ); // false

// 42...
// let hour = 12;
// let minute = 30;

// if (hour == 12 && minute == 40  ) {
//   alert( 'The time is 12:30' );
// }

// if the first operand is truthy,
// AND returns the second operand:
// alert( 1 && 0 ); // 0
// alert( 4 && 5 );

// 43... Barcha qiymatlar to'g'ri bo'lsa, oxirgi qiymat qaytariladi:

// alert( 1 && 2 && 3 ); // 3, the last one

// 44...

// let x = 1;

// (x > 0) && alert( 'Greater than zero!' );

// 45...
// let x = 1;

// if (x > 0) alert( 'Greater than zero!' );

// 46... ! teskari qiymat qaytaradi Masalan:

// alert( !true ); // false
// alert( !0 ); // true

// Ba'zan qiymatni mantiqiy turga aylantirish uchun double NOT !!ishlatiladi:

// alert( !!"non-empty string" ); // true
// alert( !!null ); // false

// !! double notni urniga boolean yozilsa ham Mantiqiy turni o'zi chiqadi

// alert( Boolean("Not a Number")); //true
// alert( Boolean(null)); //false

// 47...
// let userName = prompt("Who's there?", '');

// if (userName === 'Admin') {

//   let pass = prompt('Password?', '');

//   if (pass === 'TheMaster') {
//     alert( 'Welcome!' );
//   } else if (pass === '' || pass === null) {
//     alert( 'Canceled' );
//   } else {
//     alert( 'Wrong password' );
//   }

// } else if (userName === '' || userName === null) {
//   alert( 'Canceled' );
// } else {
//   alert( "I don't know you" );
// }

// 48... ?? Bu operand qiymati bor narsani qabul qiladi

// let user;
// alert(user ?? "anonymous") //anonymous

// let user = 'John';
// alert(user ?? "anonymous") //John

// let firstName = null;
// let lastName = null;
// let nickName = "SuperCoder";
// alert(firstName ?? lastName ?? nickName ?? "anonymous")  //SuperCoder

// // 49...
// let a = prompt();
// let b = prompt();
// alert(a > 2 && b <= 3);

// let a = prompt("Sonni Yoz", "");
// let b = prompt("Sonni Yoz", "");
// alert(a % 2 != 0 && b % 2 != 0);

// let a = prompt("Sonni Yoz", "");
// let b = prompt("Sonni Yoz", "");
// alert(a % 2 == 0 || a % 2 != 0 && b % 2 == 0 || b % 2 != 0 );

// let a = prompt();
// console.log(a * 100 + " sm");

// let a = prompt("A sonni kiriting", " ")
// let b = prompt("A sonni kiriting", " ")
// alert( a / b);

// let a = prompt("A sonni kiriting", " ")
// let b = prompt("A sonni kiriting", " ")
// alert( a % b);

// let a = prompt("a");
// let b = 10;

// alert((a + b));
// alert(a % b);

// let a = prompt("a");
// let b = 10;

// // alert(Math.trunc(a / b));
// // alert(a % b);

// alert(Math.trunc(a / b) + (a % b))

// let a = prompt("Sonni kiriting", "");
// let b = prompt("Ikkinchi son", "")
// if(a > b){
//     alert(a)
// }else{
//     alert(b)
// }


// 50...
// let height = null;
// let width = null;

// let area = (height ?? 100) * (width ?? 50);
// alert(area) //5000    100* 50 = 5000

// 51...
// let area = height ?? (100 * width) ?? 50;
// console.log(area); 

// 52... 

// for (let i = 0; i < 3; i++) {
//     alert(i); // 0, 1, 2
//   }
//   alert(i);

// 53... 

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i)
//     }
// }    

// 54..LOOPLAR WHILE VA FOR 
// BU SIKL 3 MARTA AYLAN DEGANI 

// let i = 0;
// while(i < 3){
//     alert(i)
//     i++
// }

//BU SIKL ESA ORQAGA AYLANADI

// let i = 3
// while(i){
//     alert(i);
//     i--
// }

// 55... Bir chiziqli tana Bo'lsa qavslar shart emas

// let i = 3;
// while (i) alert(i--);

// 56...LOOP AVVAL TANANI BAJARADI KEYIN HOLATNI BAJARADI

// let i = 0;
// do{
//     alert(i);
//     i++
// }while (i < 3)

// 57... FOR SIKL

// for (let i = 0; i < 3; i++){
//     alert(i);
// }

// 58... INLINE O'ZGARUVCHILAR DEKLARATSIYASI 

// for(let i = 0; i < 3; i++){
//     alert(i);
// }alert(i);

// let i = 0;;
// for (i = 0; i < 3; i++){
//     alert(i);
// }alert(i);

// 59... CONTINUE 

//BU FAQAT TOQ QIYMATLARNI QAYTARADI

// for(let i = 0; i < 10; i++){
//     if(i % 2 == 0) continue;
//     alert(i);
// }

// for(let i = 0; i < 10; i++){
//     if (i % 2){
//         alert(i)
//     }
// } 

// 60... BUNGA 100DAN KICHIK SONLAR KIRITILSA YANA QAYTA DEP SO'RAYDI? BUNGA FAQAT 100 DAN KATTA SON KIRITISH KERAK

// let num;
// do {
//     num = prompt("Enter a number greater than 100?", 0);

// } while (num <= 100 && num)

// 61... TUB SONLARNI CHIQARISH 

// let n = 10;

// nextPrime:
// for(let i = 2; i <=n; i++){
//     for(let j = 2; j < i; j++){
//         if(i % j == 0) continue nextPrime
//     }
//     alert(i)
// }


// 62... 
// let a = "1";
// let b = 0;

// switch (+a) {

//   case b + 1:
//   case a + 1:
//     alert("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     alert("this doesn't run");
// }

// 63...

// const fac = (n) => {
//     if (n === 1) {
//         return 1;

//     } else {
//         return n * fac(n - 1)
//     }
// }
// const ans = fac(3)
// console.log(ans);

// 64... 

// let a = 2 + 3;
// switch (a) {
//     case 3:
//         alert('too small');
//         break;
//     case 4:
//         alert('Exastly');
//         break;
//     case 5:
//         alert(('Too big'))
//         break;
//     default:
//         alert("I dont know")
// }

// 65...  

// let a = 3;
// switch (a) {
//     case 4:
//         alert('Right')
//         break;
// case 3:
//     case 5:
//     alert('Wrong')
//     alert('why don\'t you');
//     break;
//     default:
//         alert('sdfms')
//         break;
// }

// 66... Type Matters


// let arg = prompt("Enter a value?");
// switch (arg) {
//     case '0':
//     case '1':
//         alert('one or zero');
//         break;
//     case '2':
//         alert('two');
//         break;
//     case 3:
//         alert('Never executes!');
//         break;

//     default:
//         alert('an unknown value')
// }


// 67...  Switchda masala

// switch (browser) {
//     case 'Edge':
//         alert('Youve Got the Edge!');
//         break;
//     case 'Chrome':
//     case 'Fire Fox':
//     case 'Safari':
//     case 'Opera':
//         alert('Okay we support these');
//         break;
//     default:
//         alert('Hech nima')
// }

// Huddi shu masala if da

// if (browser == 'Edge') {
//     alert('Youve Got the Edge');
// } else if (browser == 'Chrome' || browser == 'Fire Fox' || browser == 'Safari' || browser == 'Opera') {
//     alert('okay we support these browsers')
// } else {
//     alert('we hope that this page');
// }

// 68... IF dan masala

// let a = +prompt('a?', '');
// if (a == 0) {
//     alert(0);
// }
// if (a == 1) {
//     alert(1);
// }
// if (a == 2 || a == 3) {
//     alert('2,3')
// }

// Huddi shu masala switchda 

// switch (a) {
//     case 10:
//         alert(0)
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert(2, 3);
//         break;
// }


// 69... Funksiya ichida o'zgaruvchi elon qilinsa faqat shu funksiya ichida ko'rinadi Local variables 
// function showMessage() {
//     let message = "Hello, I'm JavaScript!"; // local variable

//     alert( message );
//   }

//   showMessage(); // Hello, I'm JavaScript!

// 70...Tashqi o'zgaruvchilar Outer variables funksiya tashqi o'zgaruvchiga ham kirishi mumkin 

// let userName = 'John';
// function showMessage() {
//     let message = 'Hello, ' + userName;
//     alert(message);
// }
// showMessage();

// 71... Funkisya tashqi o'zgaruvchiga to'liq kriish huquqiga ega. Buni o'zgartirish mumkin

// let userName = 'John';
// function showMessage() {
//     userName= "Bob";
//     let message = "Hello, " + userName;
//     alert(message);
// }
// showMessage();

// 72... Agar funksiyada tashqi va ichki o'zgaruvchi bo'lsa tashqi o'zgaruvchini soya qiladi 

// let userName = "John";
// function showMessage() {
//     let userName = "Bob";
//     let message  = "Hello, " + userName;
//     alert(message);
// }
// showMessage()

// 73... Global o'zgarvchilar variables Funskiyadan tahsqarida elon qilingan o'zgaruvchilar global deyiladi

// function showMessage(from, text) {
//     from = '*' + from + '*';
//     alert(from + ': ' + text);
// }
// let from = "Ann";
// showMessage(from, "Hello"); 
// alert(from);    
//  74...

// function showMessage(from, text = "no text"){
//     console.log(from + ": " + text);
// }
// showMessage("Ann", )

// 75... 
// function sum(a, b) {
//     return a + b;
// }
// let result = sum(1, 2);
// alert(result); //3

// 76... Return bitta funckisyada ko'p holarda bo'lishi mumkin
// function checkAge(age) {
//     if (age >= 18){
//         return true;
//     }else {
//         return confirm('Do you have')
//     }
// }
// let age = prompt('How old are you?', '');
// if (checkAge(age)){
//     alert('Access granted');
// }else {
//     alert('Access denied');
// }

// 77... 

// function doNothing() {
//     return;
// }alert(doNothing() === undefined) //true

// 78... 
// function checkAge(age) {
//     if(age > 18){
//         return true;
//     }
//     else{
//         return confirm('Didi parents allow you')
//     }
// }

// ordan foydalanish ||

// function checkAge(age) {
//     return (age > 18) || confirm('Did parents allow you');  
// }

// savol belgisidan foydalanish ?

// function checkAge(age) {
//     return (age > 18) ? true : confirm ('Did parents allow you?')
// }

// 79... eng Kichigini chiqaruvchi funckisya

// function min(a, b){
//     if (a > b){
//         return a;
//     }else {
//         return b;
//     }
// }


// function min(a,  b) {
//     return a < b ? a : b
// }

// 80... Sonni marta ko'paytirish

// function pow(x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// let x = prompt("x?",);
// let n = prompt("n?",);

// if (n < 1) {
//     alert(`Power ${n} is not supported`);
// } else {
//     alert(pow(x, n))
// }
