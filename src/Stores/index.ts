import CountStore from "./countStore";

class RootStore {
  count: CountStore;

  constructor() {
    this.count = new CountStore(this);
  }
}

export default RootStore;