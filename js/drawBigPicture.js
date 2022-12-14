const bigPicture = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');
const body = document.querySelector('body');
const commentList = document.querySelector('.social__comments');
const commentElement = commentList.querySelector('.social__comment');
const commenstLoader = document.querySelector('.comments-loader');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');

let commentsCount = 0;

const createComment = (comment) => {
  const commentObject = commentElement.cloneNode(true);
  commentObject.querySelector('.social__picture').src = comment.avatar;
  commentObject.querySelector('.social__picture').alt = comment.name;
  commentObject.querySelector('.social__text').textContent = comment.message;

  commentList.appendChild(commentObject);
};

const createComments = (comments) => {
  for (const comment of comments.slice(commentsCount, commentsCount + 5)) {
    createComment(comment);
    commentsCount++;
  }
  bigPicture.querySelector('.social__comment-count').innerHTML = `${commentsCount} из <span class="comments-count">${comments.length}</span> комментариев`;
  if (commentsCount === comments.length) {
    bigPicture.querySelector('.social__comments-loader').classList.add('hidden');
  }
  else {
    bigPicture.querySelector('.social__comments-loader').classList.remove('hidden');
  }
};

const renderBigPhoto = (bigPhoto) => {

  const closeBigPicture = () => {
    bigPicture.classList.add('hidden');
    body.classList.remove('modal-open');
    document.removeEventListener('keydown', onBigPictureEscPress);
    buttonClose.removeEventListener('click', onBigPictureCloseClick);
    commentsCount = 0;
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

  createComments(bigPhoto.comments);
  bigPicture.querySelector('.social__comments-loader').onclick = () => createComments(bigPhoto.comments);

  buttonClose.addEventListener('click', onBigPictureCloseClick);
  document.addEventListener('keydown', onBigPictureEscPress);
};

export {renderBigPhoto};
