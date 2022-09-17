//Функция возвращает случайное целое число в переданном диапазоне включительно;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive();

//Функция для проверки максимальной длины строки;
function checkCommentLength (string, limit) {
  return string.length <= limit;
}
checkCommentLength();
