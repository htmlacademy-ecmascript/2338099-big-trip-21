import NewPoinView from '../view/Point-viwe';
import NewPointListView from '../view/list_view';
import NewEditingFormtView from '../view/editing-form';
import NewTripSortingtView from '../view/trip-sorting';
import { render } from '../render';

export default class NewTripPresenter {
  tripSortingComponent = new NewPointListView();

  constructor({tripContainer}) {
    this.tripContainer = tripContainer;
  }

  init() {
    render(this.tripSortingComponent,this.tripContainer);
    const pointListElement = this.tripContainer.querySelector('.trip-events__list');
    const editingFormElement = this.tripContainer.querySelector('.trip-events__list');

    render(new NewTripSortingtView(),editingFormElement);
    render(new NewEditingFormtView(), editingFormElement);

    for(let i = 0; i < 3; i++) {
      render(new NewPoinView(), pointListElement);
    }
  }
}
