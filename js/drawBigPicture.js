const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const body = document.querySelector('body');
const commentList = document.querySelector('.social__comments');
const commentElement = commentList.querySelector('.social__comment');
const commenstLoader = document.querySelector('.comments-loader');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');

const createComment = (comment) => {
  const commentObject = commentElement.cloneNode(true);
  commentObject.querySelector('.social__picture').src = comment.avatar;
  commentObject.querySelector('.social__picture').alt = comment.name;
  commentObject.querySelector('.social__text').textContent = comment.message;
  return commentObject;
};

const createCommentFragment = (array) => {
  const commentFragment = document.createDocumentFragment();
  for (const comment of array) {
    const creatingComment = createComment(comment);
    commentFragment.appendChild(creatingComment);
  }
  commentList.appendChild(commentFragment);
};

const renderBigPhoto = (bigPhoto) => {

  const closeBigPicture = () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onBigPictureEscPress);
    buttonClose.removeEventListener('click', onBigPictureCloseClick);
  };

  function onBigPictureCloseClick () {
    closeBigPicture();
  }

  function onBigPictureEscPress (evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeBigPicture();
    }
  }

  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  commenstLoader.classList.remove('hidden');
  commentList.innerHTML = '';

  bigPictureImg.querySelector('img').src = bigPhoto.url;
  bigPicture.querySelector('.likes-count').textContent = bigPhoto.likes;
  bigPicture.querySelector('.comments-count').textContent = bigPhoto.comments.length;
  bigPicture.querySelector('.social__caption').textContent = bigPhoto.description;

  createCommentFragment(bigPhoto.comments);
  commenstLoader.classList.add('hidden');

  buttonClose.addEventListener('click', onBigPictureCloseClick);
  document.addEventListener('keydown', onBigPictureEscPress);
};

export {renderBigPhoto};
