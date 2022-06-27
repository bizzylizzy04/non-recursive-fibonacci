// non recursive function
// 0 | 1 | 1 | 2 | 3 | 5 | 8 | 13 | 21 |

// fib(0) => 0
// fib(1) => fib(0) + 1 = 1
// fib(2) => fib(0) + fib(1) = 1
// fib(3) => fib(1) + fib(2) = 2
// fib(4) => fib(2) + fib(3) = 3
// fib(5) => fib(3) + fib(4) = 5
// fib(6) => fib(4) + fib(5) = 8
// fib(7) => fib(5) + fib(6) = 13
// fib(8) => fib(6) + fib(7) = 21

function fib(n){
  if(n == 0){
    return 0;
  } else if(n < 3){
    return 1;
  }

  let prev = 1; // (n-2) = 8
  let curr = 1; // (n-1) = 13

  for(let i = 2; i < n; i++){
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}
console.log(fib(8), 'is the output');

// recursive
function fibonacci(n){
  if(n < 3){
    return 1;
    }
  return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(8), 'fibonacci')
