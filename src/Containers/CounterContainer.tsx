import { inject, observer } from "mobx-react";
import React from "react";
import Counter from "../Components/Counter";
import RootStore from "../Stores";

interface Props {
  count?: number;
  increase?: () => void;
  decrease?: () => void;
}

function CounterContainer({ count, increase, decrease }: Props) {
  return <Counter count={count!} increase={increase!} decrease={decrease!} />;
}

export default inject(({ countStore }: RootStore) => ({
  count: countStore.count,
  increase: countStore.increase,
  decrease: countStore.decrease,
}))(observer(CounterContainer));
