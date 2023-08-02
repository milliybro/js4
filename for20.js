`For20. Sonlarni quyidagi tartibda chiqaruvchi dastur tuzing. N = 5 bo’lganda,
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
`

let N = 5; 

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= i; j++) {
    console.log(j);
  }
}