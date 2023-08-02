`For10. n butun soni berilgan (n > 0). Shu sonning kvadratini quyidagi formula asosida hisoblovchi programma tuzilsin.
n^2=1+3+5+... + (2*n-1)
Har bir qo'shiluvchidan keyin natijani ekranga chiqarib boring. Natijda ekranda 1 dan n gacha bo'lgan sonlar kvadrati chiqariladi.`

let n = 5; 

let sum = 0;
let mul = 1;

for (let i = 1; i <= n; i++) {
  sum += mul;
  console.log("Qiymat " + mul + ": " + sum);
  mul += 2;
}

console.log(n+" kvadrati : " + ": " + sum);