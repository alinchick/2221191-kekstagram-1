//Функция возвращает случайное целое число в переданном диапазоне включительно;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Длина комментария не более 140 символов;
function checkCommentLength (comment, limit) {
  return comment.length <= limit;
}
console.log(checkCommentLength('Привет', 2));
