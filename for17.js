`For17. A va B butun soni berilgan (A < B). A va B sonlari orasidagi barcha butun sonlarni chiqaruvchi programma tuzilsin. Bunda A soni 1 marta, (A + 1) soni 2 marta chiqariladi va xokazo.`

let A = 4;
let B = 7;

for (let i = A; i <= B; i++) {
  for (let j = 1; j <= i - A + 1; j++) {
    console.log(i);
  }
}
