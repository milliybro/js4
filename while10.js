`While10. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.`;

let n = 2;

count = 0;

i = 1;
while (n >= i) {
  if (n % i == 0) {
    count++;
  }
  i++;
}
if (count < 3) {
  console.log("Tub");
} else {
  console.log("Tub emas");
}
