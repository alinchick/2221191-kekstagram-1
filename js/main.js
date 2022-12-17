import { renderPictures } from './draw-picture.js';
import { renderUploadWindow, showUploadMessage } from './form.js';
import { getData } from './api.js';
//import { generateSlider } from './effects-image.js';

getData(renderPictures, showUploadMessage);
renderUploadWindow();

