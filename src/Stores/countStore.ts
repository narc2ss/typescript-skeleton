import { action, observable } from "mobx";
import RootStore from ".";

class CountStore {
  root: RootStore

  constructor(root: RootStore) {
    this.root = root;
  }
  @observable
  count = 0;

  @action
  public increase = () => {
    this.count += 1;
    console.log(this.count);
  }

  @action
  public decrease = () => {
    this.count -= 1;
    console.log(this.count);
  }
}

export default CountStore;