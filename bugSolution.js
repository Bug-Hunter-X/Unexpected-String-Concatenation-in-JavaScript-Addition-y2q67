function foo(a,b){
  return Number(a) + Number(b);
}
console.log(foo(1, "2")); // Output: 3
This corrected version explicitly converts both inputs using Number() to ensure that mathematical addition is always performed.