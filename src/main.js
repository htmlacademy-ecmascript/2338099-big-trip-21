import NewTripInfoView from './view/trip-info.js';
import NewTripfilterView from './view/trip-filters.js';
import NewPointListView from './view/list_view.js';
import { render, RenderPosition } from './render.js';
import NewTripPresenter from './presenter/trip-presenter.js';


const tripContainer = document.querySelector('.trip-events');
const tripElement = document.querySelector('.trip-main');
const tripFilterElement = document.querySelector('.trip-controls__filters');


render(new NewTripInfoView(), tripElement,RenderPosition.AFTERBEGIN);
render(new NewTripfilterView(),tripFilterElement);
render(new NewPointListView(),tripContainer);

const tripPresenter = new NewTripPresenter({tripContainer});

tripPresenter.init();
