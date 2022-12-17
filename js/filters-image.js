import { renderPictures } from './draw-picture.js';
import { debounce, getUniqueArray } from './util.js';

const RANDOM_PICTURES_COUNT = 10;

const filtersForm = document.querySelector('.img-filters');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterPopular = document.querySelector('#filter-discussed');

const comparePictures = (firstPicture, secondPicture) => secondPicture.comments.length - firstPicture.comments.length;
const getPicturesSorted = (pictures) => pictures.slice().sort(comparePictures);

const hidePictures = () => {
  const picture = document.querySelectorAll('.picture');
  picture.forEach((pictureElement) => {
    pictureElement.remove();
  });
};

const removeActive = () => {
  const activeButton = document.querySelector('.img-filters__button--active');
  activeButton.classList.remove('img-filters__button--active');
};

const renderFiltredPictures = (array, button) => {
  removeActive();
  button.classList.add('img-filters__button--active');
  hidePictures();
  renderPictures(array);
};

const showFilteredPictures = (pictures) => {
  renderPictures(pictures);
  filtersForm.classList.remove('img-filters--inactive');

  filterDefault.addEventListener('click', debounce(() => {
    renderFiltredPictures(pictures, filterDefault);
  }));

  filterRandom.addEventListener('click', debounce(() => {
    renderFiltredPictures(getUniqueArray(pictures, RANDOM_PICTURES_COUNT), filterRandom);
  }));

  filterPopular.addEventListener('click', debounce(() => {
    renderFiltredPictures(getPicturesSorted(pictures), filterPopular);
  }));
};

export { showFilteredPictures };
