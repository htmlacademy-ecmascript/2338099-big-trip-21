import PointView from './view/point-view.js';
import { render, } from './render.js';

const pointElement = document.querySelector('.trip-main');


render(new PointView, pointElement);
