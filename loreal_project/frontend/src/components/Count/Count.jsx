import { useState } from "react";

function Count() {
  const [count, setCount] = useState(0);

  const addBasket = () => {
    setCount((prev) => prev + 1);
  };

  const removeBasket = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="buttongroup1">
      <button onClick={removeBasket}>-</button>
      <span>{count}</span>
      <button onClick={addBasket}>+</button>
    </div>
  );
}

export default Count;
