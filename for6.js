`For6. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.`

let a = 5;
let b = 8;

let mul = 1;

for (let i = a; i <= b; i++) {
  mul *= i;
}

console.log(mul);
