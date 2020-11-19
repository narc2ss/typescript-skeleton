import { inject, observer } from "mobx-react";
import React from "react";
import RootStore from "./store";

interface Props {
  count?: number;
  increase?: () => void;
  decrease?: () => void;
}

const App = ({ count, increase, decrease }: Props) => {
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
};

export default inject(({ count }: RootStore) => ({
  count: count.count,
  increase: count.increase,
  decrease: count.decrease,
}))(observer(App));
