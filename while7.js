`While7. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida 2 raqami bor-yo'qligini aniqlovchi programma tuzilsin.`;

let n = 126;

count = 0;

while (n / 10 >= 1) {
  c = n % 10;
  if (c == 2) {
    count++;
  }

  n = (n - c) / 10;
}
if (n == 2 || c == 2) {
  console.log("Ikki soni bor");
} else {
  console.log("Ikki soni yuq");
}
