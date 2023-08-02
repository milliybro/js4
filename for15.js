`For15. N va K butun sonlari berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin. 
S = 1^K + 2^K + ... + N^K`;

let N = 3;
let K = 3;

let sum = 0;

for (i = 1; i <= N; i++) {
  sum += Math.pow(i, K);
}
console.log(sum);
