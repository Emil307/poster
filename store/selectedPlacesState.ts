import { makeAutoObservable } from "mobx";
import type { TPlace } from "@/domain/types/types";

class placesState {
  places = <TPlace[]>[];
  costSum = 0;

  constructor() {
    makeAutoObservable(this);
  }
  
  selectPlace(place: TPlace) {
    this.places.push(place);
    this.costSum += place.cost;
  }

  unSelectPlace(place: TPlace) {
    this.costSum -= place.cost;
    this.places = this.places.filter(item => {
      return item.id !== place.id && item;
    })
  }
}

export default new placesState();
