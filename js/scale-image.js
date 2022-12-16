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

const getScaleBigger = () => changeValue(1);

const getScaleSmaller = () => changeValue(-1);


const resizeImage = () => {
  scaleControlBigger.addEventListener('click', getScaleBigger);
  scaleControlSmaller.addEventListener('click', getScaleSmaller);
};

const deleteHandlers = () => {
  scaleControlBigger.removeEventListener('click', getScaleBigger);
  scaleControlSmaller.removeEventListener('click', getScaleSmaller);
};

export { resizeImage, changeValue, deleteHandlers };
