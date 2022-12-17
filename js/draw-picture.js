import { renderBigPhoto } from './draw-big-picture.js';

const pictureTemplate = document.querySelector('#picture').content;
const picturesList = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const createPictureElement = (obj) => {
  const userPicture = pictureTemplate.querySelector('.picture').cloneNode(true);
  userPicture.querySelector('.picture__img').src = obj.url;
  userPicture.querySelector('.picture__comments').textContent = obj.comments.length;
  userPicture.querySelector('.picture__likes').textContent = obj.likes;

  userPicture.addEventListener('click', () => {
    renderBigPhoto(obj);
  });
  fragment.appendChild(userPicture);
};

const renderPictures = (array) => {
  for (const obj of array) {
    createPictureElement(obj);
  }
  return picturesList.appendChild(fragment);
};

export { renderPictures };
