const imageUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const uploadImageEffectLevel = document.querySelector('.img-upload__effect-level');

//Слайдер не реализован
const createSlider = () => {
  uploadImageEffectLevel.classList.add('hidden');
  noUiSlider.create(effectLevelSlider, {
    range: {min: 0, max: 100}, start: 100, step: 0.1,
    format: {
      to: (value) => (Number.isInteger(value)) ? value.toFixed(0) : value.toFixed(1),
      from: (value) => parseFloat(value),
    },
  });
};

const changeFilter = (evt) => {
  const effect = evt.target.value;
  if (effect === 'none') {
    uploadImageEffectLevel.classList.add('hidden');
    imageUploadPreview.removeAttribute('class');
    return;
  }
  uploadImageEffectLevel.classList.remove('hidden');
  imageUploadPreview.removeAttribute('class');
  imageUploadPreview.classList.add(`effects__preview--${effect}`);
};

const deleteSlider = () => {
  uploadImageEffectLevel.classList.add('hidden');
};

export { changeFilter, createSlider, deleteSlider };
