import { renderUploadWindow, showUploadMessage } from './form.js';
import { getData } from './api.js';
import { showFilteredPictures } from './filters-image.js';

getData(showFilteredPictures, showUploadMessage);
renderUploadWindow();

