import {generatePosts} from './data.js';
import {renderPictures} from './drawPicture.js';

const data = generatePosts();
renderPictures(data);
