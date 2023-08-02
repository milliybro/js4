`While8. n butun soni berilgan (n > 0). Bo'lib butun va qoldiq qismlarini aniqlash orqali, berilgan son raqamlarining orasida toq raqamlar bor-yo'qligini aniqlovchi programma tuzilsin.`

let n = 81;

count = 0;

while (n / 10 >= 1) {
  c = n % 10;
  if (c %2 ==1) {
    count++;
  }

  n = (n - c) / 10;
}
if (n % 2==1) {
  console.log("toq son bor");}
  else if(count >= 1){
   console.log("toq son bor");
  }
else {
  console.log("toq son yuq");
}