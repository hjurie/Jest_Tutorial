import { createUser, User } from "./fn";

const mockFn = jest.fn((num) => num + 1);

mockFn(10);
mockFn(20);
mockFn(30);

// console.log(mockFn.mock.calls);
// console.log(mockFn.mock.results);
test("mock 함수는 두번 호출 되었습니다.", () => {
  expect(mockFn.mock.calls.length).toBe(3);
  expect(mockFn.mock.results.length).toBe(3);
});

test("10에서 1 증가한 값이 반환된다.", () => {
  expect(mockFn.mock.calls[0][0]).toBe(10); // 받은 인자값
  expect(mockFn.mock.results[0].value).toBe(11); // 결과
});
test("20에서 1 증가한 값이 반환된다.", () => {
  expect(mockFn.mock.calls[1][0]).toBe(20); // 받은 인자값
  expect(mockFn.mock.results[1].value).toBe(21); // 결과
});
test("30에서 1 증가한 값이 반환된다.", () => {
  expect(mockFn.mock.calls[2][0]).toBe(30); // 받은 인자값
  expect(mockFn.mock.results[2].value).toBe(31); // 결과
});

// 당장 필요한 함수가 존재 하지 않거나 급하게 처리해야할때 다음과 같이 mock 함수를 작성하여 테스트합니다.  이후 함수를 생성하여 교체하고 테스트합니다.

// 홀수 여부 확인
const mockFn2 = jest.fn((num) => (num % 2 !== 0 ? true : false));
const result = [1, 2, 3, 4, 5].filter((n) => mockFn2(n));

test("홀수 찾기 결과", () => {
  expect(result).toStrictEqual([1, 3, 5]);
});

// 비동기 mock 함수
const mockFn3 = jest.fn();
mockFn3.mockResolvedValue({ name: "Mike" });

test("이름은 Mike", async () => {
  const result = await mockFn3();
  expect(result.name).toBe("Mike");
});

// 실제 데이터 베이스 접근을 하지 않고 반환값을 미리 지정하여 테스트합니다. ( 데이터베이스 생성 이슈 )
jest.mock("./fn");
(createUser as jest.Mock<Promise<User>>).mockResolvedValue({ name: "Mike" });
test("데이터 베이스 실제 접근이 아닌 mock으로 대체하기", async () => {
  const user = await createUser();
  expect(user.name).toBe("Mike");
});

/**
 * toBeCalled - 한번이라도 호출되었는지 체크
 * toBeCalledTimes - 총 몇번 호출되었는지 체크
 * toBeCalledWith - 인자 전달받은 함수가 있는 체크
 * lastCalledWith - 마지막 호출시 전달 받은 함수의 인자값 체크
 */

const mockFn4 = jest.fn();
mockFn4(10, 20);
mockFn4();
mockFn4(30, 40);
test("한번 이상 호출?", () => {
  expect(mockFn4).toBeCalled();
});

test("정확히 세번 호출?", () => {
  expect(mockFn4).toBeCalledTimes(3);
});

test("10이랑 20 전달받은 함수가 있는가?", () => {
  expect(mockFn4).toBeCalledWith(10, 20);
});

test("마지막 함수는 30이랑 40 받았는가?", () => {
  expect(mockFn4).lastCalledWith(30, 40);
});
