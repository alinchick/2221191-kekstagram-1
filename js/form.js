import { validateForm } from './validation.js';
import { resizeImage, deleteHandlers } from './scale-image.js';
import { changeFilter, deleteSlider } from './filter-image.js';

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const body = document.querySelector('body');

//const previewImage = document.querySelector('.img-upload__preview').querySelector('img');
//const scaleControlValue = document.querySelector('.scale__control--value');
//const scaleControlSmaller = document.querySelector('.scale__control--smaller');
//const scaleControlBigger = document.querySelector('.scale__control--bigger');

const imageUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectsField = document.querySelector('.img-upload__effects');

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

//Шаблон уведомления успешной отправки
const templateSuccesMessage = document.querySelector('#success').content.querySelector('section');

//Показать сообщение об успешной загрузке
const showSuccessMessage = () => {
  const messageSuccessPopup = templateSuccesMessage.cloneNode(true);
  messageSuccessPopup.style.zIndex = 100;
  document.body.append(messageSuccessPopup);

  const button = messageSuccessPopup.querySelector('button');

  button.addEventListener('click', () => {
    messageSuccessPopup.remove();
    closeUploadWindow();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      messageSuccessPopup.remove();
      closeUploadWindow();
    }
  });
};

//Шаблон уведомления ошибки
const templateErrorMessage = document.querySelector('#error').content.querySelector('section');

//Показать сообщение об ошибке
const showErrorMessage = () => {
  const messageErrorPopup = templateErrorMessage.cloneNode(true);
  messageErrorPopup.style.zIndex = 100;
  document.body.append(messageErrorPopup);

  const button = messageErrorPopup.querySelector('button');
  button.addEventListener('click', () => {
    messageErrorPopup.remove();
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      messageErrorPopup.remove();
      document.addEventListener('keydown', onEscPress);
    }
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

const renderUploadWindow = () => {
  imageUploadPreview.removeAttribute('class');
  imageUploadPreview.removeAttribute('style');

  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  uploadCancel.addEventListener('click', onCloseButtonPress);
  document.addEventListener('keydown', onEscPress);
  effectsField.addEventListener('change', changeFilter);
  resizeImage();
};

//Обработчик на открытие редктирования изобржения
uploadFile.addEventListener('change', () => {
  renderUploadWindow();
});

//Отправка формы
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm(form, hashtagsInput, commentInput)) {
    showSuccessMessage();
  }
  else {
    document.removeEventListener('keydown', onEscPress);
    showErrorMessage();
  }
});

export { form, uploadFile };
