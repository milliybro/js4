`For12. n butun soni va a haqiqiy soni berilgan (n > 0). Bir sikldan foydalanib a ning 1 dan n gacha bo'lgan barcha darajalarini chiqaruvchi programma tuzilsin.`

let a = 2; //son
let n = 5; //daraja

for (let i = 1; i <= n; i++) {
  let mul = Math.pow(a, i);
  console.log(mul);
}