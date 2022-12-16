const SCALE_STEP = 25;
const RANGE_MIN = 25;
const RANGE_MAX = 100;

const previewImage = document.querySelector('.img-upload__preview').querySelector('img');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControlValue = document.querySelector('.scale__control--value');

const checkValue = (valueRecycled) => {
  if (valueRecycled <= RANGE_MIN || valueRecycled > RANGE_MAX) {
    valueRecycled = valueRecycled <= RANGE_MIN ? RANGE_MIN : RANGE_MAX;
  }
  return valueRecycled;
};

const changeValue = (value) => {
  const num = checkValue(Number(scaleControlValue.value.replace('%', '')) + SCALE_STEP * value);
  scaleControlValue.value = `${num}%`;
  previewImage.style.transform = `scale(${num / 100})`;
};

const funcBigger = () => changeValue(1);

const funcSmaller = () => changeValue(-1);


const onResizeButtonClick = () => {
  scaleControlBigger.addEventListener('click', funcBigger);
  scaleControlSmaller.addEventListener('click', funcSmaller);
};

const deleteHandlers = () => {
  scaleControlBigger.removeEventListener('click', funcBigger);
  scaleControlSmaller.removeEventListener('click', funcSmaller);
};

export { onResizeButtonClick, changeValue, deleteHandlers };
