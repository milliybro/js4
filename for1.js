`For1. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b xam chiqarilsin).`;

a = 5;
b = 20;

let count = 0;

for (let i = a; i <= b; i++) {
   console.log(i);
   count++;
}
console.log(`chiqarilgan sonlar soni: `, count);
