import { makeUser, throwError } from "./fn";

test("이름과 나이를 전달받아서 객체를 반환해줘", () => {
  // 객체나 배열은 재귀적으로 돌면서 값을 확인해야 하기 때문에 toEqual을 사용해야 합니다.
  // expect(makeUser("Mike", 30)).toBe({  name: "Mike", age: 30}); // Error

  expect(makeUser("Mike", 30)).toEqual({
    name: "Mike",
    age: 30,
  });

  // 좀 더 엄격하게 테스트를 할때 사용합니다. ( 반환되는 gender값이 undefined까지 체크해야합니다. )
  expect(makeUser("Mike", 30)).toStrictEqual({
    name: "Mike",
    age: 30,
    gender: undefined,
  });
});

/**
 * toBeNull - 값이 null인지 체크합니다.
 * toBeUndefined - 값이 undefined인지 체크합니다.
 * toBeDefined -
 */

test("Null Check", () => {
  expect(null).toBeDefined();
});

/**
 * toBeTruthy - 값이 true인지 체크합니다.
 * toBeFalsy - 값이 false인지 체크합니다.
 */

test("0은 false입니다.", () => {
  expect(0).toBeFalsy();
});

/**
 * toBeGreaterThan - 크다
 * toBeGreaterThanOrEqual - 크거나 같다
 * toBeLessThan - 작다
 * toBeLessThanOrEqual - 작거나 같다
 */

test("ID는 10자 이하여야 합니다.", () => {
  const id: string = "THE_BLACK";
  expect(id.length).toBeLessThanOrEqual(10);
});

/**
 * toBeCloseTo - 컴퓨터는 2진법을 사용하기 때문에 일부 소수점계산은 정확한 자리수로 계산이 불가능합니다.  그런 테스트를 위해 다음으로 비교합니다.
 */

test("0.1 더하기 0.2는 0.3입니다.", () => {
  // expect(0.1 + 0.2).toBe(0.3);
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

/**
 * toMatch
 */

test("Hello World에 h 라는 글자가 있나?", () => {
  // expect("Hello World").toMatch(/H/);
  expect("Hello World").toMatch(/h/i); // 정규식
});

/**
 * toContain - 배열 내부
 */

test("유저 리스트에 Mike가 있는가?", () => {
  const user = "Mike";
  const userList = ["Tom", "Mike", "Kai"];
  expect(userList).toContain(user);
});

/**
 * toThrow - 에러 체크
 */

test("이거 에러나나요?", () => {
  // expect(() => throwError()).toThrow();
  expect(() => throwError()).toThrow("Error!!!"); // 특정에러 찾기
});
