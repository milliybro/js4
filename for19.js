`For19. n butun soni berilgan (n > 1). N sonini tub yoki tub emasligini aniqlovchi programma tuzilsin.`;

let n = 18;

function tub(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

if (tub(n)) {
  console.log(n + " tub son");
} else {
  console.log(n + " tub son emas");
}

