// ==========================
// Chapters 35–38 (Functions)
// ==========================

// 1) Date & Time
function showDateTime() {
  const now = new Date();
  return now.toString();
}

// // 2) Greeting
// function greetUser(firstName, lastName) {
//   return `Assalamualaikum, ${firstName} ${lastName}!`;
// }

// // 3) Add numbers
// function addTwoNumbers(a, b) {
//   return Number(a) + Number(b);
// }

// // 4) Calculator
// function calculator(num1, num2, operator) {
//   num1 = Number(num1); num2 = Number(num2);
//   switch(operator) {
//     case '+': return num1 + num2;
//     case '-': return num1 - num2;
//     case '*': return num1 * num2;
//     case '/': return num2===0 ? 'Division by zero' : num1/num2;
//     case '%': return num1 % num2;
//     default: return 'Invalid operator';
//   }
// }

// // 5) Square
// function square(x){ return x*x; }

// // 6) Factorial
// function factorial(n){
//   n = Math.floor(Number(n));
//   if(n<0) return 'undefined';
//   let res=1; for(let i=2;i<=n;i++) res*=i;
//   return res;
// }

// // 7) Counting
// function displayCounting(start,end){
//   let arr=[];
//   if(start<=end){ for(let i=start;i<=end;i++) arr.push(i); }
//   else { for(let i=start;i>=end;i--) arr.push(i); }
//   return arr.join(', ');
// }

// // 8) Hypotenuse
// function calculateHypotenuse(base,perpendicular){
//   function calculateSquare(x){return x*x;}
//   return Math.sqrt(calculateSquare(base)+calculateSquare(perpendicular));
// }

// // 9) Area of rectangle
// function areaRectangle(width,height){ return width*height; }

// // 10) Palindrome
// function isPalindrome(str){
//   const s=str.toLowerCase().replace(/[^a-z0-9]/g,'');
//   return s===s.split('').reverse().join('');
// }

// // 11) Title case
// function titleCase(sentence){
//   return sentence.split(' ').map(w=> w? w[0].toUpperCase()+w.slice(1).toLowerCase() : w).join(' ');
// }

// // 12) Longest word
// function longestWord(str){
//   const words=str.match(/\w+/g)||[];
//   let max=''; for(const w of words){ if(w.length>max.length) max=w; }
//   return max;
// }

// // 13) Count letter
// function countLetter(str,letter){
//   let c=0; for(const ch of str) if(ch.toLowerCase()===letter.toLowerCase()) c++;
//   return c;
// }

// // 14) Circle
// function calcCircumference(r){ return 2*Math.PI*r; }
// function calcArea(r){ return Math.PI*r*r; }


// // ==========================
// // Chapters 38–42
// // ==========================

// function power(a,b){ return Math.pow(a,b); }

// function isLeapYear(year){
//   return (year%4===0 && year%100!==0) || (year%400===0);
// }

// function semiPerimeter(a,b,c){ return (a+b+c)/2; }
// function triangleArea(a,b,c){
//   const s=semiPerimeter(a,b,c);
//   return Math.sqrt(s*(s-a)*(s-b)*(s-c));
// }

// function average(m1,m2,m3){ return (m1+m2+m3)/3; }
// function percentage(m1,m2,m3,total=100){
//   return ((m1+m2+m3)/(total*3))*100;
// }
// function marksReport(m1,m2,m3){
//   return {avg: average(m1,m2,m3), perc: percentage(m1,m2,m3)};
// }

// function customIndexOf(str,char){
//   for(let i=0;i<str.length;i++) if(str[i]===char) return i;
//   return -1;
// }

// function removeVowels(sentence){ return sentence.replace(/[aeiou]/gi,''); }

// function countVowelPairs(line){
//   const vowels='aeiouAEIOU'; const counts={};
//   for(let i=0;i<line.length-1;i++){
//     const a=line[i], b=line[i+1];
//     if(vowels.includes(a) && vowels.includes(b)){
//       const p=a+b; counts[p]=(counts[p]||0)+1;
//     }
//   }
//   return counts;
// }

// function toMeters(km){return km*1000;}
// function toFeet(km){return km*3280.839895;}
// function toInches(km){return km*39370.07874;}
// function toCentimeters(km){return km*100000;}
// function convertDistance(km){
//   return {meters:toMeters(km),feet:toFeet(km),inches:toInches(km),centimeters:toCentimeters(km)};
// }

// function overtimePay(hours){
//   const extra=Math.max(0,hours-40);
//   return extra*12;
// }

// function currencyNotes(amount){
//   let remaining=amount;
//   const hundreds=Math.floor(remaining/100); remaining%=100;
//   const fifties=Math.floor(remaining/50); remaining%=50;
//   const tens=Math.floor(remaining/10); remaining%=10;
//   return {hundreds,fifties,tens,remainder:remaining};
// }


// // ==========================
// // Chapters 43–46
// // (Strings, Math, Date tasks – common functions)
// // ==========================

// // Example string & math utilities

// function charAtExample(str,pos){
//   return str.charAt(pos);
// }

// function replaceAll(str,find,replace){
//   return str.split(find).join(replace);
// }

// function roundExamples(num){
//   return {round:Math.round(num), floor:Math.floor(num), ceil:Math.ceil(num)};
// }

// function absoluteValue(num){ return Math.abs(num); }

// function randomDice(){ return Math.floor(Math.random()*6)+1; }

// function randomCoin(){
//   return Math.random()<0.5 ? "Heads" : "Tails";
// }

// function randomNumber1to100(){ return Math.floor(Math.random()*100)+1; }

// function parseWeight(input){
//   return parseFloat(input);
// }

// function currentDate(){ return new Date(); }

// function daysSinceRamadan(startDateStr){
//   const start=new Date(startDateStr);
//   const now=new Date();
//   const diff=now-start;
//   return Math.floor(diff/(1000*60*60*24));
// }

// function secondsSince(startOfYear){
//   const start=new Date(startOfYear);
//   const now=new Date();
//   return Math.floor((now-start)/1000);
// }
