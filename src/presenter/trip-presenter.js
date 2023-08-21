import PointListView from '../view/point-list-view';
import PointView from '../view/point-view';
import EditingFormtView from '../view/editing-form-view';
import TripSortingtView from '../view/trip-sorting-view';
import { render, } from '../render';

export default class TripPresenter {
  tripListComponent = new PointListView();

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(new TripSortingtView(), this.tripContainer);
    render(this.tripListComponent, this.tripContainer,);

    render(new EditingFormtView(), this.tripListComponent.getElement());

    for(let i = 0; i < 3; i++) {
      render(new PointView(), this.tripListComponent.getElement());
    }
  }
}

