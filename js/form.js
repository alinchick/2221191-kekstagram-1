import { validateForm, onFocusPreventClose } from './validation.js';
import { resizeImage, deleteHandlers } from './scale-image.js';
import { changeFilter, deleteSlider } from './effects-image.js';
import { sendData } from './api.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

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

//Показать сообщение об отправке
const showUploadMessage = (isError) => {
  const messageName = isError ? 'error' : 'success';
  const templateMessage = document.querySelector(`#${messageName}`).content.querySelector('section');
  const popupMessage = templateMessage.cloneNode(true);
  popupMessage.style.zIndex = 100;
  document.body.append(popupMessage);

  const buttonClose = popupMessage.querySelector('button');
  buttonClose.addEventListener('click', () => {
    popupMessage.remove();
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
    const file = imageChoose.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      imageUploadPreview.src = URL.createObjectURL(file);
    }
  });

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (validateForm(form, hashtagsInput, commentInput)) {
      sendData(() => {
        blockSubmitButton();
        setTimeout(showUploadMessage, 1500);
      },
      () => {
        showUploadMessage(true);
      },
      new FormData(evt.target), unblockSubmitButton);
    }
  });
};

export { renderUploadWindow, closeUploadWindow, showUploadMessage };
