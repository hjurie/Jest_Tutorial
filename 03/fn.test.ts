import { getName, getAge } from "./fn";

// done을 이용하여 비동기를
test("1초 후에 받아온 이름은 Mike", (done) => {
  function callback(name: string) {
    try {
      expect(name).toBe("Mike");
      done();
    } catch (error) {
      done();
    }
  }

  getName(callback);
});

test("1초 후에 받아온 나이는 30", async () => {
  // return getAge().then((age) => expect(age).toBe(30));

  const age = await getAge();
  return expect(age).toBe(30);
});

/**
 * resolves - Promise 성공
 * rejects - Promise 실패
 */

test("1초 후에 받아온 나이는 30", async () => {
  await expect(getAge()).resolves.toBe(30);
});
