`While6. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlari yig'indisini va raqamlari sonini chiqaruvchi programma tuzilsin.`;

let n = 8257;

sum = 0;
count = 0;

while (n / 10 >= 1) {
  c = n % 10;
  n = (n - c) / 10;

  count++;
  sum += c;
}
sum += n;

console.log("Yig`indi: ", sum);
console.log("Soni: ", ++count);
