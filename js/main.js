import {generatePosts} from './data.js';
import {renderPictures} from './draw-picture.js';

const data = generatePosts();
renderPictures(data);
