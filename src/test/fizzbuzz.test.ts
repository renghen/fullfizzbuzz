import {fizzbuzzOp} from '../fizzbuzz'; 

describe('fizzbuzz Op', () => {
  
  test("simple test", () => {
    expect(fizzbuzzOp(3)).toEqual("Fizz");
  });
  

  test("all are Fizz <= 1000 test ", () => {
    for(let i = 0;i < 1000; i+= 3){
      if (i % 15 == 0) continue;
      expect(fizzbuzzOp(i)).toEqual("Fizz");
    }
  });

  test("all are Buzz <= 1000 test ", () => {
    for(let i = 0;i < 1000; i+= 5){
      if (i % 15 == 0) continue;
      expect(fizzbuzzOp(i)).toEqual("Buzz");
    }
  });

  test("all are FizzBuzz <= 1000 test ", () => {
    for(let i = 0;i < 1000; i+= 15){
      expect(fizzbuzzOp(i)).toEqual("FizzBuzz");
    }
  });

  test("all are normal integers <= 1000 test ", () => {
    for(let i = 0;i < 1000; i+= 1){
      if ((i % 3 == 0) || (i % 5 == 0) ) continue;
      expect(fizzbuzzOp(i)).toEqual(`${i}`);
    }
  });
  
});
