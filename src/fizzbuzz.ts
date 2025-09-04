function fizzbuzz(N: number) {
  if (N <= 0) {
    console.error("input N should be greater than 1");
    return;
  }

  for (let i = 0; i < N; i++) {
    console.log(fizzbuzzOp(i));
  }
}

export function fizzbuzzOp(num: number) : string {
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else if (num % 5 == 0) {
    return "Buzz";
  } else {
    return `${num}`;
  }
}

fizzbuzz(100);
