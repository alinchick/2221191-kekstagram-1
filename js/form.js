import { validateForm, onFocusPreventClose } from './validation.js';
import { resizeImage, deleteHandlers } from './scale-image.js';
import { changeFilter, deleteSlider } from './filter-image.js';
import { sendData } from './api.js';

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const imageChoose = document.querySelector('.img-upload__start input[type=file]');
const body = document.querySelector('body');

const buttonSubmitUpload = document.querySelector('.img-upload__submit');

const imageUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectsField = document.querySelector('.img-upload__effects');

//Заблокировать кнопку отправки формы
const blockSubmitButton = () => {
  buttonSubmitUpload.textContent = 'Публикую...';
  buttonSubmitUpload.disabled = true;
};

//Разблокировать кнопку отправки формы
const unblockSubmitButton = () => {
  buttonSubmitUpload.disabled = false;
  buttonSubmitUpload.textContent = 'Опубликовать';
};

//Закрыть окно редактирования
const closeUploadWindow = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  uploadCancel.removeEventListener('click', onCloseButtonPress);
  document.removeEventListener('keydown', onEscPress);
  deleteSlider();
  deleteHandlers();
  form.reset();
};

const showAlert = (isError) => {
  const templateName = isError ? 'error' : 'success';
  const template = document.querySelector(`#${templateName}`).content.querySelector('section');
  const popup = template.cloneNode(true);
  popup.style.zIndex = 100;
  document.body.append(popup);
  const button = popup.querySelector('button');
  button.addEventListener('click', () => {
    popup.remove();
    closeUploadWindow();
  });
};

//Закрыть окно редактирования(кнопка)
function onCloseButtonPress () {
  closeUploadWindow();
}

//Закрыть окно редактирования(esc)
function onEscPress (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUploadWindow();
  }
}

//Показать окно редактирования изображения
const openUploadWindow = () => {
  imageUploadPreview.removeAttribute('class');
  imageUploadPreview.removeAttribute('style');

  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  uploadCancel.addEventListener('click', onCloseButtonPress);
  document.addEventListener('keydown', onEscPress);
  commentInput.onkeydown = (evt) => onFocusPreventClose(evt);
  hashtagsInput.onkeydown = (evt) => onFocusPreventClose(evt);
  effectsField.addEventListener('change', changeFilter);
  resizeImage();
};

const renderUploadWindow = () => {
  uploadFile.addEventListener('change', () => {
    openUploadWindow();
  });

  imageChoose.addEventListener('change', () => {
    const image = imageChoose.files[0];
    imageUploadPreview.src = URL.createObjectURL(image);
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (validateForm(form, hashtagsInput, commentInput)) {
      sendData(() => {
        blockSubmitButton();
        setTimeout(showAlert, 1500);
      },
      () => {
        showAlert(true);
      },
      new FormData(evt.target), unblockSubmitButton);
    }
  });
};

export { renderUploadWindow, closeUploadWindow };
