`For14. n butun soni berilgan (n > 0). Bir sikldan foydalangan holda quyidagi yig'indini hisoblovchi programma tuzilsin.
S = 1! + 2! + 3! + ... +n!`;

let n = 3;

let mul = 1;
let sum = 0;

for (let i = 1; i <= n; i++) {
  mul *= i;
  sum += mul;
}
console.log(sum);
