import PointView from './view/point-view.js';
import FilterView from './view/trip-filters.js';
import { render,RenderPosition } from './render.js';

const pointElement = document.querySelector('.trip-events');
const filterElement = document.querySelector('.trip-main');

render(new PointView, pointElement, RenderPosition.BEFOREEND);
render(new FilterView, filterElement);
