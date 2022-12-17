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

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

function throttle (callback, delayBetweenFrames) {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();
    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
}

const getUniqueArray = (arr, count) => {
  const array = arr.slice();
  const uniqueArray = [];
  for (let i = 0; i < count; i++) {
    const randomIndex = getRandomPositiveInteger(0, array.length - 1);
    uniqueArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }
  return uniqueArray;
};

export {getRandomPositiveInteger,
  getRandomArrayElement,
  getId,
  getCommentId,
  isEscapeKey,
  isRightString,
  debounce,
  throttle,
  getUniqueArray};
