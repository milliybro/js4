`For13. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib quyidagi a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi va yig'indini hisoblovchi programma tuzilsin. 
S = 1+a+a^2 + a^3 + ... a^n`;

let a = 2; //son
let n = 3; //daraja

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum +=Math.pow(a, i);
  console.log(a**i);
}
console.log(sum);
