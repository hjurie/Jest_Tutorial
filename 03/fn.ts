export const getName = (callback: (name: string) => void) => {
  const name = "Mike";
  setTimeout(() => callback(name), 1000);
};

export const getAge = () => {
  const age = 30;
  return new Promise((res, rej) => {
    setTimeout(() => res(30), 1000);
  });
};
