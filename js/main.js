const USERS_COUNT = 25;

const NAMES = [
  'Иван',
  'Мария',
  'Юлия',
  'Арина',
  'Виктор',
  'Светлана',
  'Сергей',
  'Владислав',
  'Захар',
];

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION = [
  'Сегодня на чилле, на расслабоне)',
  'Сижу-пержу',
  'Друзья, жизнь прекрасна!',
  'Ребят, всем здоровья',
  'Здесь я должен что-то написать, но я не придумал',
  'фотка прикл)',
];

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}

function checkStringLength (string, length) {
  return string.length <= length;
}

checkStringLength();

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

let number = 0;

const getId = () => {
  number ++;
  return number;
};

const createUser = () =>
  ({
    id: getId(),
    url: `photos/{{{${getRandomPositiveInteger(1, 25)}}}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(15, 200),
    comments: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
    avatar: `img/avatar-{{${getRandomPositiveInteger(1, 6)}}}.svg`,
  });

Array.from({length: USERS_COUNT}, createUser);
