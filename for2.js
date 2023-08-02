`For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi progma tuzilsin.`

a = 5;
b = 20;

let count = 0;

for (let i = --b; i > a; i--) {
   console.log(i);
   count++;
}
console.log(`chiqarilgan sonlar soni: `, count);