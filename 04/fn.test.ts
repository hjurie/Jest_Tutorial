import { connectUserDB, disconnectDB, User } from "./fn";

let user: User;

// 모든 테스트들 시작전에 시행됩니다.
// beforeEach(async () => {
//   user = await connectUserDB();
// });

// 모든 테스트들 이후에 시행됩니다.
// afterEach(async () => {
//   await disconnectDB();
// });

// 모든 테스트 시작 전에 한번 시행됩니다.
beforeAll(async () => {
  user = await connectUserDB();
});

// 모든 테스트 이후에 한번 시행됩니다.
afterAll(async () => {
  await disconnectDB();
});

test("이름은 Mike", () => {
  expect(user.name).toBe("Mike");
});

test("나이는 30", () => {
  expect(user.age).toBe(30);
});

test("성별은 male", () => {
  expect(user.gender).toBe("male");
});
