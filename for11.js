`For11. n butun soni va a haqiqiy soni berilgan (n > 0). a ning n - darajasini aniqlovchi programma tuzilsin.
a^n=a*a*a...a;`;

a = 5; //son
n = 4; //daraja

let mul = 1;

for (let i = 1; i <= n; i++) {
  mul *= a;
}
console.log(mul);