import React from "react";

interface Props {
  count: number;
  increase: () => void;
  decrease: () => void;
}

function Counter({ count, increase, decrease }: Props) {
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </>
  );
}

export default Counter;
