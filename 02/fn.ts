export const makeUser = (name: string, age: number) => ({
  name,
  age,
  gender: undefined,
});

export const throwError = () => {
  throw new Error("Error!!!");
};
