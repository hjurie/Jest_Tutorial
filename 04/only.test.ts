import { add } from "./fn";

let num = 0;

test("0 더하기 1은 1", () => {
  expect(add(num, 1)).toBe(1);
});

test("0 더하기 2은 2", () => {
  expect(add(num, 2)).toBe(2);
});

test("0 더하기 3은 3", () => {
  expect(add(num, 3)).toBe(3);
});

// 여러 테스트 중에 하나의 테스트만 스킵해야 할때는 뒤에 skip을 붙입니다.
// test("0 더하기 4은 4", () => {
test.skip("0 더하기 4은 4", () => {
  expect(add(num, 4)).toBe(4);
  num = 10;
});

// 여러 테스트 중에 하나의 테스트를 체크해야 할때는 뒤에 only를 붙입니다.
// test.only("0 더하기 5은 5", () => {
test("0 더하기 5은 5", () => {
  expect(add(num, 5)).toBe(5);
});

/**
 * only와 skip을 이용하여 어디에서 오류가 발생하는지를 체크할 수 있습니다.
 */
