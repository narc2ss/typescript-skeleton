import CountStore from "./countStore";

class RootStore {
  countStore: CountStore;

  constructor() {
    this.countStore = new CountStore(this);
  }
}

export default RootStore;