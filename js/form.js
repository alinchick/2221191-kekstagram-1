import { validateForm } from './validation.js';

const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const form = document.querySelector('.img-upload__form');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');
const body = document.querySelector('body');


const closeUploadWindow = () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');

  uploadCancel.removeEventListener('click', onCloseButtonPress);
  document.removeEventListener('keydown', onEscPress);
  form.reset();
};

const templateSuccesMessage = document.querySelector('#success').content.querySelector('section');

const showSuccessMessage = () => {
  const messageSuccessPopup = templateSuccesMessage.cloneNode(true);
  messageSuccessPopup.style.zIndex = 100;
  document.body.append(messageSuccessPopup);
  const button = messageSuccessPopup.querySelector('button');
  button.addEventListener('click', () => {
    messageSuccessPopup.remove();
    closeUploadWindow();
  });
};

const templateErrorMessage = document.querySelector('#error').content.querySelector('section');

const showErrorMessage = () => {
  const messageErrorPopup = templateErrorMessage.cloneNode(true);
  messageErrorPopup.style.zIndex = 100;
  document.body.append(messageErrorPopup);
  const button = messageErrorPopup.querySelector('button');
  button.addEventListener('click', () => {
    messageErrorPopup.remove();
  });
};

function onCloseButtonPress () {
  closeUploadWindow();
}

function onEscPress (evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeUploadWindow();
  }
}

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');

  uploadCancel.addEventListener('click', onCloseButtonPress);
  document.addEventListener('keydown', onEscPress);
});

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (validateForm(form, hashtagsInput, commentInput)) {
    showSuccessMessage();
  }
  else {
    showErrorMessage();
  }
});

export {form, uploadFile };
