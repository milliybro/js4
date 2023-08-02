`For16. N butun soni berilgan. Quyidagi yig'indini chiqaruvchi programma tuzilsin. 
S = 1^1 + 2^2 + … + N^N`

let N = 3;
let K = 3;

let sum = 0;

for (i = 1; i <= N; i++) {
  sum += Math.pow(i, i);
}
console.log(sum);
