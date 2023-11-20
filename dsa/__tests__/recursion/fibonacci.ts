import fibonacci from "@code/recursion/fibonacci";

test("fibonacci", function () {
  expect(fibonacci(5)).toEqual(120);
  expect(fibonacci(0)).toEqual(1);
  expect(fibonacci(-5)).toEqual(1);
});
