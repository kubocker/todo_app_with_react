

export const sum = (nums: number[]) => nums.reduce((a, x) => a + x);


export const generateRandomString = () => {
  const chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randStr: string = '';
  for (let _i = 0; _i < 20; _i++) {
    randStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return randStr;
}
