
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const randomNumber = () => Math.floor(Math.random() * 10000 + 1);

const randomLetters = (length) => {
  let result = '';
  const chars = characters;
  const charactersLength = chars.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
};

const getStringFromDate = () => {
  const date = Date.now();
  /* console.log(typeof(date), date) */
  const str = date.toString().split('').reverse().slice(5, 8).join('')
 /*  console.log(typeof(str), str) */
  return str;
};

const createApiKey = (a, b, c) => {
  const newKey = a + b + c;
  return newKey;
};

module.exports = {
    createApiKey,
    getStringFromDate,
    randomNumber,
    randomLetters
}