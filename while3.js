`While3. n butun soni berilgan (n > 0). Agar n soni 3 ning darajasi bo'lsa "3 - ning darajasi", aks xolda "3 - ning darajasi emas” degan natija chiqaruvchi programma tuzilsin. Qoldiqli bo'lish va bo'lish amallarini ishlatmang.`;

let n = 27;

function pow(n) {
   while (n > 1) {
     if (n % 3 != 0) {
       return false;
     }
     n = n / 3;
   }
   return n == 1;
 }
 
 if (pow(n)) {
   console.log("3- ning darajasi");
 } else {
   console.log("3- ning darajasi emas");
 }