`While5. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarini teskari tartibda chiqaruvchi programma tuzilsin.`;

let n = 246;

let sum = 0;

while (n / 10 >= 1) {
  a = n % 10;
  n = (n - a) / 10;
  sum += a.toString();
}
sum += n.toString();

sum = +sum;
console.log(sum);
