import NewPoinView from '../view/Point-viwe';
import NewPointListView from '../view/list_view';
import NewEditingFormtView from '../view/editing-form';
import NewTripSortingtView from '../view/trip-sorting';
import { render } from '../render';

export default class NewTripPresenter {
  tripListComponent = new NewPointListView();

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(this.tripListComponent, this.tripContainer);
    const pointListElement = this.tripContainer.querySelector('.trip-events__list');

    render(new NewTripSortingtView(),pointListElement);
    render(new NewEditingFormtView(), pointListElement);

    for(let i = 0; i < 3; i++) {
      render(new NewPoinView(), pointListElement);
    }
  }
}

