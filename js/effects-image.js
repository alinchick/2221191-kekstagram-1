const imageUploadPreview = document.querySelector('.img-upload__preview').querySelector('img');
const effectLevelSlider = document.querySelector('.effect-level__slider');
//const effectLevelValue = document.querySelector('.effect-level__value');
const uploadImageEffectLevel = document.querySelector('.img-upload__effect-level');

/*
const EFFECTS = {chrome: { filter: 'grayscale', units: '', options: { range: { min: 0, max: 1 }, start: 1, step: 0.1, } },
  sepia: { filter: 'sepia', units: '', options: { range: { min: 0, max: 1, }, start: 1, step: 0.1, } },
  marvin: { filter: 'invert', units: '%', options: { range: { min: 0, max: 100, }, start: 100, step: 1, } },
  phobos: { filter: 'blur', units: 'px', options: { range: { min: 0, max: 3, }, start: 3, step: 0.1, } },
  heat: { filter: 'brightness', units: '', options: { range: { min: 1, max: 3, }, start: 3, step: 0.1, } }, };
  */

//const generateSlider = () => {
  //uploadImageEffectLevel.classList.add('hidden');
  /*
  noUiSlider.create(effectLevelSlider, {
    range: {min: 0, max: 100},
    start: 100,
    step: 0.1,
    format: {
      to: (value) => (Number.isInteger(value)) ? value.toFixed(0) : value.toFixed(1),
      from: (value) => parseFloat(value),
    },
  });
};
*/

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
  //effectLevelSlider.noUiSlider.updateOptions(EFFECTS[effect].options);
  //effectLevelSlider.noUiSlider.on('update', () => {
  //  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  //  imageUploadPreview.style.filter = `${EFFECTS[effect].filter}(${effectLevelValue.value}${EFFECTS[effect].unit})`;
  //});
};

const deleteSlider = () => {
  uploadImageEffectLevel.classList.add('hidden');
};

export { changeFilter, deleteSlider };
