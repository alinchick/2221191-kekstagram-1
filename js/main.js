//import {generatePosts} from './data.js';
import {renderPictures} from './draw-picture.js';
import {renderUploadWindow} from './form.js';
import { getData } from './api.js';

getData(renderPictures);
renderUploadWindow();

