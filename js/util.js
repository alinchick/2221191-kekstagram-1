function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

let number = 0;

const getId = () => {
  number ++;
  return number;
};

let commentNumber = 26;

const getCommentId = () => {
  commentNumber ++;
  return commentNumber;
};

const isEscapeKey = (evt) => evt.key === 'Escape';
const isRightString = (str, maxLen) => String(str).length <= maxLen;

export {getRandomPositiveInteger,
  getRandomArrayElement,
  getId,
  getCommentId,
  isEscapeKey,
  isRightString};
