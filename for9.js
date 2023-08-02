`For9. n butun soni berilgan (n > 0). Quyidagi ko'paytmani hisoblovchi programma tuzilsin. S=1.1*1.2* 1.3*... *n`

let n = 1.3;

let mul = 1;

for (let i = 1.1; i <= n; i+=0.1) {
  mul *= i;
}
console.log(mul);
