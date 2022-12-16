const previewImage = document.querySelector('.img-upload__preview').querySelector('img');
const effectSlider = document.querySelector('.effect-level__slider');
//const effectLevelValue = document.querySelector('.effect-level__value');
const uploadImageEffectLevel = document.querySelector('.img-upload__effect-level');

/*
const EFFECTS = {
  NONE: {
    range: {min: 0, max: 1,},
    start: 1,
    step: 0.1,
    connect: 'lower',
    format: {
      to: function (value) {
        return value;
      },
      from: function (value) {
        return parseFloat(value);
      }
    }
  },
  CHROME: {
    range: {min: 0, max: 1},
    start: 1,
    step: 0.1,
    format: {
      to: function (value) {
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      }
    }
  },
  SEPIA: {
    range: {min: 0, max: 1},
    start: 1,
    step: 0.1,
    format: {
      to: function (value) {
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      }
    }
  },
  MARVIN: {
    range: {min: 0, max: 100},
    start: 100,
    step: 1,
    format: {
      to: function (value) {
        return `${value}%`;
      },
      from: function (value) {
        return parseFloat(value);
      }
    }
  },
  PHOBOS: {
    range: {min: 0, max: 3},
    start: 3,
    step: 0.1,
    format: {
      to: function (value) {
        return `${value.toFixed(1)}px`;
      },
      from: function (value) {
        return parseFloat(value);
      }
    }
  },
  HEAT: {
    range: {min: 1, max: 3},
    start: 3,
    step: 0.1,
    format: {
      to: function (value) {
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      }
    }
  }
};
*/


const generateSlider = () => {
  uploadImageEffectLevel.classList.add('hidden');
  noUiSlider.create(effectSlider, {
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
    previewImage.removeAttribute('class');
    return;
  }
  uploadImageEffectLevel.classList.remove('hidden');
  previewImage.removeAttribute('class');
  previewImage.classList.add(`effects__preview--${effect}`);
  //effectSlider.noUiSlider.updateOptions(EFFECTS[effect].options);
  //effectSlider.noUiSlider.on('update', () => {
  //  effectLevelValue.value = effectSlider.noUiSlider.get();
  //  previewImage.style.filter = `${EFFECTS[effect].filter}(${effectLevelValue.value}${EFFECTS[effect].unit})`;
  //});
};

const deleteSlider = () => {
  uploadImageEffectLevel.classList.add('hidden');
};

export { changeFilter, generateSlider, deleteSlider };
