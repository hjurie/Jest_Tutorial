export const add = (num1: number, num2: number) => num1 + num2;

export interface User {
  name: string;
  age: number;
  gender: string;
}

export const connectUserDB = (): Promise<User> => {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        name: "Mike",
        age: 30,
        gender: "male",
      });
    }, 500);
  });
};

export const disconnectDB = (): Promise<void> => {
  return new Promise((res) => {
    setTimeout(() => {
      res();
    }, 500);
  });
};
