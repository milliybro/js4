`For8. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n`

let n = 4;

let sum = 0;

for (let i = 1; i <= n; i++) {
  sum += 1 / i;
}
console.log(sum);
