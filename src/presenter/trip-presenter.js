import PointView from '../view/Point-view';
import PointListView from '../view/list_view';
import EditingFormtView from '../view/editing-form-view';
import TripSortingtView from '../view/trip-sorting-view';
import { render, RenderPosition } from '../render';

export default class TripPresenter {
  tripListComponent = new PointListView();

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(this.tripListComponent, this.tripContainer,);
    const pointListElement = this.tripContainer.querySelector('.trip-events__list');

    render(new TripSortingtView(),this.tripContainer,RenderPosition.AFTERBEGIN);
    render(new EditingFormtView(), pointListElement);

    for(let i = 0; i < 3; i++) {
      render(new PointView(), pointListElement);
    }
  }
}

