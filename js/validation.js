import {isRightString, isEscapeKey} from './util.js';

const HASHTAG_REGULAR_EXP = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
const COMMENT_MAX_LENGTH = 140;

const isRightLengthComment = (comment) => isRightString(comment, COMMENT_MAX_LENGTH);


const isRightHashtags = (value) => {
  if (value === '') {
    return true;
  }
  const hashtagsArray = value.toString().split(' ');
  const uniqueHashtagsArray = [...new Set(hashtagsArray)];
  for (const hashtag of hashtagsArray) {
    if (!HASHTAG_REGULAR_EXP.test(hashtag)) {
      return false;
    }
  }
  return hashtagsArray.length <= 5 && hashtagsArray.length === uniqueHashtagsArray.length;
};

const onFocusPreventClose = (evt) => {
  if (isEscapeKey(evt)) {
    evt.stopPropagation();
  }
};

const validateForm = (form, hashtags, comment) => {
  const pristine = new Pristine(form, {
    classTo: 'img-upload__field-wrapper',
    errorTextParent: 'img-upload__field-wrapper',
    errorTextClass: 'img-upload__field-wrapper__error'
  });
  pristine.addValidator(hashtags, isRightHashtags, 'Поле ввода имеет уникальные хештеги, которые начинаются с решетки и имеют длину не более 20 символов');
  pristine.addValidator(comment, isRightLengthComment, 'Комментарий не более 140 символов');

  return pristine.validate();
};

export {validateForm, onFocusPreventClose};
