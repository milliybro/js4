`For18. Sonning barcha bo’luvchilarini, ularning sonini va yig’indisini chiqaruvchi dastur tuzing.`;

let n = 24;

let sum = 0;
let count = 0;

for (let i = 1; i <= n; i++) {
  if (n % i == 0) {
    console.log(i);
    count++;
    sum+=i
  }
}
console.log(`Soni`,count);
console.log(`Yig'indi`,sum);
