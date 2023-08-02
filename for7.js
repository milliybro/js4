`For7. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarining yig'indisini chiqaruvchi programma tuzilsin.`


let a = 5;
let b = 8;

let sum = 0;

for (let i = a; i <= b; i++) {
  sum += i*i;
}

console.log(sum);
