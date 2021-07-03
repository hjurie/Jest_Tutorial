import { add } from "./fn";

beforeAll(() => console.log("밖 BeforeAll")); // 1
beforeEach(() => console.log("밖 beforeEach")); // 2, 6
afterEach(() => console.log("밖 afterEach")); // 4, 10
afterAll(() => console.log("밖 afterAll")); // 12

test("0 + 1 = 1", () => {
  console.log("밖 테스트");
  expect(add(0, 1)).toBe(1); // 3
});

describe("Car 관련 작업", () => {
  beforeAll(() => console.log("안 BeforeAll")); // 5
  beforeEach(() => console.log("안 beforeEach")); // 7
  afterEach(() => console.log("안 afterEach")); // 9
  afterAll(() => console.log("안 afterAll")); // 11

  test("0 + 1 = 1", () => {
    console.log("안 테스트");
    expect(add(0, 1)).toBe(1); // 8
  });
});
