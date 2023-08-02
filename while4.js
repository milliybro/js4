`While4. n va m butun musbat sonlari berilgan (n > m). n sonini m soniga bo'lib butun va qoldiq qismlarini bo'lish va qoldiqni olish amallarini ishlatmasdan topuvchi programma tuzilsin.`;

let n = 18;
let m = 7;

count=0

while (n >= m) {
  n -= m;
  count++;
}

console.log(`butun qism`, count);
console.log(`qoldiq qism`, n);

