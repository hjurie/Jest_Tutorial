export interface User {
  name: string;
}

export const createUser = (): Promise<User> => {
  return new Promise((res) => {
    setTimeout(() => {
      console.log("데이터 베이스 접근하여!!!");
      res({ name: "Mike" });
    }, 500);
  });
};
