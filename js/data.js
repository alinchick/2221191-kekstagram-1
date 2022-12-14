import {getRandomPositiveInteger} from './util.js';
import {getRandomArrayElement} from './util.js';
import {getId} from './util.js';
import {getCommentId} from './util.js';

const USERS_COUNT = 25;
const COMMENTS_COUNT = 12;

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
  'ляля',
  'Друзья, жизнь прекрасна!',
  'Ребят, всем здоровья',
  'Здесь я должен что-то написать, но я не придумал',
  'фотка прикл)',
];

const createComment = () =>
  ({
    id: getCommentId(),
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES),
  });

let x = 0;

const createPost = () => {
  x = getId();
  return {
    id: x,
    url: `photos/${x}.jpg`,
    description: getRandomArrayElement(DESCRIPTION),
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: COMMENTS_COUNT}, createComment),
  };
};


const generatePosts = () => Array.from({length: USERS_COUNT}, createPost);

export {generatePosts};
